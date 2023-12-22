import React,{createContext,useReducer} from "react";
//import {AppReducer} from './AppReducer'
const initialState= {
    transactions: [  { id: 1, text: 'Flower', amount: -20 },
      { id: 2, text: 'Salary', amount: 300 },
      { id: 3, text: 'Book', amount: -10 },
      { id: 4, text: 'Camera', amount: 150 }
    ]
}

const AppReducer = (state,action)=>{
    switch(action.type){
        default:
            return state;
    }
}

// its like a global variable
export const GlobalContext=createContext(initialState)

//provider component
export const GlobalProvider = ({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState)

    return (
        <GlobalContext.Provider value={{
            transactions:state.transactions
        }}>
            {children}
        </GlobalContext.Provider>
    )
}