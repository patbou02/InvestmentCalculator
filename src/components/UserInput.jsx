import { calculateInvestmentResults } from '../util/investment.js';

function UserInput() {
  const investmentResults = calculateInvestmentResults(userInput);

  console.log(' USERINPUT - investmentResults', investmentResults);
function UserInput({ onChange, input }) {

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="investment">Initial Investment</label>
          <input type="number" id="investment" value={input.initialInvestment} required onChange={e => onChange('initialInvestment', e.target.value)} />
        </p>
        <p>
          <label htmlFor="annual">Annual Investment</label>
          <input type="number" id="annual" value={input.annualInvestment} required onChange={e => onChange('annualInvestment', e.target.value)} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="return">Expected Return</label>
          <input type="number" id="return" value={input.expectedReturn} required onChange={e => onChange('expectedReturn', e.target.value)} />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input type="number" id="duration" value={input.duration} required onChange={e => onChange('duration', e.target.value)} />
        </p>
      </div>
    </section>
  );
}

export default UserInput;