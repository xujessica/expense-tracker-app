import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// every global state goes in this object
const initialState = {
    transactions: [],
  };
  
  // create context
  export const BudgetContext = createContext(initialState);

export const BudgetProvider = ({ children }) => {


}
