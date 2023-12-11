import { useState } from "react";
import "./App.css";
import InvestmentForm from "./components/Investment/InvestmentForm";
import InvestmentTable from "./components/Investment/InvestmentTable";
import Header from "./components/header/Header";

function App() {
  const [investmentInfo, setInvestmentInfo] = useState({
    initialInvestment: 408,
    annualInvestment: 508,
    expectedReturn: 80000000000,
    duration: 8,
  });
  const inputChangeHandler = (paramName, paramValue) => {
    setInvestmentInfo((prevInvestment) => {
      return { ...prevInvestment, [paramName]: +paramValue };
    });
  };
  return (
    <>
      <header id="header">
        <Header />
      </header>
      <main>
        <InvestmentForm
          investmentInfo={investmentInfo}
          inputChanageCapture={inputChangeHandler}
        ></InvestmentForm>
        <InvestmentTable investment={investmentInfo}></InvestmentTable>
      </main>
    </>
  );
}

export default App;
