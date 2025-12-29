import React, { useEffect, useState } from "react";
import FinalUserAnswer from "../FinalUserAnswer";
import styles from "./Question.module.css";

export default function Question({
  question,
  correctAnswer,
  grade,
  index,
  setAnswerByIndex,
}) {
  const [userAnswer, setUserAnswer] = useState("");

  // useEffect(() => {
  //   if (grade === null) {
  //     setUserAnswer("");
  //   }
  // }, [grade]);

  function changeUserAnswer(event) {
    console.log(event);
    const value = event.target.value;
    setUserAnswer(value);
    setAnswerByIndex(index, value);
  }

  return (
    <div className={styles.card}>
      <p>{question}</p>
      {userAnswer}
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
      {grade !== null && (
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
