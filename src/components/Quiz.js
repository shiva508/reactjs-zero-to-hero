import { useState } from "react";
import DEFAULT_QUESTION from "../questions.js";
import QuestionTimer from "./QuestionTimer.js";

const Quiz = () => {
  console.log(DEFAULT_QUESTION);
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const handleSelectAnswer = (selectedAnswer) => {
    console.log(selectedAnswer);
    if (selectedAnswer !== null) {
      setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer];
      });
    }
  };
  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          timeout={10000}
          onTimeout={() => handleSelectAnswer(null)}
        />
        {DEFAULT_QUESTION.length === activeQuestionIndex ? (
          <h1>Awesome!</h1>
        ) : (
          <h2>{DEFAULT_QUESTION[activeQuestionIndex].text}</h2>
        )}

        <ul id="answers">
          {DEFAULT_QUESTION.length === activeQuestionIndex ? (
            <p>Congratulations you have completed all questions</p>
          ) : (
            DEFAULT_QUESTION[activeQuestionIndex].answers.map((ans) => {
              return (
                <li key={ans} className="answer">
                  <button onClick={() => handleSelectAnswer(ans)}>{ans}</button>
                </li>
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
};
export default Quiz;
