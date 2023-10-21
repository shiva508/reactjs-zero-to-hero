import logo from "../../assets/investment-calculator-logo.png";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <img src={logo} alt="Logo" className={styles["logo-img"]}></img>
        <h1>Investment Calculator</h1>
      </header>
    </div>
  );
};
export default Header;
