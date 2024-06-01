import { useState } from "react";

import Header from "./components/Header";
import UserInput from './components/UserInput';
import Results from './components/Results';

const INITIAL_INVESTMENT = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
}

function App() {
  const [userInput, setUserInput] = useState(INITIAL_INVESTMENT);

  const inputIsValid = userInput.duration >= 1;

  const handleChange = (inputIdentifier, newValue) => setUserInput(prevInput => ({ ...prevInput, [inputIdentifier]: parseInt(newValue) }) );

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} input={userInput} />
      {inputIsValid ? <Results input={userInput} /> : <p className="center">Please enter a duration greater than 0.</p>}
    </>
  )
}

export default App
