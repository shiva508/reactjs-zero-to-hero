import { useState } from "react";
import ButtonStyled from "../../ui/ButtonStyled";
import styles from "./ButtonMod.module.css";
const CourseFormMod = (props) => {
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(true);
  const onChangeNameHandler = (event) => {
    setName(event.target.value);
  };
  const addNewCourseHandler = (event) => {
    event.preventDefault();
    if (name.trim().length === 0) {
      setIsValid(false);
      return;
    }
    const course = { name, id: Math.random() };
    props.addNewCourse(course);
  };
  return (
    <form onSubmit={addNewCourseHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={onChangeNameHandler}></input>
      </div>
      <ButtonStyled>Add Goal</ButtonStyled>
    </form>
  );
};
export default CourseFormMod;
