import { useState } from "react";
import Question from "./Question";

const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "New York"],
    answer: "Paris",
  },
  {
    question: "What is the largest planet in our solar system?",
    choices: ["Mars", "Jupiter", "Venus"],
    answer: "Jupiter",
  },
  {
    question: "What is the boiling point of water?",
    choices: ["100°C", "0°C", "50°C"],
    answer: "100°C",
  },
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer: string) => {
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert(`Your score is ${score} / ${questions.length}`);
    }
  };

  return (
    <>
      <h1>Quiz</h1>
      {currentQuestion < questions.length ? (
        <Question
          question={questions[currentQuestion].question}
          choices={questions[currentQuestion].choices}
          onAnswer={handleAnswer}
        />
      ) : null}
    </>
  );
}

export default Quiz;
