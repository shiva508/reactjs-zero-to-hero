import { Fragment, useEffect, useState } from "react";
import "./App.css";
import MainHeader from "./components/mainheader/MainHeader";
import LogIn from "./components/login/LogIn";
import Home from "./components/home/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isUserLoggedIn = localStorage.getItem("isUserLoggedIn");
    if (isUserLoggedIn === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isUserLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isUserLoggedIn");
    setIsLoggedIn(false);
  };
  return (
    <Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <LogIn onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </Fragment>
  );
}

export default App;
