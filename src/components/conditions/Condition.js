import "./Condition.css";
const Condition = (props) => {
  return (
    <div className="condition-item">
      <h1>{props.condition.conditionTitle}</h1>
      <hr></hr>
      <h1>{props.condition.symbol}</h1>
    </div>
  );
};
export default Condition;
