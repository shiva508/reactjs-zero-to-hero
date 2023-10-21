import { useState } from "react";
import Button from "../../ui/button/Button";
import Card from "../../ui/card/Card";
import styles from "./AddUser.module.css";
import ErrorModel from "../../ui/errormodal/ErrorModel";
const INITIAL = {
  name: "",
  age: "",
};
const AddUser = (props) => {
  const [user, setUser] = useState(INITIAL);
  const [error, setError] = useState(false);
  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      user?.name?.trim()?.length === 0 ||
      user?.age?.trim()?.length === 0 ||
      parseInt(user?.age?.trim()) <= 0
    ) {
      setError((prevDara) => {
        return true;
      });
      return;
    }
    console.log(user);
    props.addNewUser(user);
    setUser(INITIAL);
  };
  const commonInputChangehandler = (attribute, value) => {
    setUser((prevUser) => {
      return { ...prevUser, [attribute]: value };
    });
  };
  const clearErrorHandler = () => {
    setError((prevDara) => {
      return false;
    });
  };
  return (
    <div>
      {error && (
        <ErrorModel
          clearError={clearErrorHandler}
          title="Error"
          message="Something went wron"
        ></ErrorModel>
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <p className={styles["input-block"]}>
            <label htmlFor="username">Name</label>
            <input
              type="text"
              value={user.name}
              id="username"
              onChange={(event) =>
                commonInputChangehandler("name", event.target.value)
              }
            ></input>
          </p>
          <p className={styles["input-block"]}>
            <label htmlFor="userage">Age</label>
            <input
              type="number"
              value={user.age}
              id="userage"
              onChange={(event) =>
                commonInputChangehandler("age", event.target.value)
              }
            ></input>
          </p>
          <div className={styles["btn-form"]}>
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
