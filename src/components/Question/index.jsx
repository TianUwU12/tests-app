import React, { useEffect, useState } from "react";
import FinalUserAnswer from "../FinalUserAnswer";
import styles from "./Question.module.css";
import AdditionalInfoQuestion from "../AdditionalInfoQuestion";

export default function Question({
  question,
  correctAnswer,
  grade,
  index,
  setAnswerByIndex,
  additionalInfo,
}) {
  const [userAnswer, setUserAnswer] = useState("");

  function changeUserAnswer(event) {
    console.log(event);
    const value = event.target.value;
    setUserAnswer(value);
    setAnswerByIndex(index, value);
  }

  const isFinished = grade !== null;
  const bgColor = isFinished
    ? userAnswer === correctAnswer
      ? "green"
      : "red"
    : "transparent";

  return (
    <div className={styles.card} style={{ backgroundColor: bgColor }}>
      <p>{question}</p>
      {additionalInfo && (
        <AdditionalInfoQuestion additionalInfo={additionalInfo} />
      )}
      <input
        value={userAnswer}
        disabled={grade === null ? false : true}
        onChange={changeUserAnswer}
        onKeyDown={(e) => {
          if (e.code === "Space") {
            console.log(1);

            e.preventDefault();
          }
        }}
      />
      {isFinished && (
        <FinalUserAnswer
          userAnswer={userAnswer}
          correctAnswer={correctAnswer}
        />
      )}
    </div>
  );
}

/// если пользователь ничего не ввел в поле нипута но нажал на клик
// показываем ему что он ничего не ввел в финальном ответе
// в модалке показывать количество правильных ответов . неправильных и не отвеченных
