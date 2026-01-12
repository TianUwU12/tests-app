import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { categoryQuestions, customTest } from "../../data/questions";
import Question from "../../components/Question";
import { Modal } from "antd";
import { shuffleArray } from "../../utils";
import { useSelector } from "react-redux";

const getCategory = (id) => {
  if (id === "custom") return customTest;
  return categoryQuestions.find((category) => category.id === id);
};

export default function CategoryPage() {
  const [answers, setAnswers] = useState([]);
  const [results, setResults] = useState({ grade: null, percent: null });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const customTest = useSelector((state) => state.customTest);

  const { grade, percent } = results;
  const category = getCategory(id);

  console.log(customTest);
  console.log(category);
  console.log(id);

  if (!category) {
    return <p>Категория не найдена</p>;
  }

  if (id === "custom" && category.tasks.length === 0) {
    console.log(customTest);
    category.tasks = shuffleArray(customTest);
  }

  useEffect(() => {
    console.log("tasks");
    if (id === "custom" && category.tasks.length === 0) {
      navigate("/");
    }
  }, [category.tasks]);

  const correctAnswers = category.tasks.map(
    (question) => question.correctAnswer
  );

  const [countAnswers, setCountAnswers] = useState({
    countCorrectAnswers: null,
    countWrongAnswers: null,
    countEmptyAnswers: null,
  });

  const { countCorrectAnswers, countWrongAnswers, countEmptyAnswers } =
    countAnswers;

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function navigateToTheory() {
    navigate(`/theory/${id}`);
  }
  function setAnswerByIndex(index, userAnswer) {
    const tempAnswers = [...answers];
    tempAnswers[index] = userAnswer;
    console.log(tempAnswers);

    setAnswers(tempAnswers);
  }

  function changeResults(grade, percent) {
    setResults({
      grade,
      percent,
    });
  }

  function changeCountAnswers(
    countCorrectAnswers,
    countWrongAnswers,
    countEmptyAnswers
  ) {
    setCountAnswers({
      countCorrectAnswers,
      countWrongAnswers,
      countEmptyAnswers,
    });
  }

  function resetGrade() {
    setResults({
      grade: null,
      percent: null,
    });
    setAnswers([]);
  }

  function compareAnswers() {
    let countCorrectAnswers = 0;
    let countWrongAnswers = 0;
    let countEmptyAnswers = 0;
    correctAnswers.forEach((answer, index) => {
      const isCorrect = answers[index] === answer;
      if (isCorrect) {
        countCorrectAnswers++;
      } else if (!isCorrect && answers[index]) {
        countWrongAnswers++;
      } else {
        countEmptyAnswers++;
      }
      console.log(`${answer}: ${isCorrect ? "True" : "False"}`);
    });

    const percentage =
      (correctAnswers.length / 100) * countCorrectAnswers * 100;
    console.log(`Процент правильных ответов: ${percentage.toFixed(2)}%`);

    let grade;
    if (percentage < 50) {
      grade = "2";
    } else if (percentage < 80) {
      grade = "3";
    } else if (percentage < 90) {
      grade = "4";
    } else {
      grade = "5";
    }
    changeResults(grade, percentage);
    changeCountAnswers(
      countCorrectAnswers,
      countWrongAnswers,
      countEmptyAnswers
    );
    showModal();
  }

  const customLog = () => {
    console.log(answers);
  };

  return (
    <div>
      <h3>{category.title}</h3>
      {/* <h4>Вопросов - {category.tasks}</h4> */}
      <button onClick={showModal}>click</button>
      <button onClick={resetGrade}>reset</button>
      {id !== "custom" && <button onClick={navigateToTheory}>Theory</button>}

      {category.tasks.map((question, index) => (
        <Question
          key={index}
          {...question}
          index={index}
          setAnswerByIndex={setAnswerByIndex}
          grade={grade}
        />
      ))}

      <Modal
        title="Basic Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        footer={false}
        onCancel={handleCancel}
      >
        {answers.length === 0 ? (
          <p>net otvetov</p>
        ) : grade ? (
          <div>
            <p>Ваша оценка: {grade}</p>
            <p>Процент решенных задач: {percent}%</p>
            <p>Количество правильно решенных задач: {countCorrectAnswers}</p>
            <p>Количество неправильно решенных задач: {countWrongAnswers}</p>
            <p>Количество нерешенных задач: {countEmptyAnswers}</p>
          </div>
        ) : (
          <button onClick={compareAnswers}>Подтвердить</button>
        )}
        <button onClick={handleOk}>Вернуться назад</button>
      </Modal>
    </div>
  );
}

// Если процент менее 50% то оценка -2  и для други[ оценок так ;е]
// Блокировать инпуты после проверки ответов
//показывать пользователю неправильные ответы после результатов
// Сделать футер  + стили тестов (опционально)
