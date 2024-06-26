import React, { useReducer, useContext } from 'react'
import {reducer, initialState } from './reducer'

// Create context for auth state and dispatch; these will be used to manage and distribute auth state and actions.
const AuthStateContext = React.createContext()
const AuthDispatcherContext = React.createContext() // dar dakhlesh mikhaym component Auth provider ijad konim.

// ye component bara provider va 2 custoom hook bara inke hardafe context tekrar nakonim  


// 2 custom hook :
// Custom hook for accessing the auth state context. Ensures the hook is used within a provider.
export function useAuthState() {
    const context = useContext(AuthStateContext); 

    // dakhel ey consumer estedade mikonim chon meghdar avalie nadarim check mikonim age context nabood az authprovider dakhel barname estedafe nashode
    // pas ye error tolid mikonim .
    if (!context) {  // Correctly checks if context is NOT available
        throw new Error('useAuthState must be used within an AuthProvider');
    }
    return context;
}

// Custom hook for accessing the auth dispatch context. Ensures the hook is used within a provider.
export function useAuthDispatch() {
    const context = useContext(AuthDispatcherContext); // Correctly declared and initialized
    if (!context) {  // Correctly checks if context is NOT available
        throw new Error('useAuthDispatch must be used within an AuthProvider');
    }
    return context;
}







export function AuthProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState)








     // Context Providers wrapping children to provide state and dispatch down the component tree
    return (
        <AuthStateContext.Provider value={state}>
            <AuthDispatcherContext.Provider value={dispatch} >
                {children}
            </AuthDispatcherContext.Provider>
        </AuthStateContext.Provider>
    )
}
