import React from "react";
import "../styles.css";

const Addition = (props) => {
  const addNum = () => {
    let a = parseInt(props.values);
    let b = parseInt(props.values2);
    props.setAnswer(a + b);
  };

  return (
    <div className="App">
      <button className="btn btn-primary" onClick={() => addNum()}>
        Addition
      </button>
    </div>
  );
};

export default Addition;
