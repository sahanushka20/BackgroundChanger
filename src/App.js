import { useState } from "react";
import "./App.css";
 
function App() {
  const [color, setcolor] = useState("black")
  return (
    <>
      <div className="bg" style={{backgroundColor: color}}>
        <div className="btn-tab">
          <button id="btns" className="Red-btn" style={{backgroundColor: "red"}}  onClick={() => setcolor('red')}>Red</button>
          <button id="btns" className="Green-btn" style={{backgroundColor: "green"}} onClick={() => setcolor('green')}>Green</button>
          <button id="btns" className="Blue-btn" style={{backgroundColor: "blue"}} onClick={() => setcolor('blue')}>Blue</button>
          <button id="btns" className="Orange-btn" style={{backgroundColor: "orange"}} onClick={() => setcolor('orange')}>Orange</button>
          <button id="btns" className="Lavender-btn" style={{backgroundColor: "lavender"}} onClick={() => setcolor('lavender')}>Lavender</button>
        </div>
      </div>
    </>
     
  )
}

export default App;
