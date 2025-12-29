import React, { useState } from "react";
import { useEffect } from "react";

export default function CustomTestPage() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // const tests = localStorage.getItem('customTest')
  }, []);

  return <div>CustomTestPage</div>;
}
