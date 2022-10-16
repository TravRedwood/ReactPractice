import React, { useState } from "react";

const App = () => {
  const [tempValue, setTempValue] = useState(30);

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className="temperature-display">{tempValue}℉</div>
      </div>

      <div className="button-container">
        <button onClick={() => setTempValue(tempValue + 10)}>+</button>
        <button onClick={() => setTempValue(tempValue - 10)}>-</button>
      </div>
    </div>
  );
};

export default App;
