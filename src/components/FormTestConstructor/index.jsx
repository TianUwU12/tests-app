import React, { useEffect, useState } from "react";
import FormTestConstructorItem from "./FormTestConstructorItem";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCustomTest } from "../../store/slices/customTestSlice";

export default function FormTestConstructor() {
  const [formData, setFormData] = useState({});
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/tests");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);

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
  console.log(categories);

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
