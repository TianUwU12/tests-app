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
      ? "rgba(80, 194, 88, 0.64)"
      : "rgba(194, 80, 80, 0.72)"
    : "transparent";
  const parts = question.split(/(\*\*.*?\*\*)/g);

  return (
    <div className={styles.card} style={{ backgroundColor: bgColor }}>
      <p className={styles.text}>
        {parts.map((item, i) =>
          item.startsWith("**") && item.endsWith("**") ? (
            <strong key={i}>{item.slice(2, -2)}</strong>
          ) : (
            item
          )
        )}
      </p>
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


