import "../style/calculator.css";
import Button from "./Button";
import Display from "./Display";
import DarkMode from "./DarkMode";
import { content } from "../utils/data";
import { extra } from "../utils/data";
import { ops } from "../utils/data";
import { useState } from "react";

const Calculator = () => {
  const [dispVal, setDispVal] = useState("");
  const [prevVal, setPrevVal] = useState("");
  const [futOp, saveOp] = useState("");
  const operations = (op) => {
    setPrevVal(dispVal);
    setDispVal("");
    saveOp(op);
  };
  const calculate = () => {
    let result;
    futOp == "+"
      ? (result = Number(prevVal) + Number(dispVal) + "")
      : futOp == "-"
      ? (result = Number(prevVal) - Number(dispVal) + "")
      : futOp == "x"
      ? (result = Number(prevVal) * Number(dispVal) + "")
      : futOp == "+"
      ? (result = Number(prevVal) / Number(dispVal) + "")
      : null;
    setDispVal(result);
  };
  const write = (temp) => {
    setDispVal(dispVal + temp);
  };
  const clear = () => {
    setPrevVal("");
    setDispVal("");
  };
  const negate = () => {
    const reverse = Number(dispVal) * -1;
    setDispVal(reverse);
  };
  const percentage = () => {
    const perc = Number(dispVal) / 100;
    setDispVal(perc);
  };
  const clickHandler = (val) => {
    val == "+" || val == "-" || val == "x" || val == "/"
      ? operations(val)
      : val == "AC"
      ? clear()
      : val == "+/-"
      ? negate()
      : val == "%"
      ? percentage()
      : val == "="
      ? calculate()
      : write(val);
  };

  return (
    <div className="calc">
      <Display value={dispVal} />
      <div className="btnCont">
        <div className="temp">
          <div className="extra">
            {extra.map((a, i) => (
              <Button text={a} key={i} setVal={clickHandler} />
            ))}
          </div>
          <div className="num">
            {content.map((a, i) => (
              <Button text={a} key={i} setVal={write} />
            ))}
          </div>
        </div>
        <div className="op">
          {ops.map((a, i) => (
            <Button text={a} key={i} setVal={clickHandler} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Calculator;
