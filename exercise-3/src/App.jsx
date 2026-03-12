import React, { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [Num1, setNum1] = useState("");
  const [Num2, setNum2] = useState("");
  const [Result, setResult] = useState("");
  const [Error, setError] = useState(false);
  /* You will need some function to handle the key pressed and button events */
  function handleCompute(){
    const parse1 = parseFloat(Num1);
    const parse2 = parseFloat(Num2);

    if (isNaN(parse1) || isNaN(parse2)){
      setResult("A and B shall be numbers!");
      setError(true);
    } else {
      setResult(parse1 + parse2);
      setError(false);
    }
  }

  function onA(event){
    setNum1(event.target.value);
  }

  function onB(event){
    setNum2(event.target.value);
  }

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input disabled value={Result}/>
      <button onClick={handleCompute}>Compute</button>
    </main>
  );
}

export default App;
