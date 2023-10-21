import { useState } from "react";
import Card from "../ui/Card";
import Condition from "./Condition";
import ConditionForm from "./ConditionForm";
import "./ConditionList.css";
const BASE_DATA =
  true === true
    ? [
        { conditionId: 1, conditionTitle: "Equals", symbol: "==" },
        { conditionId: 2, conditionTitle: "Greater Than", symbol: ">" },
        { conditionId: 3, conditionTitle: "Less Than", symbol: "<" },
      ]
    : [];
const ConditionList = (props) => {
  const [conditions, setConditions] = useState(BASE_DATA);
  const newConditionHandle = (condition) => {
    console.log(condition);
    setConditions((prevCondition) => {
      return [condition, ...prevCondition];
    });
  };
  let conditionOutput = <p>No Data available</p>;
  if (conditions.length > 0) {
    conditionOutput = conditions.map((data) => (
      <Condition key={data.conditionId} condition={data} />
    ));
  }
  return (
    <div>
      <ConditionForm onAddingNewCondition={newConditionHandle} />
      <div>
        <Card className="condition-list-cont">
          <h1>Conditions</h1>
          <div className="conditions-data">
            {conditionOutput}
            {/* {conditions.length === 0 && <p>No Data available</p>}
            {conditions.length > 0 &&
              conditions.map((data) => (
                <Condition key={data.conditionId} condition={data} />
              ))} */}
            {/* {conditions.length === 0 ? (
              <p>No Data available</p>
            ) : (
              conditions.map((data) => (
                <Condition key={data.conditionId} condition={data} />
              ))
            )} */}
          </div>
        </Card>
      </div>
    </div>
  );
};
export default ConditionList;
