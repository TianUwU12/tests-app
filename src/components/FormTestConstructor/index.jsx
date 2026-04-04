import React, { useEffect, useState } from "react";
import FormTestConstructorItem from "./FormTestConstructorItem";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCustomTest } from "../../store/slices/customTestSlice";
import { Alert, Flex, Spin } from 'antd';
import ErrorComponent from "../ErrorComponent";

export default function FormTestConstructor() {
  const [formData, setFormData] = useState({});
  const categories = useSelector((state)=> state.categories);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [isError,setIsError] = useState(false);
  // const [isLoading,setIsLoading] = useState(false);
  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       setIsLoading(true);
  //       const response = await fetch("http://localhost:3000/api/tests");
  //       const data = await response.json();
  //       setIsLoading(false);
  //       setCategories(data);

  //     } catch (error) {
  //       console.log(error);
  //       setIsError(true);
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchCategories();
  // }, []);

  function changeFormData(id, value) {
    const copyData = { ...formData };

    copyData[id] = (copyData[id] || 0) + value;
    setFormData(copyData);
  }

  function getRandomItems(key, n) {
    const category = categories.find((cat) => cat.id === key);
    console.log(categories);
    
    return [...category.tasks].sort(() => Math.random() - 0.5).slice(0, n);
  }

  function startTest() {
    const categories = Object.entries(formData);
    console.log(categories);
    console.log(formData);
    
    const questions = categories
      .map(([key, value]) => getRandomItems(key, value))
      .flat();

    dispatch(setCustomTest(questions));
    navigate("/catalog/custom");
  }

  const checkBtnDisabled = () => {
    const values = Object.values(formData);
    console.log(values);
    
    if (!values.length) return true;
    const isZeroValues = values.every((item) => item === 0);

    return isZeroValues;
  };
  console.log(categories);
  if (categories.length === 0){
    return <Spin description="Loading"></Spin>
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
