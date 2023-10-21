import { useState } from "react";
import styles from "./CalculatorForm.module.css";
const CalculatorForm = (props) => {
  const [currentSavings, setCurrentSavings] = useState(0);
  const [yearlyContribution, setYearlyContribution] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);

  const yearCalcutionTrigger = (event) => {
    event.preventDefault();
    const calcution = {
      currentSavings: parseInt(currentSavings),
      yearlyContribution: parseInt(yearlyContribution),
      expectedReturn: parseInt(expectedReturn),
      duration: parseInt(duration),
    };
    props.newYearCalculation(calcution);
  };
  const commonDataChangeHandler = (attribute, value) => {
    if (attribute === "current-savings") {
      setCurrentSavings((prevValue) => {
        return +value;
      });
    }
    if (attribute === "yearly-contribution") {
      setYearlyContribution((prevValue) => {
        return +value;
      });
    }
    if (attribute === "expected-return") {
      setExpectedReturn((prevValue) => {
        return +value;
      });
    }
    if (attribute === "duration") {
      setDuration((prevValue) => {
        return +value;
      });
    }
  };
  const resetHandler = () => {
    props.resetYearCalculation();
  };
  return (
    <div>
      <form className={styles.form} onSubmit={yearCalcutionTrigger}>
        <div className={styles["input-group"]}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              onChange={(event) =>
                commonDataChangeHandler("current-savings", event.target.value)
              }
            ></input>
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              onChange={(event) =>
                commonDataChangeHandler(
                  "yearly-contribution",
                  event.target.value
                )
              }
            ></input>
          </p>
        </div>
        <div className={styles["input-group"]}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              onChange={(event) =>
                commonDataChangeHandler("expected-return", event.target.value)
              }
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              onChange={(event) =>
                commonDataChangeHandler("duration", event.target.value)
              }
            />
          </p>
        </div>
        <p className={styles.actions}>
          <button
            type="reset"
            className={styles.buttonAlt}
            onClick={resetHandler}
          >
            Reset
          </button>
          <button type="submit" className={styles.button}>
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
};
export default CalculatorForm;
