import React, { useReducer, useContext } from 'react'

const AuthStateContext = React.createContext()
const AuthDispatcherContext = React.createContext() // dar dakhlesh mikhaym component Auth provider ijad konim.

// ye component bara provider va 2 custoom hook bara inke hardafe context tekrar nakonim  

export function AuthProvider({children}){

const [state,dispatch ]= useReducer(reducer, initalState)

return (
    <AuthStateContext.Provider value={state}>

    </AuthStateContext.Provider>
)

}
