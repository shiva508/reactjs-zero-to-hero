import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  //const expenseDate = props.expenseDate;
  const expenseName = props.expenseName;
  const expensePrice = props.expensePrice;
  const month = props.expenseDate.toLocaleString("en-US", { month: "long" });
  const day = props.expenseDate.toLocaleString("en-US", { day: "2-digit" });
  const year = props.expenseDate.getFullYear();
  return (
    <Card className="expense-item">
      <ExpenseDate month={month} day={day} year={year} />
      {/* <div className="expense-item__date">{expenseDate}</div> */}
      <div className="expense-item__description">
        <h1>{expenseName}</h1>
        <div className="expense-item__price">${expensePrice}</div>
      </div>
    </Card>
  );
};
export default ExpenseItem;
