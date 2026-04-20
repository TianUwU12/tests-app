import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Question from "../../components/Question";
import { Modal } from "antd";
import { useSelector } from "react-redux";

export default function CategoryPage() {
  const [answers, setAnswers] = useState([]);
  const [results, setResults] = useState({ grade: null, percent: null });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const customTest = useSelector((state) => state.customTest);
  const categoryQuestions = useSelector((state) => state.categories);
  const user = useSelector((state) => state.auth);

  const { grade, percent } = results;
  const tasks =
    categoryQuestions.find((category) => category.id === id)?.tasks ||
    customTest;
  const categoryTitle = categoryQuestions.find(
    (category) => category.id === id,
  )?.title;

  useEffect(() => {
    if (id === "custom" && tasks.length === 0) {
      navigate("/");
    }
  }, [tasks]);

  const correctAnswers = tasks.map((question) => question.correctAnswer);

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
    countEmptyAnswers,
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
    });

    const percentage =
      (correctAnswers.length / 100) * countCorrectAnswers * 100;

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
      countEmptyAnswers,
    );
    showModal();
    if (user) {
      submitResult(categoryTitle, countCorrectAnswers, correctAnswers.length);
    }
  }

  async function submitResult(category, score, totalQuestions) {
    //fetch mehod post
    //category, score, totalQuestions
    const data = { category, score, totalQuestions };

    const response = await fetch(
      "https://test-backend-adrunami.amvera.io/api/tests/submit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(data),
      },
    );
  }

  return (
    <div>
      <h3>{categoryTitle}</h3>
      {/* <h4>Вопросов - {category.tasks}</h4> */}

      {tasks.map((question, index) => (
        <Question
          key={index}
          {...question}
          index={index}
          setAnswerByIndex={setAnswerByIndex}
          grade={grade}
        />
      ))}
      <button onClick={showModal}>click</button>
      <button onClick={resetGrade}>reset</button>
      {id !== "custom" && <button onClick={navigateToTheory}>Theory</button>}
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
