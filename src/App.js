import "./App.css";
import ConditionForm from "./components/conditions/ConditionForm";
import ConditionList from "./components/conditions/ConditionList";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="rule-engine-main-container">
      <Header />
      <ConditionForm />
      <ConditionList />
    </div>
  );
}

export default App;
