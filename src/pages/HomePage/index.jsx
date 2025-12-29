import React, { useState } from "react";
import LetterComponent from "../../components/LetterComponent";
import { Switch } from "antd";
import MainCarousel from "../../components/MainCarousel";
import FormTestConstructor from "../../components/FormTestConstructor";
export default function HomePage() {
  // let counter = 0;
  const [counter, setCounter] = useState(0); //[0,fn]
  const [num, setNum] = useState(0);
  const [word, setWord] = useState("");
  const [answer, setAnswer] = useState("");
  const [containWord, setContainWord] = useState("");
  const [hasWinner, setHasWinner] = useState(false);
  const [showGame, setShowGame] = useState(false);
  
  return (
    <div>
      <MainCarousel />
      <FormTestConstructor />
    </div>
  );
}

// Создать инпут и кнопку рядом с ним. По клику на кнопку слово добавляется в строковую переменную
// при отображенни этой строки каждая четная буква должна быть зеленая а каждая нечетная синяя
// если переменная длинной более 30 символов то ее обрезаем до 30 символов и ставим ...

// + шапка сайта
//логотип ------- меню

// Part 2
// Создать компонент каждого элемента в который будет передаваться сама буква и ее цвет
//Каждая буква будет в рамочке и у каждой буквы будет кнопка выключить букву

//по нажатию этой кнопки буква будет пропадать
// Need only one component
// абс ->
// <ExamCategory bgColor={"red"} title={'hello'} />
// component with a
// component with b
// component with c

//выводить сообщение пользователю что ответ верный или нет
// при неверном ответе после вернго , бэкграунд бук должен стать снова белым
// сделать буквы в ряд
// примерно нарисовать макет будующего сайта
// установить antd и попробовать добавить из него пару компонентов ( кнопки или инпуты)
