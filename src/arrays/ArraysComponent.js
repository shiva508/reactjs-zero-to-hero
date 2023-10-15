import React from "react";
import "./ArraysComponent.css";
import { name } from "./Util";
import data from "./Data";
import * as user from "./AllData";
import { firstName, lastName } from "./Aliase";
const ArraysComponent = () => {
  const handleClick = () => {
    console.log("");
  };
  return (
    <div>
      <button className="button" onClick={handleClick}>
        {name}
      </button>
      <button className="button" onClick={handleClick}>
        {data}
      </button>
      <h1>{user.name}</h1>
      <h1>{user.age}</h1>
      <h1>{firstName}</h1>
      <h1>{lastName}</h1>
    </div>
  );
};
export default ArraysComponent;
