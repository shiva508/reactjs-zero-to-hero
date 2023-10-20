import { useState } from "react";
import Button from "../../ui/Button";
import "./CourseForm.css";
const CourseForm = (props) => {
  const [name, setName] = useState("");
  const onChangeNameHandler = (event) => {
    setName(event.target.value);
  };
  const addNewCourseHandler = (event) => {
    event.preventDefault();
    const course = { name, id: Math.random() };
    props.addNewCourse(course);
  };
  return (
    <form onSubmit={addNewCourseHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={onChangeNameHandler}></input>
      </div>
      <Button>Add Goal</Button>
    </form>
  );
};
export default CourseForm;
