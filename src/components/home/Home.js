import styles from "./Home.module.css";
import Card from "../ui/card/Card";

const Home = () => {
  return (
    <Card className={styles.home}>
      <h1>Welcome back!</h1>
    </Card>
  );
};
export default Home;
