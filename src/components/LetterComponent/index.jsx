import React, { useState } from "react";

export default function LetterComponent({ letter, hasWinner }) {
  const [isShown, setIsShown] = useState(false);
  function showLetter() {
    // if (isShown) {
    //   setIsShown(false);
    // } else {
    //   setIsShown(true);
    // }
    setIsShown(!isShown);
  }
  return (
    <div style={{ backgroundColor: hasWinner ? "green" : "white" }}>
      <p style={{ border: "1px solid black", margin: "5px", padding: "20px" }}>
        {isShown ? letter : "***"}
        {hasWinner.toString()}
      </p>

      <button onClick={showLetter}>show</button>
    </div>
  );
}
