import "./ConditionForm.css";
const ConditionForm = () => {
  return (
    <div className="form-container">
      <h1>Condition Form</h1>
      <div className="input-container">
        <h2 className="input-lable">Condition Title</h2>
        <input type="text"></input>
      </div>
      <div className="input-container">
        <h2 className="input-lable">Symble</h2>
        <input type="text"></input>
      </div>
      <div className="input-container">
        <button className="btn"> Add</button>
      </div>
    </div>
  );
};
export default ConditionForm;
