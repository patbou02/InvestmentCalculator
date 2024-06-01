import { calculateInvestmentResults } from '../util/investment';

function Results({ input }) {
  const results = calculateInvestmentResults(input);

  return (
    <section id="results" className="center">results go here</section>
  );
}

export default Results;