import styles from "./CalculationList.module.css";
const CalculationList = (props) => {
  let content = (
    <p className={styles["content-msg"]}>No Calculation data available</p>
  );
  if (props?.calculations?.length > 0) {
    content = (
      <table className={styles.result}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.calculations.map((calculation) => {
            return (
              <tr key={calculation.year}>
                <td>{calculation.year}</td>
                <td>{calculation.savingsEndOfYear}</td>
                <td>{calculation.yearlyInterest}</td>
                <td>{calculation.savingsEndOfYear}</td>
                <td>{calculation.savingsEndOfYear}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
  return <div>{content}</div>;
};
export default CalculationList;
