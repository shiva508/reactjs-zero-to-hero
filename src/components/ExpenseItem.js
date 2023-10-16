import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  const expenseDate = props.expenseDate;
  const expenseName = props.expenseName;
  const expensePrice = props.expensePrice;
  return (
    <div className="expense-item">
      <div className="expense-item__date">{expenseDate}</div>
      <div className="expense-item__description">
        <h1>{expenseName}</h1>
        <div className="expense-item__price">${expensePrice}</div>
      </div>
    </div>
  );
};
export default ExpenseItem;
