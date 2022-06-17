import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddBudget = () => {
  const [text, setText] = useState("");
  const [max, setMax] = useState();

  const { addBudget } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newBudget = {
      id: Math.floor(Math.random() * 10000000000),
      text,
      max: +max, // turns it into a number
    };

    addBudget(newBudget);

    setText("");
    setMax("");
  };

  return (
    <div className="add-budget">
      <h3>Add New Budget Category</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label className="label" htmlFor="text">
            Budget category
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter budget category..."
          />
        </div>
        <div className="form-control">
          <label className="label" htmlFor="max">
            Max Amount
          </label>
          <input
            type="number"
            value={max}
            onChange={(e) => setMax(e.target.value)}
            placeholder="Enter max..."
          />
        </div>
        <button className="add-btn">Add Budget</button>
      </form>
    </div>
  );
};

export default AddBudget;
