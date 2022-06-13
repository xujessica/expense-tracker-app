import React, { useContext} from 'react'
import { GlobalContext } from "../context/GlobalState";
import {BudgetCard} from './BudgetCard'

const BudgetList = () => {
  const { budgets } = useContext(GlobalContext);
  const { transactions } = useContext(GlobalContext);

  const listExpenses = (name) => {

    const category = (transactions.category === null || name === "total") ? transactions : transactions.filter((transaction) => transaction.category === name);
    const amounts = category.map((cat) => cat.amount);

    return ((
      amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0)
    ).toFixed(2));
  }

  // const amounts = transactions.map((transaction) => transaction.amount);

  // const expense = (
  //   amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0)
  // ).toFixed(2);

  return (
    <div>
      {budgets.map((budget) => (
        <BudgetCard key={budget.id} budget={budget} amount={Math.abs(listExpenses(budget.text))} />
      )).reverse()}
    </div>
  )
}

export default BudgetList
