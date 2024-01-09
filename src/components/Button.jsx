import "../style/button.css"
const Button = (prop) => {
    let character = prop.text;
    return (
        <div className="calcBtn">
            <p>{ character}</p>
        </div>
    )
}
export default Button