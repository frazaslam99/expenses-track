



import React, { createContext, useReducer } from 'react';
import AppReducer from './expensesreducer';

// Initial state
const initialState = {
  transactions: [
    { id: 1,amount: 800, text: "Cash" },
    { id: 2,amount: 40, text: "Book" },
    { id: 3,amount: -200, text: "Camera" }

  ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>);
}