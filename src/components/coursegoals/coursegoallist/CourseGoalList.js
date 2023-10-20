import CourseGoalItem from "../coursegoalitem/CourseGoalItem";
import "./CourseGoalList.css";
const CourseGoalList = (props) => {
  const deleteCourseHandler = (id) => {
    props.deleteCourceMaster(id);
  };
  return (
    <ul className="goal-list">
      {props.courses.map((course) => (
        <CourseGoalItem
          key={course.id}
          id={course.id}
          deleteCourse={deleteCourseHandler}
        >
          {course.name}
        </CourseGoalItem>
      ))}
    </ul>
  );
};
export default CourseGoalList;
