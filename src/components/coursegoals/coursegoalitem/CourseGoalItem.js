import "./CourseGoalItem.css";
const CourseGoalItem = (props) => {
  const deleteCourseHandler = () => {
    props.deleteCourse(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteCourseHandler}>
      {props.children}
    </li>
  );
};
export default CourseGoalItem;
