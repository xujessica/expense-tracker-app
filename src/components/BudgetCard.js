import React from "react";
import { currencyFormatter } from "./utils";
import ProgressBar from "./ProgressBar";

const BudgetCard = ({ name, amount, max }) => {
  return (
    <div className="budget-card">
      <div className="top">
        <div className="title">{name}</div>
        <div className="amount">
          {currencyFormatter.format(amount)}
          <div className="muted">/ {currencyFormatter.format(max)}</div>
        </div>
      </div>
      <ProgressBar amount={amount} max={max} />
      <div>
        <button className="view-btn">View Expenses</button>
      </div>
    </div>
  );
};

export default BudgetCard;
