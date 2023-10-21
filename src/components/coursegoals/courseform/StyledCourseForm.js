import styled from "styled-components";
import ButtonStyled from "../../ui/ButtonStyled";
import { useState } from "react";
import ButtonMod from "../../ui/ButtonMod";

const StyledCourse = styled.div`
  margin: 0.5rem 0;

  & label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: ${(props) => (!props.inValid ? "red" : "black")};
  }
  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (!props.inValid ? "red" : "#ccc")};
    background: ${(props) => (!props.inValid ? "#ffd7d7" : "transparent")};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }
  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
  &.invalid input {
    border-color: red;
    background: #ffd7d7;
  }
  &.invalid label {
    color: red;
  }
`;

const StyledCourseForm = (props) => {
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(true);
  const onChangeNameHandler = (event) => {
    setName(event.target.value);
  };
  const addNewCourseHandler = (event) => {
    event.preventDefault();
    if (name.trim().length === 0) {
      setIsValid(false);
      return;
    }
    const course = { name, id: Math.random() };

    props.addNewCourse(course);
  };
  return (
    <form onSubmit={addNewCourseHandler}>
      {/* <StyledCourse className={!isValid && "invalid"}>
        <label>Course Goal</label>
        <input type="text" onChange={onChangeNameHandler}></input>
      </StyledCourse>
      <ButtonStyled>Add Goal</ButtonStyled> */}
      <StyledCourse inValid={isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={onChangeNameHandler}></input>
      </StyledCourse>
      {/* <ButtonStyled>Add Goal</ButtonStyled> */}
      <ButtonMod>Add Goal</ButtonMod>
    </form>
  );
};
export default StyledCourseForm;
