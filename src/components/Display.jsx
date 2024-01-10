import "../style/display.css"
const Display = (prop) => {
    let val=prop.value
    return (
        <div className="disp">
            {val}
        </div>
    )
}
export default Display