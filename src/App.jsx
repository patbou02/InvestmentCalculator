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
  return (
    <>
      <Header />
      <UserInput />
      <Results />
    </>
  )
}

export default App
