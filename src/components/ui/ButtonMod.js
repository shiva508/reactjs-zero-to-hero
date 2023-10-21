import styles from "./ButtonMod.module.css";

const ButtonMod = (props) => {
  return (
    <button type={props.type} className={styles.button}>
      {props.children}
    </button>
  );
};
export default ButtonMod;
