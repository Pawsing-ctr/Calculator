import React, { useState } from "react";
import "./Home.css";
import { buttonKey } from "../../constants/buttonKey";

const Home: React.FC = () => {
  const [calculatorInput, setCalculatorInput] = useState("0");

  // const handleClearInput = () => {
  //   setCalculatorInput("0");
  // };

  // const handlePlusSeven = () => {
  //   setCalculatorInput(calculatorInput + 7);
  // };
  return (
    <body>
      <div className="calculator">
        <input
          onChange={(e) => setCalculatorInput(e.target.value)}
          type="number"
          value={calculatorInput}
          className="calculator-screen"
          id="screen"
        />

        <div className="calculator-keys">
          {buttonKey.map((el) => {
            return <button className={el.className}>{el.value}</button>;
          })}
        </div>
      </div>
    </body>
  );
};

export default Home;
