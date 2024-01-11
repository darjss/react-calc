import "./style/global.css"
import Calculator from "./components/Calculator"
import DarkMode from "./components/DarkMode";
import { useState } from "react";
export default function App() {
  const [dark, setDark] = useState(false);
  
    return (
      <div className="container">
        <DarkMode bool={dark} setDark={setDark} />
        <Calculator />
      </div>
    );
}