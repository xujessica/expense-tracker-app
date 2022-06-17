import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { BudgetCard } from "./BudgetCard";

const BudgetList = ({ setOpenModal, setBudget }) => {
  const { budgets } = useContext(GlobalContext);
  const { budgetExpenses } = useContext(GlobalContext);

  const listExpenses = (name) => {
    const category =
      budgetExpenses.category === null || name === "total"
        ? budgetExpenses
        : budgetExpenses.filter(
            (budgetExpense) => budgetExpense.category === name
          );
    const amounts = category.map((cat) => cat.amount);

    return amounts
      .filter((item) => item < 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2);
  };

  return (
    <div>
      {budgets
        .map((budget) => (
          <BudgetCard
            key={budget.id}
            budget={budget}
            amount={Math.abs(listExpenses(budget.text))}
            setOpenModal={setOpenModal}
            setBudget={setBudget}
          />
        ))
        .reverse()}
    </div>
  );
};

export default BudgetList;
