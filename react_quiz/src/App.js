import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false }
      ]
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false }
      ]
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false }
      ]
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true }
      ]
    }
  ];

  const [questionNumber, setQuestionNumber] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelection = answerCorrect => {
    const currentNumber = questionNumber + 1;

    if (answerCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    }

    if (currentNumber < questions.length) {
      setQuestionNumber(currentNumber);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetState = () => {
    setQuestionNumber(0);
    setQuizCompleted(false);
    setCorrectAnswers(0);
  };

  return (
    <div className="app">
      {/* HINT: replace "false" with logic to display the
      score when the user has answered all the questions */}
      {quizCompleted ? (
        <div className="score-section">
          You scored {correctAnswers} out of {questions.length}
          <button onClick={resetState}>Start Over</button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {questionNumber + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[questionNumber].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[questionNumber].answerOptions.map(answerChoices => (
              <button
                onClick={() => handleAnswerSelection(answerChoices.isCorrect)}
              >
                {answerChoices.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
