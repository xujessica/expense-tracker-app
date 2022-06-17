import React from "react";
import { currencyFormatter } from "./utils";
import ProgressBar from "./ProgressBar";

export const BudgetCard = ({ budget, amount, setOpenModal, setBudget }) => {
  return (
    <div className="budget-card">
      <div className="top">
        <div className="title">{budget.text}</div>
        <div className="amount">
          {currencyFormatter.format(amount)}
          <div className="muted">/ {currencyFormatter.format(budget.max)}</div>
        </div>
      </div>
      <ProgressBar amount={amount} max={budget.max} />
      <div className="btn-row">
        <button
          className="view-btn"
          onClick={() => {
            setOpenModal(true);
            setBudget(budget);
          }}
        >
          View Expenses
        </button>
      </div>
    </div>
  );
};

export default BudgetCard;
