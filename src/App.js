import { useState } from "react";
import "./App.css";
import AddUser from "./components/adduser/AddUser";
import UserList from "./components/userslist/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const addNewUserHandler = (user) => {
    setUsers((prevUser) => {
      return [...prevUser, user];
    });
  };
  return (
    <div className="user-profile">
      <AddUser addNewUser={addNewUserHandler}></AddUser>
      <UserList users={users}></UserList>
    </div>
  );
}

export default App;
