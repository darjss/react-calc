import "../style/calculator.css"
import Button from "./Button"
import Display from "./Display"
import { content } from "../utils/data"
const Calculator = () => {
    return (
        <div className="calc">
            {content.map((a, i) => <Button text={a} key={i } />)}
        </div>
    )
}
export default Calculator