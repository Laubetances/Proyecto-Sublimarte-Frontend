'use client';
import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    onAuthStateChanged, 
    signInAnonymously, 
    signInWithCustomToken 
} from 'firebase/auth';
import { 
    getFirestore, 
    doc, 
    setDoc, 
    onSnapshot, 
    
} from 'firebase/firestore';

// ------------------------------------------
// 1. Configuración y Conexión de Firebase
// ------------------------------------------

// Variables globales proporcionadas por el entorno (MANDATORIO)
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
const firebaseConfig = JSON.parse(typeof __firebase_config !== 'undefined' ? __firebase_config : '{}');
const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

// Inicialización de las variables de Firebase
let app;
let db;
let auth;

// Inicialización segura de Firebase
try {
    if (Object.keys(firebaseConfig).length > 0) {
        app = initializeApp(firebaseConfig);
        db = getFirestore(app);
        auth = getAuth(app);
        console.log("Firebase inicializado con éxito.");

        // Intentar autenticación inicial con token personalizado o anónima (fuera del componente para evitar re-ejecución)
        if (initialAuthToken) {
            signInWithCustomToken(auth, initialAuthToken).catch(err => {
                console.error("Error al iniciar sesión con token personalizado:", err);
                signInAnonymously(auth).catch(e => console.error("Error al iniciar sesión anónimamente:", e));
            });
        } else if (auth) {
             // Si no hay token, iniciamos sesión anónimamente
             signInAnonymously(auth).catch(e => console.error("Error al iniciar sesión anónimamente:", e));
        }
    } else {
        console.warn("Firebase config no está disponible. El carrito será temporal.");
    }
} catch (error) {
    console.error("Error crítico al inicializar Firebase:", error);
}

// ------------------------------------------
// 2. Definición del Contexto
// ------------------------------------------

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // El estado del carrito ahora empieza vacío y se llenará con los datos de Firestore
    const [cartItems, setCartItems] = useState([]);
    const [user, setUser] = useState(null); // Estado del usuario (Firebase)
    const [isAuthReady, setIsAuthReady] = useState(false); // Indica si la autenticación ya se procesó
    const [isLoading, setIsLoading] = useState(true); // Indica si está cargando datos iniciales

    // Función que construye la referencia al documento del carrito del usuario
    // Ruta: /artifacts/{appId}/users/{userId}/cart/currentCart
    const getCartDocRef = (uid) => doc(db, 'artifacts', appId, 'users', uid, 'cart', 'currentCart');

    // ------------------------------------------
    // A. Lógica de Autenticación y Carga Inicial
    // ------------------------------------------

    useEffect(() => {
        // Si Firebase no se inicializó correctamente (la app no está definida), detenemos el proceso 
        if (!app || !auth || !db) {
            console.warn("Firebase no está completamente inicializado. Usando carrito temporal.");
            setCartItems([]);
            setIsLoading(false);
            setIsAuthReady(true);
            return;
        }

        // Suscribirse a cambios en el estado de autenticación (login/logout)
        const unsubscribeAuth = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            setIsAuthReady(true);
            
            if (currentUser) {
                const uid = currentUser.uid;
                const cartRef = getCartDocRef(uid);
                console.log(`Usuario autenticado (${uid}). Iniciando escucha de carrito...`);
                
                // 1. Escuchar el carrito en tiempo real (onSnapshot)
                const unsubscribeFirestore = onSnapshot(cartRef, (docSnap) => {
                    if (docSnap.exists() && docSnap.data().items) {
                        setCartItems(docSnap.data().items);
                        console.log("Carrito cargado desde Firestore.");
                    } else {
                         // Si el documento no existe, lo inicializamos en el estado local
                         setCartItems([]);
                         console.log("Documento de carrito no encontrado. Inicializando carrito vacío.");
                    }
                    setIsLoading(false); // La carga inicial ha terminado
                }, (error) => {
                    console.error("Error al escuchar el carrito en Firestore:", error);
                    setIsLoading(false);
                });
                
                // Retornar la función de limpieza de onSnapshot para evitar fugas de memoria
                return () => unsubscribeFirestore();

            } else {
                console.log("Usuario desconectado/Anónimo. Carrito local (temporal) activo.");
                setCartItems([]); // Si no hay usuario, el carrito es temporal/vacío
                setIsLoading(false);
            }
        });

        // Retornar la función de limpieza de onAuthStateChanged
        return () => unsubscribeAuth();
    }, []); // Dependencias vacías: solo se ejecuta al montar

    // ------------------------------------------
    // B. Lógica de Sincronización con Firestore
    // ------------------------------------------

    // Función para guardar el estado actual del carrito en Firestore
    const saveCartToFirestore = async (items) => {
        if (!user || !db) return; // No guardar si no hay usuario o Firebase no está listo

        const uid = user.uid;
        const cartRef = getCartDocRef(uid);
        
        try {
             // Usamos setDoc para sobrescribir el documento del carrito
             await setDoc(cartRef, { items, lastUpdated: new Date() }, { merge: true });
             console.log("Carrito guardado en Firestore.");
        } catch (error) {
             console.error("Error al guardar el carrito en Firestore:", error);
        }
    };

    // Efecto que se dispara cada vez que cambia 'cartItems' para guardarlo en la base de datos
    useEffect(() => {
        // Solo guardamos si la autenticación está lista, hay un usuario, y la carga inicial terminó
        if (isAuthReady && user && !isLoading) {
            saveCartToFirestore(cartItems);
        }
    }, [cartItems, isAuthReady, user, isLoading]);
    
    // ------------------------------------------
    // C. Funciones de Manipulación del Carrito
    // ------------------------------------------

    const addItemToCart = (item) => {
        setCartItems(prevItems => {
            // Buscar si el ítem (por id y design_id) ya está en el carrito
            const existingItemIndex = prevItems.findIndex(i => 
                i.id === item.id && i.design_id === item.design_id
            );

            if (existingItemIndex > -1) {
                // Si el artículo existe, actualizar la cantidad
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex].quantity += item.quantity || 1;
                return updatedItems;
            } else {
                // Si no existe, añadir el nuevo artículo
                return [...prevItems, { ...item, quantity: item.quantity || 1 }];
            }
        });
    };

    const removeItemFromCart = (itemId, designId) => {
        setCartItems(prevItems => prevItems.filter(i => 
            !(i.id === itemId && i.design_id === designId)
        ));
    };

    const updateItemQuantity = (itemId, designId, newQuantity) => {
        setCartItems(prevItems => prevItems.map(item => {
            if (item.id === itemId && item.design_id === designId) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        }));
    };

    // ------------------------------------------
    // D. Cálculos
    // ------------------------------------------

    // Calcula el número total de ítems usando useMemo para optimizar
    const totalItems = useMemo(() => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    }, [cartItems]);

    const value = {
        cartItems,
        totalItems,
        addItemToCart,
        removeItemFromCart,
        updateItemQuantity,
        user,
        isLoading: isLoading || !isAuthReady,
    };

    // ------------------------------------------
    // E. Proveedor (Manejo del estado de carga)
    // ------------------------------------------

    if (isLoading || !isAuthReady) {
         // Muestra un loader simple mientras espera la autenticación y la carga de Firestore
         return (
            <div className="flex justify-center items-center h-screen bg-gray-50">
                <div className="flex items-center space-x-2 text-pink-600">
                    <svg className="animate-spin h-5 w-5 mr-3 text-pink-600" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Cargando carrito y usuario...</span>
                </div>
            </div>
         );
    }


    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
