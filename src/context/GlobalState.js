import React, { createContext, useReducer } from "react";
//import {AppReducer} from './AppReducer'
const initialState = {
  transactions: [
    { id: 1, text: "Current Bill", amount: -990 },
    { id: 2, text: "Salary", amount: 50000},
    { id: 3, text: "Bazar", amount: -12500 },
    { id: 4, text: "Education", amount: -5000 },
  ],
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (indTrans) => indTrans.id != action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions,action.payload]
      };
    default:
      return state;
  }
};

// its like a global variable
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions that will call our reducer
  //dispatch is our action
  const addTrasaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTrasaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
