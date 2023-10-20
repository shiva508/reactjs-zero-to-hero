import { useState } from "react";
import "./Condition.css";
const Condition = (props) => {
  const [conditionTitle, setConditionTitle] = useState(
    props.condition.conditionTitle
  );
  const updateHandler = () => {
    console.log("AASAS");
    setConditionTitle("Batman");
  };
  return (
    <div className="condition-item">
      <h1>{conditionTitle}</h1>
      <hr></hr>
      <h1>{props.condition.symbol}</h1>
      <hr></hr>
      <button className="btn" onClick={updateHandler}>
        Update
      </button>
    </div>
  );
};
export default Condition;
