import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction, openModal }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const { deleteBudgetExpense } = useContext(GlobalContext);

  const sign = transaction.sign === "negative" ? "-" : "+";

  return (
    <li className={transaction.sign === "negative" ? "minus" : "plus"}>
      <button
        onClick={() => {
          deleteTransaction(transaction.id);
          deleteBudgetExpense(transaction.id);
        }}
        className="delete-btn"
      >
        x
      </button>
      <section className="text">
        <span>{transaction.text} </span>
        <span className="amount">
          {sign}${Math.abs(transaction.amount)}
        </span>
      </section>
    </li>
  );
};

export default Transaction;
