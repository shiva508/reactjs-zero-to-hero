import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const [name, setName] = useState("");
  const [enableName, setEnableName] = useState(false);
  const userName = useRef();
  const nameChangeHandler = (name) => {
    setEnableName(false);
    setName(name);
  };
  const nameClickHandler = () => {
    setEnableName(true);
    setName(userName.current.value);
    userName.current.value = "";
  };
  return (
    <section id="player">
      <h2>Welcome {enableName ? name : "unknown"} entity</h2>
      <p>
        <input
          type="text"
          // value={name}
          ref={userName}
          // onChange={(event) => nameChangeHandler(event.target.value)}
        />
        <button onClick={nameClickHandler}>Set Name</button>
      </p>
    </section>
  );
}
