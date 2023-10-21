import { useState } from "react";
import Button from "../../ui/Button";
import "./CourseForm.css";
import ButtonStyled from "../../ui/ButtonStyled";
const CourseForm = (props) => {
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
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        {/* <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input
          type="text"
          style={{ borderColor: !isValid ? "red" : "black" }}
          onChange={onChangeNameHandler}
        ></input> */}
        <label>Course Goal</label>
        <input type="text" onChange={onChangeNameHandler}></input>
      </div>
      {/* <Button>Add Goal</Button> */}
      <ButtonStyled>Add Goal</ButtonStyled>
    </form>
  );
};
export default CourseForm;
