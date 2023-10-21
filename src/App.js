import "./App.css";
import Header from "./components/header/Header";
import CalculatorForm from "./components/calculatorform/CalculatorForm";
import CalculationList from "./components/calculationlist/CalculationList";
import { useState } from "react";

function App() {
  const [calculations, setCalculations] = useState([]);

  const yearCalDataHandler = (calcution) => {
    console.log(calcution);
    let currentSavings = +calcution.currentSavings;
    const yearlyContribution = +calcution.yearlyContribution;
    const expectedReturn = +calcution.expectedReturn / 100;
    const duration = +calcution.duration;
    setCalculations((prevData) => {
      let inputData = [];
      for (let index = 0; index < duration; index++) {
        const yearlyInterest = currentSavings * expectedReturn;
        currentSavings += yearlyInterest + yearlyContribution;
        inputData.push({
          year: index + 1,
          yearlyInterest: yearlyInterest,
          savingsEndOfYear: currentSavings,
          yearlyContribution: yearlyContribution,
        });
      }
      return inputData;
    });
  };
  const resetCalHandler = () => {
    setCalculations((prevdata) => {
      return [];
    });
  };
  return (
    <div>
      <Header></Header>
      <CalculatorForm
        newYearCalculation={yearCalDataHandler}
        resetYearCalculation={resetCalHandler}
      ></CalculatorForm>
      <CalculationList calculations={calculations}></CalculationList>
    </div>
  );
}
export default App;
