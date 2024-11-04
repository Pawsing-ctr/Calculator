import React, { useState } from "react";
import "./Home.css";
import { buttonKey } from "../../constants/buttonKey";
const errorText = "Ошибка";
const regularNumber = /[0-9]/;
const masOperator = [".", "%", "/", "*", "-", "+"];
const Home: React.FC = () => {
  const [calculatorInput, setCalculatorInput] = useState("0");
  // const answerNumber = eval(calculatorInput);

  const handleCalculate = (value: string) => {
    switch (value) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        setCalculatorInput((prev) => {
          if (prev[0] === "0" && !masOperator.some((el) => el === prev[1])) {
            return prev.slice(1) + value;
          } else if (prev === errorText) {
            return value;
          } else {
            return prev + value;
          }
        });
        break;
      case "AC":
        setCalculatorInput("0");
        break;
      case "+/-":
        setCalculatorInput((prev) => {
          if (prev[0] === "-") {
            return prev.slice(1);
          }
          if (prev === "") {
            return prev;
          } else if (prev === errorText) {
            return "0";
          } else {
            return "-" + prev;
          }
        });
        break;

      case "%":
      case "/":
      case "*":
      case "-":
      case "+":
        setCalculatorInput((prev) => {
          if (prev[prev.length - 1] === value) {
            return prev;
          } else if (prev === "") {
            return prev;
          } else if (regularNumber.test(prev[prev.length - 1])) {
            return prev + value;
          } else if (prev === errorText) {
            return "0";
          } else {
            return prev;
          }
        });
        break;
      case ".":
        setCalculatorInput((prev) => {
          if (prev.includes(".")) {
            return prev;
          } else if (prev === errorText) {
            return "0";
          } else {
            return prev + value;
          }
        });
        break;
      case "=":
        setCalculatorInput((prev) => {
          if (prev === errorText) {
            return "0";
          } else if (eval(prev) === Infinity) {
            return errorText;
          } else {
            return eval(prev);
          }
        });
        break;
    }
  };

  return (
    <body>
      <div className="calculator">
        <input
          onChange={(e) => setCalculatorInput(e.target.value)}
          type="text"
          value={calculatorInput}
          className="calculator-screen"
        />
        {/* <div className="answer-calculator-screen">{answerNumber}</div> */}

        <div className="calculator-keys">
          {buttonKey.map((el) => {
            return (
              <button
                onClick={() => handleCalculate(el.value)}
                className={el.className}
              >
                {el.value}
              </button>
            );
          })}
        </div>
      </div>
    </body>
  );
};

export default Home;
