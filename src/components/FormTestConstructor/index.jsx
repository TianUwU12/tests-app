import React, { useState } from "react";
import FormTestConstructorItem from "./FormTestConstructorItem";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCustomTest } from "../../store/slices/customTestSlice";
import { Spin } from "antd";

export default function FormTestConstructor() {
  const [formData, setFormData] = useState({});
  const categories = useSelector((state) => state.categories);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function changeFormData(id, value) {
    const copyData = { ...formData };

    copyData[id] = (copyData[id] || 0) + value;
    setFormData(copyData);
  }

  function getRandomItems(key, n) {
    const category = categories.find((cat) => cat.id === key);

    return [...category.tasks].sort(() => Math.random() - 0.5).slice(0, n);
  }

  function startTest() {
    const categories = Object.entries(formData);

    const questions = categories
      .map(([key, value]) => getRandomItems(key, value))
      .flat();

    dispatch(setCustomTest(questions));
    navigate("/catalog/custom");
  }

  const checkBtnDisabled = () => {
    const values = Object.values(formData);

    if (!values.length) return true;
    const isZeroValues = values.every((item) => item === 0);

    return isZeroValues;
  };
  if (categories.length === 0) {
    return <Spin description="Loading"></Spin>;
  }
  // if (isError){
  //   return <ErrorComponent/>;
  // }
  return (
    <div>
      {categories.map(({ id, title, tasks }) => (
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
    </div>
  );
}
