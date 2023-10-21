import "./App.css";
import CourseForm from "./components/coursegoals/courseform/CourseForm";
import CourseFormMod from "./components/coursegoals/courseform/CourseFormMod";
import StyledCourseForm from "./components/coursegoals/courseform/StyledCourseForm";
import CourseGoalList from "./components/coursegoals/coursegoallist/CourseGoalList";
import { useState } from "react";

function App() {
  const addNewCourseHandler = (course) => {
    setCourses((prevCourse) => {
      return [course, ...prevCourse];
    });
  };
  const deleteCourseHandler = (id) => {
    setCourses((prevCourses) => {
      const filteredCource = prevCourses.filter((data) => data.id !== id);
      return filteredCource;
    });
  };
  const [courses, setCourses] = useState([{ id: 1, name: "java" }]);
  let courseContent = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );
  if (courses.length > 0) {
    courseContent = (
      <CourseGoalList
        courses={courses}
        deleteCourceMaster={deleteCourseHandler}
      />
    );
  }

  return (
    <div>
      <section className="goal-form">
        {/* <CourseForm addNewCourse={addNewCourseHandler} /> */}
        {/* <StyledCourseForm addNewCourse={addNewCourseHandler} /> */}
        <CourseFormMod addNewCourse={addNewCourseHandler}></CourseFormMod>
      </section>
      <section className="goals">{courseContent}</section>
    </div>
  );
}

export default App;
