let num1 = "";
let num2 = "";
let answer = "";
let operation = "";
export const content = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."];
export const extra = ["AC", "+/-", "%"];
export const ops = ["/", "x", "-", "+", "="];
const writeOnClick = (a) => {
  text.innerText += a;
};
const reset = () => {
  text.innerText = "";
  num1 = "";
  num2 = "";
  operation = "";
};
const checkNum = (num) => {
  let result = false;
  let n = Number(num);
  for (let i = 0; i < 10; i++) {
    n === i ? (result = true) : null;
  }
  // !(answer == "") ? (text.innerText = "") : null;
  return result;
};
const checkOp = (op) => {
  let result = true;

  if (op == "/" || op == "x" || op == "-" || op == "+") {
    operation = op;
    console.log(operation);
    if (!(answer == "")) {
      text.innerText = "";
    }
  } else {
    result = false;
  }
  console.log(operation);
  return result;
};
const nextNum = () => {
  if (!(num1 == "") && answer == "") {
    calculate();
  } else {
    num1 = Number(text.innerHTML);
    text.innerHTML = "";
  }
};
const calculate = () => {
  num2 = Number(text.innerHTML);
  operation == "/"
    ? (answer = num1 / num2)
    : operation == "x"
    ? (answer = num1 * num2)
    : operation == "-"
    ? (answer = num1 - num2)
    : operation == "+"
    ? (answer = num1 + num2)
    : null;
  text.innerText = answer;
  console.log(num1);
  console.log(operation);
  console.log(num2);
  console.log(answer);
  num1 = Number(text.innerText);
  num2 = "";
  console.log(num1);
};
const negate = () => {
  text.innerText[0] == "-"
    ? (text.innerText = text.innerText.slice(1, text.innerText.length))
    : (text.innerText = "-" + text.innerText);
};
