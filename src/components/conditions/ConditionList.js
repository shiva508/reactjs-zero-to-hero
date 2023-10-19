import Card from "../ui/Card";
import Condition from "./Condition";
import "./ConditionList.css";
const ConditionList = (props) => {
  const conditions = [
    { conditionId: 1, conditionTitle: "Equals", symbol: "==" },
    { conditionId: 2, conditionTitle: "Greater Than", symbol: ">" },
    { conditionId: 3, conditionTitle: "Less Than", symbol: "<" },
  ];
  return (
    <Card className="condition-list-cont">
      <h1>Conditions</h1>
      <div className="conditions-data">
        {conditions.map((data) => (
          <Condition key={data.conditionId} condition={data} />
        ))}
      </div>
    </Card>
  );
};
export default ConditionList;
