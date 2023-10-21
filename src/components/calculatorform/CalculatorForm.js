import { useState } from "react";
import styles from "./CalculatorForm.module.css";
const INITIAL = {
  currentSavings: 1200,
  yearlyContribution: 1200,
  expectedReturn: 230,
  duration: 12,
};
const CalculatorForm = (props) => {
  const [currentSavings, setCurrentSavings] = useState(0);
  const [yearlyContribution, setYearlyContribution] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);
  const [calcution, setCalcution] = useState(INITIAL);

  const yearCalcutionTrigger = (event) => {
    event.preventDefault();
    //   const calcution = {
    //     currentSavings: parseInt(currentSavings),
    //     yearlyContribution: parseInt(yearlyContribution),
    //     expectedReturn: parseInt(expectedReturn),
    //     duration: parseInt(duration),
    //   };
    props.newYearCalculation(calcution);
  };
  const commonDataChangeHandler = (attribute, value) => {
    setCalcution((prevData) => {
      return { ...prevData, [attribute]: value };
    });

    //   if (attribute === "current-savings") {
    //     setCurrentSavings((prevValue) => {
    //       return +value;
    //     });
    //   }
    //   if (attribute === "yearly-contribution") {
    //     setYearlyContribution((prevValue) => {
    //       return +value;
    //     });
    //   }
    //   if (attribute === "expected-return") {
    //     setExpectedReturn((prevValue) => {
    //       return +value;
    //     });
    //   }
    //   if (attribute === "duration") {
    //     setDuration((prevValue) => {
    //       return +value;
    //     });
    //   }
  };
  const resetHandler = () => {
    setCalcution(INITIAL);
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
              value={calcution.currentSavings}
              onChange={(event) =>
                commonDataChangeHandler("currentSavings", event.target.value)
              }
            ></input>
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              value={calcution.yearlyContribution}
              onChange={(event) =>
                commonDataChangeHandler(
                  "yearlyContribution",
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
              value={calcution.expectedReturn}
              onChange={(event) =>
                commonDataChangeHandler("expectedReturn", event.target.value)
              }
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              value={calcution.duration}
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
