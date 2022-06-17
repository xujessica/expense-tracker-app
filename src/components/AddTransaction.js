import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [sign, setSign] = useState({
    checked: false,
  });
  const [amount, setAmount] = useState();
  const [category, setCategory] = useState("");

  const { addTransaction } = useContext(GlobalContext);
  const { addBudgetExpense } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newAmount = sign === "negative" ? amount * -1 : amount;
    const id = Math.floor(Math.random() * 10000000000);

    const newTransaction = {
      id: id,
      text,
      sign,
      amount: +newAmount, // turns it into a number
      category,
    };

    const newBudgetExpense = {
      id: id,
      text,
      amount: +newAmount,
      category,
    };

    addTransaction(newTransaction);
    if (sign === "negative") {
      addBudgetExpense(newBudgetExpense);
    }

    setText("");
    setSign(() => {
      return {
        checked: false,
      };
    });
    setAmount("");
    setCategory("");
  };

  return (
    <div className="add-transaction">
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label className="label" htmlFor="text">
            Text
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label className="label" htmlFor="amount">
            Amount
          </label>
          <div className="radio-btns">
            <input
              type="radio"
              className="single-radio"
              name="btns"
              value="positive"
              checked={sign.checked}
              onChange={(e) => setSign(e.target.value)}
            />
            Income
            <input
              type="radio"
              className="single-radio"
              name="btns"
              value="negative"
              checked={sign.checked}
              onChange={(e) => setSign(e.target.value)}
            />
            Expense
          </div>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        {sign === "negative" ? (
          <div className="form-control">
            <label className="label" htmlFor="category">
              Budget Category (optional)
            </label>
            <input
              type="text"
              value={category}
              placeholder="Enter budget category..."
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
        ) : null}
        <button className="add-btn">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
