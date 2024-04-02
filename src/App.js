import React, { useState } from "react";
import './App.css';

function App() {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [addition, addTotal] = useState(number + number2);
  const [subtraction, subTotal] = useState(number - number2);
  const [multiplication, multipleTotal] = useState(number * number2);
  const [division, divTotal] = useState(number / number2);
  function addtotal() {
    addTotal(number + number2)
  }
  function subtotal() {
    subTotal(number - number2)
  }
  function multipletotal() {
    multipleTotal(number * number2)
  }
  function divtotal() {
    divTotal(number / number2)
  }
  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="input-numbers">
        <input type="number" placeholder="0" value={number} onChange={e => setNumber(+e.target.value)} />
        <input type="number" placeholder="0" value={number2} onChange={e => setNumber2(+e.target.value)} />
      </div>
      <button onClick={addtotal}>+</button>
      <button onClick={subtotal}>-</button>
      <button onClick={multipletotal}>*</button>
      <button onClick={divtotal}>/</button>
      <h2>Addition: {addition}</h2>
      <h2>Subtraction: {subtraction}</h2>
      <h2>Multiplication: {multiplication}</h2>
      <h2>Division: {division}</h2>
    </div>
  );
}

export default App;