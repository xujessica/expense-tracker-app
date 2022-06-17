import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import BudgetExpense from "./BudgetExpense";

export const BudgetModal = ({ budget, closeModal }) => {
  const { budgetExpenses } = useContext(GlobalContext);
  const { deleteBudget } = useContext(GlobalContext);

  const expenses =
    budget.text === "total"
      ? budgetExpenses
      : budgetExpenses &&
        budgetExpenses.filter(
          (budgetExpense) => budgetExpense.category === budget.text
        );

  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="exit-btn-row">
          <button className="exit-btn" onClick={() => closeModal(false)}>
            X
          </button>
        </div>
        <div className="title">{budget.text}</div>
        <div className="body">
          <ul className="modal-list">
            {expenses &&
              expenses.map((budgetExpense) => (
                <BudgetExpense
                  key={budgetExpense.id}
                  budgetExpense={budgetExpense}
                />
              ))}
          </ul>
        </div>
        <div className="buttons">
          <button
            className="delete-modal-btn"
            onClick={() => {
              deleteBudget(budget.id);
              closeModal(false);
            }}
          >
            Delete Budget Category
          </button>
        </div>
      </div>
    </div>
  );
};

export default BudgetModal;
