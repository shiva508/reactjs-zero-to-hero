import "./ExpenseDate.css";
const ExpenseDate = (props) => {
  return (
    <div className="expense-item__date">
      <div className="div-font-style">{props.month}</div>
      <div className="div-font-style">{props.year}</div>
      <div className="div-font-large-style">{props.day}</div>
    </div>
  );
};
export default ExpenseDate;
