import { Fragment, useReducer } from "react";
import styles from "./UserTask.module.css";
import AddUserTask from "./AddUserTask";
import UserTaskList from "./UserTaskList";

const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];
const reducer = (state, action) => {
  return [];
};
const UserTask = () => {
  const [state, dispatch] = useReducer(reducer, initialTasks);
    <Fragment>
      <div className={styles.mainContainer}>
        <AddUserTask></AddUserTask>
        <UserTaskList tasks={state}></UserTaskList>
      </div>
    </Fragment>;
};
export default UserTask;
