import React from "react";
import { currencyFormatter } from "./utils";
import ProgressBar from "./ProgressBar";
import { GlobalContext } from "../context/GlobalState";

export const BudgetCard = ({ budget, amount }) => {
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
        <button className="view-btn">View Expenses</button>
      </div>
    </div>
  );
};

export default BudgetCard;
