import React, { useState } from "react";

const Counter = () => {
  // logic
  // state라는 특별한 변수
  let [countState, setCountState] = useState(0);

  const handleIncrease = () => {
    console.log("+1");
    setCountState(countState + 1);
  };

  const handleDecrease = () => {
    console.log("-1");
  };

  // view
  return (
    <div>
      <h1>Counter</h1>
      <div
        style={{
          fontSize: "36px",
        }}
      >
        {countState}
      </div>
      <div>
        <button type="button" onClick={handleIncrease}>
          +1
        </button>
        <button type="button" onClick={handleDecrease}>
          -1
        </button>
      </div>
    </div>
  );
};

export default Counter;
