import React, { useState } from "react";
import { categoryQuestions } from "../../data/questions";
import FormTestConstructorItem from "./FormTestConstructorItem";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCustomTest } from "../../store/slices/customTestSlice";

export default function FormTestConstructor() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function changeFormData(id, value) {
    const copyData = { ...formData };

    copyData[id] = (copyData[id] || 0) + value;
    console.log(copyData);
    setFormData(copyData);
  }

  function getRandomItems(key, n) {
    console.log(key);

    const category = categoryQuestions.find((cat) => cat.id === key);
    console.log(category);

    return [...category.tasks].sort(() => Math.random() - 0.5).slice(0, n);
  }

  function startTest() {
    const categories = Object.entries(formData);
    console.log(categories);
    const questions = categories
      .map(([key, value]) => getRandomItems(key, value))
      .flat();

    console.log(questions);

    // localStorage.setItem("customTest", JSON.stringify(questions)); // в редакс тулкит слайс

    dispatch(setCustomTest(questions));
    navigate("/catalog/custom");
    //navigate('kuda to')
  }

  //   let a = "a";
  //   let b = "b";
  //   let c = "c";

  //   console.log(b + a + +c + a);

  const checkBtnDisabled = () => {
    const values = Object.values(formData);
    if (!values.length) return true;
    console.log(values);
    const isZeroValues = values.every((item) => item === 0);

    return isZeroValues;
  };

  return (
    <div>
      {categoryQuestions.map(({ id, title, tasks }) => (
        <FormTestConstructorItem
          key={id}
          title={title}
          tasks={tasks}
          id={id}
          changeFormData={changeFormData}
        />
      ))}
      <button disabled={checkBtnDisabled()} onClick={startTest}>
        ok
      </button>
      <button
        onClick={() => {
          console.log(formData);
          checkBtnDisabled();
        }}
      >
        log
      </button>
    </div>
  );
}
