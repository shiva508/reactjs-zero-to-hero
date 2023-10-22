import Card from "../../ui/card/Card";
import styles from "./UserList.module.css";
const UserList = (props) => {
  let content = <p className={styles.emptyContent}>Please add some users</p>;
  if (props?.users?.length > 0) {
    content = (
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.age + user.name}>
              {" "}
              {user.name} ({user.age}){" "}
            </li>
          );
        })}
      </ul>
    );
  }
  return <Card className={styles.users}>{content}</Card>;
};
export default UserList;
