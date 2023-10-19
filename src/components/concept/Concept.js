import Card from "../../UI/Card";
import "./Concept.css";

const Concept = (props) => {
  return (
    <Card className="card-container">
      <li className="concept">
        <img
          src={props.concept.image}
          className="component-img-style"
          alt={props.concept.title}
        />
        <h2 className="text-style">{props.concept.title}</h2>
        <p className="text-style">{props.concept.description}</p>
      </li>
    </Card>
  );
};
export default Concept;
