import React, { createContext, useReducer } from "react";
import axios from "axios"
//import {AppReducer} from './AppReducer'
const initialState = {
  transactions: [],
  error:null,
  loading:true
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case "GET_TRANSACTIONS":
      return {
        ...state,
        loading:false,
        transactions:action.payload
      }
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (indTrans) => indTrans._id != action.payload
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

  //for backend action
  const getTransactions=async () =>{
    try {
      const res=await axios.get("/api/v1/transactions")

      dispatch(
        {
          type:"GET_TRANSACTIONS",
          payload:res.data.data
        }
      )
    } catch (err) {
      console.log(err)
    }
  }

  //actions that will call our reducer
  //dispatch is our action
  //here backend is also working
  const addTrasaction = async (transaction) => {
    const config = {
      headers: {
        'Content-Type':"application/json"
      }
    }

    try {
      const res=await axios.post("/api/v1/transactions",transaction,config)
      dispatch({
        type: "ADD_TRANSACTION",
        payload: res.data.data,
      });
    } catch (error) {
      console.log(error)
    }

 
  };

  //here backend is also working
  const deleteTransaction = async (id) => {

    try {
      //backend staff
      await axios.delete(`/api/v1/transactions/${id}`)

      dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
    } catch (error) {
      console.log(error)
    }

    
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTrasaction,
        getTransactions,
        loading:state.loading
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
