import { useState } from 'react';
import { calculateInvestmentResults } from '../util/investment.js';

const INITIAL_INVESTMENT = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
}

function UserInput() {
  const [userInput, setUserInput] = useState(INITIAL_INVESTMENT);

  const handleChange = (inputIdentifier, newValue) => setUserInput(prevInput => ({ ...prevInput, [inputIdentifier]: parseInt(newValue) }) );

  const investmentResults = calculateInvestmentResults(userInput);

  console.log(' USERINPUT - investmentResults', investmentResults);

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="investment">Initial Investment</label>
          <input type="number" id="investment" value={userInput.initialInvestment} required onChange={e => handleChange('initialInvestment', e.target.value)} />
        </p>
        <p>
          <label htmlFor="annual">Annual Investment</label>
          <input type="number" id="annual" value={userInput.annualInvestment} required onChange={e => handleChange('annualInvestment', e.target.value)} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="return">Expected Return</label>
          <input type="number" id="return" value={userInput.expectedReturn} required onChange={e => handleChange('expectedReturn', e.target.value)} />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input type="number" id="duration" value={userInput.duration} required onChange={e => handleChange('duration', e.target.value)} />
        </p>
      </div>
    </section>
  );
}

export default UserInput;