import "../style/calculator.css";
import Button from "./Button";
import Display from "./Display";
import { content } from "../utils/data";
import { extra } from "../utils/data";
import { ops } from "../utils/data";
import { useState } from "react";
const Calculator = () => {
  const [dispVal, setDispVal] = useState(" ");

  return (
    <div className="calc">
      <Display value={dispVal} />
      <div className="btnCont">
        <div className="temp">
          <div className="extra">
            {extra.map((a, i) => (
              <Button text={a} key={i} />
            ))}
          </div>
          <div className="num">
            {content.map((a, i) => (
              <Button text={a} key={i} setVal={setDispVal} />
            ))}
          </div>
        </div>
        <div className="op">
          {ops.map((a, i) => (
            <Button text={a} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Calculator;
