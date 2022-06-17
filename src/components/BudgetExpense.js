import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const BudgetExpense = ({ budgetExpense }) => {
  const { deleteBudgetExpense } = useContext(GlobalContext);

  return (
    <li>
      {budgetExpense.text} <span>-${Math.abs(budgetExpense.amount)}</span>
      <button
        onClick={() => deleteBudgetExpense(budgetExpense.id)}
        className="modal-delete-btn"
      >
        x
      </button>
    </li>
  );
};

export default BudgetExpense;
