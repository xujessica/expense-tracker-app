import React from "react";


const ProgressBar = ({ amount, max }) => {

    const ratio = amount / max;

  return (
    <div className="whole-bar">
      <div className="progress-done" style={{ width: `${ratio*100}%`}}></div>
    </div>
  );
};

export default ProgressBar;
