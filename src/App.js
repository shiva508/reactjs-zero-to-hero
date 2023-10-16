import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      expenseId: 1,
      expenseDate: new Date("1991-08-08"),
      expenseName: "Car Insurence",
      expensePrice: 408.08,
    },
    {
      expenseId: 2,
      expenseDate: new Date("1991-07-08"),
      expenseName: "Bike",
      expensePrice: 508.08,
    },
    {
      expenseId: 3,
      expenseDate: new Date("1991-03-08"),
      expenseName: "New Laptop",
      expensePrice: 808.08,
    },
  ];
  return (
    <div>
      <ExpenseItem
        expenseName={expenses[0].expenseName}
        expenseDate={expenses[0].expenseDate}
        expensePrice={expenses[0].expensePrice}
      />
      <ExpenseItem
        expenseName={expenses[1].expenseName}
        expenseDate={expenses[1].expenseDate}
        expensePrice={expenses[1].expensePrice}
      />
      <ExpenseItem
        expenseName={expenses[2].expenseName}
        expenseDate={expenses[2].expenseDate}
        expensePrice={expenses[2].expensePrice}
      />
    </div>
  );
}

export default App;
