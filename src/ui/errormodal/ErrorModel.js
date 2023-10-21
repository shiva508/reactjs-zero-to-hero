import Button from "../button/Button";
import Card from "../card/Card";
import styles from "./ErrorModel.module.css";
const ErrorModel = (props) => {
  const errorHandler = () => {
    props.clearError();
  };
  return (
    <div>
      <div className={styles.backdrop}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={errorHandler}>Oky</Button>
        </footer>
      </Card>
    </div>
  );
};
export default ErrorModel;
