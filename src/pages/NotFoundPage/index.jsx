import React, { useEffect, useState } from "react";

export default function NotFoundPage() {
  const [joke, setJoke] = useState(null);
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    console.log("hello");

    setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    const fetchJoke = async () => {
      try {
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        const data = await response.json();
        const { id, value } = data;
        setJoke({ id, value });
      } catch (error) {
        console.log(error);
      }
    };

    fetchJoke();
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      console.log("timer off");
    }
  }, [seconds]);

  return (
    <div>
      <h2>{seconds} seconds</h2>
      {joke?.value}
    </div>
  );
}
