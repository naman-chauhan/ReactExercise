import React, { useState } from "react";
import Addition from "./components/Addition";
import Subtraction from "./components/Subtraction";
import Multiplication from "./components/Multiplication";
import Divison from "./components/Divison";
import "./styles.css";

const App = () => {
  const [count, setCount] = useState(null);
  const [count2, setCount2] = useState(null);
  const [ans, setAns] = useState(0);
  const handleaddNumber = (e) => {
    setCount(e.target.value);
    console.log(count);
  };

  const handleaddNumber2 = (e) => {
    setCount2(e.target.value);
    console.log(count2);
  };

  return (
    <div className="App">
      <h2 className="display-4">Arithmatic calculator</h2>
      <input
        onChange={(e) => handleaddNumber(e)}
        value={count ? count : ""}
        type="number"
        className="form-control"
      />
      <input
        onChange={(e) => handleaddNumber2(e)}
        value={count2 ? count2 : ""}
        type="number"
        className="form-control"
      />
      <div>
          <Addition
            values={count > 0 ? count : ""}
            values2={count2 ? count2 : ""}
            setAnswer={setAns}
          />
          <Subtraction
            values={count > 0 ? count : ""}
            values2={count2 ? count2 : ""}
            setAnswer={setAns}
          />
          <Multiplication
            values={count > 0 ? count : ""}
            values2={count2 > 0 ? count2 : ""}
            setAnswer={setAns}
          />
          <Divison
            values={count > 0 ? count : ""}
            values2={count2 ? count2 : ""}
            setAnswer={setAns}
          />
          <p className="display-4">{ans}</p>
      </div>
    </div>
  );
};

export default App;
