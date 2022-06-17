import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// every global state goes in this object
const initialState = {
  transactions: [],
  budgets: [],
  budgetExpenses: [],
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

  function deleteBudget(id) {
    dispatch({
      type: "DELETE_BUDGET",
      payload: id, // data we want to send to it
    });
  }

  function addBudgetExpense(expense) {
    dispatch({
      type: "ADD_BUDGET_EXPENSE",
      payload: expense, // data we want to send to it
    });
  }

  function deleteBudgetExpense(id) {
    dispatch({
      type: "DELETE_BUDGET_EXPENSE",
      payload: id, // data we want to send to it
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        budgets: state.budgets,
        budgetExpenses: state.budgetExpenses,
        deleteTransaction,
        addTransaction,
        addBudget,
        deleteBudget,
        addBudgetExpense,
        deleteBudgetExpense,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
