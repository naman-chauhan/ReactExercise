import { useState } from "react";

// increment count component
function MyButtonAdd({ onClick }) {
  return (
    <button onClick={onClick} className="btn btn-primary">
      +
    </button>
  );
}

// decrement count component
function MyButtonPop({ onClick }) {
  return (
    <button onClick={onClick} className="btn btn-primary">
      -
    </button>
  );
}

//Main App Function
export default function MyApp() {
  // useState declaration

  const [count, setCount] = useState(0);

  function handleClick(choice) {
    if (choice === "add") {
      setCount(count + 1);
      console.log("add called");
    } else if (choice === "sub") {
      setCount(count - 1);
      console.log("sub called");
    }
  }

  return (
    <div>
      <h1>Add To Cart</h1>
      <MyButtonAdd onClick={() => handleClick("add")} />

      <h6 className="display-4">{count}</h6>

      <MyButtonPop onClick={() => handleClick("sub")} />
    </div>
  );
}
