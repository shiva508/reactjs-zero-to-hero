import { calculateInvestmentResults, formatter } from "./investmentUtil";

const InvestmentTable = ({ investment }) => {
  const inventmentInfo = calculateInvestmentResults(investment);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {inventmentInfo.map((yearData) => (
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.valueEndOfYear)}</td>
            <td>{formatter.format(yearData.interest)}</td>
            <td>{yearData.year}</td>
            <td>{yearData.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default InvestmentTable;
