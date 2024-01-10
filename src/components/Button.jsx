import "../style/button.css"
const Button = (props) => {
    let character = props.text;
    let setVal = props.setVal;
    
    return (
      <div className="calcBtn" onClick={() => setVal((a)=>a+character)}>
        {character}
      </div>
    );
}
export default Button