import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  //const expenseDate = props.expenseDate;
  const expenseName = props.expenseName;
  const expensePrice = props.expensePrice;
  const month = props.expenseDate.toLocaleString("en-US", { month: "long" });
  const day = props.expenseDate.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{props.expenseDate.getFullYear()}</div>
        <div>{day}</div>
      </div>
      {/* <div className="expense-item__date">{expenseDate}</div> */}
      <div className="expense-item__description">
        <h1>{expenseName}</h1>
        <div className="expense-item__price">${expensePrice}</div>
      </div>
    </div>
  );
};
export default ExpenseItem;
