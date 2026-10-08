import { useState } from 'react'
import './App.css'

function App() {

  const [heightFt, setHeightFt] = useState(0);
  const [heightIn, setHeightIn] = useState(0);
  const [weight, setWeight] = useState(0);

  const calculateBMI = ()=>{
    const ft = Number(heightFt) + Number(heightIn/12);
    const m = ft*0.3048;
    const bmi = (weight/(m*m)).toFixed(1);

    const result = document.getElementById("result");
    let outputText;
    if (typeof(bmi) == NaN) outputText = `N/A`
    if (bmi <18.5) outputText = `${bmi} (Underweight)`;
    else if (18.5 <= bmi && bmi <= 24.9) outputText = `${bmi} (Normal)`;
    else if (25 <= bmi && bmi <= 29.9) outputText = `${bmi} (Overweight)`;
    else outputText = `${bmi} (Obese)`;

    result.innerHTML = outputText;
  }
  
  const handleSumbit = (e)=>{
    e.preventDefault();
    console.log(heightFt, heightIn, weight);
    calculateBMI();
  };
  const handleFt = (e)=>{
    setHeightFt(e.target.value);
    // calculateBMI();
  };
  const handleIn = (e)=>{
    setHeightIn(e.target.value);
    // calculateBMI();
  }
  const handleKg = (e)=>{
    setWeight(e.target.value);
    // calculateBMI();
  }
  const reset = ()=>{
    setHeightFt(0);
    setHeightIn(0);
    setWeight(0);
    const result = document.getElementById("result");
    result.innerHTML = "";
  }

  return (
    <>
      <form onSubmit={handleSumbit}>
        <div className="inputSpace">
          <label htmlFor="heightFt">
            Enter height (feet/inches):&nbsp;
          </label>
          <input type="number" id="heightFt" autoComplete="off" min={0} onChange={handleFt} value={heightFt} required/>&nbsp;feet&nbsp;
          <input type="number" id="heightIn" autoComplete="off" min={0} onChange={handleIn} value={heightIn} required/>&nbsp;inches
        </div>
        <div className="inputSpace">
          <label htmlFor="weight">
            Enter weight:&nbsp;
          </label>
          <input type="number" id="weight" autoComplete='off' min={0} onChange={handleKg} value={weight} required/>&nbsp;kg
        </div>
        <input type="submit" value="Calculate BMI" />
        <button id='reset' onClick={reset}>
          Reset
        </button>
        <p>
          BMI:
          <span id="result">

          </span>
        </p>
      </form>
    </>
  )
}

export default App
