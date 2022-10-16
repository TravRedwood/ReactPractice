import React, { useState } from "react";

const App = () => {
  const [tempValue, setTempValue] = useState(30);
  const [tempColor, setTempColor] = useState("cold");

  const increaseTemp = () => {
    // first function ran is to check temp value. if value is = 100 the increaseTemp function will return and end
    // if (tempValue === 100) return;

    const newTemp = tempValue + 10;

    if (newTemp > 50) {
      setTempColor("hot");
    }

    setTempValue(newTemp);
  };

  const decreaseTemp = () => {
    //if (tempValue === -100) return;

    const newLowerTemp = tempValue - 10;

    if (newLowerTemp < 50) {
      setTempColor("cold");
    }

    setTempValue(newLowerTemp);
  };

  //set inline logic to disable button is temp value is = 100

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${tempColor}`}>{tempValue}℉</div>
      </div>

      <div className="button-container">
        <button
          disabled={tempValue === 100 ? true : false}
          onClick={() => increaseTemp()}
        >
          +
        </button>
        <button
          disabled={tempValue === -100 ? true : false}
          onClick={() => decreaseTemp()}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default App;
