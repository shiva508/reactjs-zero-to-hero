import { Fragment } from "react";
import styles from "./UserForm.module.css";
import { useReducer } from "react";

const INTITIAL_STATE = { userName: "Anonymous", age: 10 };
const reducer = (userInfo, action) => {
  if (action.type === "AGE_UPDATE") {
    return { ...userInfo, age: userInfo.age++ };
  }
  if (action.type === "NAME_UPDATE") {
    return { ...userInfo, userName: action.updatedValue };
  }
  return INTITIAL_STATE;
};
const UserForm = () => {
  const [userInfo, dispatch] = useReducer(reducer, INTITIAL_STATE);

  const userNameChangeHandler = (event) => {
    dispatch({ type: "NAME_UPDATE", updatedValue: event.target.value });
  };
  const ageIncreaseHandler = () => {
    dispatch({ type: "AGE_UPDATE" });
  };

  return (
    <Fragment>
      <div className={styles.mainContainer}>
        <input
          value={userInfo.userName}
          onChange={userNameChangeHandler}
          type="text"
        ></input>
        <button onClick={ageIncreaseHandler}> Increate age </button>
        <p>
          {userInfo.userName} - {userInfo.age}
        </p>
      </div>
    </Fragment>
  );
};
export default UserForm;
