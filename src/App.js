import { Fragment } from "react";
import "./App.css";
import Headers from "./components/Headers";
import Quiz from "./components/Quiz";

function App() {
  return (
    <Fragment>
      <Headers></Headers>
      <Quiz></Quiz>
    </Fragment>
  );
}

export default App;
