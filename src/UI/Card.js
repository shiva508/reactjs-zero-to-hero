import "./Card.css";
const Card = (props) => {
  const cardstyle = "card " + props.className;
  return <div className={cardstyle}>{props.children}</div>;
};
export default Card;
