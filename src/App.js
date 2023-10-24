import "./App.css";
import UserTask from "./components/Todo/UserTask";
import UserForm from "./components/user/UserForm";

function App() {
  return (
    <div>
      <h1>React Js Practice</h1>
      <UserForm />
      <UserTask />
    </div>
  );
}

export default App;
