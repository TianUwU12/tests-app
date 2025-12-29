import React from "react";

export default function FinalUserAnswer({ userAnswer, correctAnswer }) {
  const isCorrect = userAnswer === correctAnswer;

  if (isCorrect) {
    return "galocka";
  }
  if (userAnswer === "") {
    return <p style={{ color: "red" }}>You are not correct</p>;
  }

  return <p style={{ color: "red" }}>You are not correct {correctAnswer}</p>;
}
