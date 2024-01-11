import "../style/button.css"
const Button = (props) => {
  let character = props.text;
  let setVal = props.setVal;
  if (character == "0") {
  return (
    <div className="calcBtn wide" onClick={() => setVal(character)}>
      {character}
    </div>
  );
  } else {
      return (
        <div className="calcBtn normal" onClick={() => setVal(character)}>
          {character}
        </div>
      );
  }

}
export default Button