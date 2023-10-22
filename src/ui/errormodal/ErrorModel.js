import { Fragment } from "react";
import Button from "../button/Button";
import Card from "../card/Card";
import styles from "./ErrorModel.module.css";
import Wrapper from "../../helper/Wrapper";
import ReactDOM from "react-dom";
const ErrorModel = (props) => {
  const errorHandler = () => {
    props.clearError();
  };
  const Backdrop = (props) => {
    return <div className={styles.backdrop}></div>;
  };
  const ModalOverlay = (props) => {
    return (
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
    );
  };
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onClick={props.clearError}
          title={props.title}
          message={props.message}
        />,
        document.getElementById("modal-root")
      )}
    </Fragment>
  );
};
export default ErrorModel;
