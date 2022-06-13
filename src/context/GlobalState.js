import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// every global state goes in this object
const initialState = {
  transactions: [],
  budgets: [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider component (provides state and actions to components its wrapped around)
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions (that make calls to reducer)
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id, // data we want to send to it
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction, // data we want to send to it
    });
  }

  function addBudget(budget) {
    dispatch({
      type: "ADD_BUDGET",
      payload: budget, // data we want to send to it
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        budgets: state.budgets,
        deleteTransaction,
        addTransaction,
        addBudget,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
