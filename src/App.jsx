import { useState } from "react";
import Question from "./components/Question/Question";
import Result from "./components/Result/Result";

const App = () => {

  const questions = [
    {
      id: 1,
      title: 'Cколько на земле океанов ?',
      variants: ['4', '5', '3'],
      right: 1,
    },
    {
      id:2,
      title: 'Какая длина была у самого большого крокодила ?',
      variants: [6.17, 5, 5.2],
      right: 0,
    },
    {
      id: 3,
      title: 'Какая столица Португалии ?',
      variants: ['Мадрид', 'Лиссабон', 'Фару'],
      right: 1,
    },
    {
      id: 4,
      title: 'Какое самое богатое государство ?',
      variants: ['Люксембург', 'Сингапур', 'Швейцария'],
      right: 0,

    },
    {
      id: 5,
      title: 'Какая планета по счету 6 ?',
      variants: ['Венера', 'Нептун', 'Сатурн'],
      right: 2,
    },
    {
      id: 6,
      title: 'Кто выиграл первый ЧМ по футболу ?',
      variants: ['Уругвай', 'Германия', 'Бразилия'],
      right: 0,
    },
    {
      id: 7,
      title: 'Какая столица Мексики ?',
      variants: ['Мехико', 'Толука', 'Тескоко'],
      right: 1,
    },
    {
      id: 8,
      title: 'Как переводится слово "Adorable" ?',
      variants: ['Восхитительный', 'Приближенный', 'Неприятный'],
      right: 0,
    },
    {
      id:9,
      title: 'Когда был придуман первый компьютер ?',
      variants: ['1951', '1943', '1938'],
      right: 2,
    },
    {
      id: 10,
      title: 'Когда был первый ЧМ по футболу ?',
      variants: ['1930', '1974', '1956'],
      right: 0,
    },

  ]
  const [num, setNum] = useState(0);
  const [answers, setAnswers] = useState([]);

  function choiceAnswer(el,idx) {
    if(idx == el.right) {
      setAnswers([...answers, true])
    }
    else {
      setAnswers([...answers, false])
    }
    setNum((old) => old + 1);
  }

  const newGame = () => {
    setAnswers([]);
    setNum(0);
  }

  return (
    <div className="App">
      {num < 10
      ? <Question elem={questions[num]} num={num} changeQuest={choiceAnswer}/>
      : <Result answers={answers} newGame={newGame}/>
      }
      
    </div>
  );
}

export default App;
