import { useState } from "react";
import "./ConditionForm.css";
const ConditionForm = (props) => {
  const [conditionTitle, setConditionTitle] = useState("");
  const [symbol, setSymbol] = useState("");
  // const [condition, setCondition] = useState({
  //   conditionTitle: "",
  //   symbol: "",
  // });
  const addNewCommand = () => {
    const expense = {
      conditionId: Math.random(),
      conditionTitle,
      symbol,
    };
    setConditionTitle("");
    setSymbol("");
    props.onAddingNewCondition(expense);
  };
  const titleChangeHandler = (event) => {
    setConditionTitle(event.target.value);
    // setCondition((prevState) => {
    //   return { ...prevState, conditionTitle: event.target.value };
    // });
  };
  const symbolChangeHandler = (event) => {
    setSymbol(event.target.value);
    // setCondition((prevState) => {
    //   return { ...prevState, symbol: event.target.value };
    // });
  };
  const commonInputChangeHandler = (attribute, value) => {
    if (attribute === "Condition Title") {
      setConditionTitle(value);
    }
    if (attribute === "Symble") {
      setSymbol(value);
    }
  };
  return (
    <div className="form-container">
      <h1>Condition Form</h1>
      <div className="input-container">
        <h2 className="input-lable">Condition Title</h2>
        {/* <input type="text" onChange={titleChangeHandler}></input> */}
        <input
          type="text"
          onChange={(event) =>
            commonInputChangeHandler("Condition Title", event.target.value)
          }
        ></input>
      </div>
      <div className="input-container">
        <h2 className="input-lable">Symble</h2>
        {/* <input type="text" onChange={symbolChangeHandler}></input> */}
        <input
          type="text"
          onChange={(event) =>
            commonInputChangeHandler("Symble", event.target.value)
          }
        ></input>
      </div>
      <div className="button-container">
        {/* <button className="btn" onClick={() => console.log("Welcome")}>
          Add
        </button> */}
        <button className="btn" onClick={addNewCommand}>
          Add
        </button>
      </div>
    </div>
  );
};
export default ConditionForm;
