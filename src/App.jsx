import { useState } from "react";
import Result from "./components/Result/Result";
import Questions from "./components/Questions/Questions";
import { Route, Routes, useNavigate } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import NavBar from "./components/NavBar/NavBar";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";

const App = () => {

  const questions = [
    {
      id: 1,
      title: 'Сколько всего океанов ?',
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
  const [name, setName] = useState("")
  const [auth, setAuth] = useState(false)
  const [leaderboard, setLeaderboard] = useState([])
  const [resultActive, setResultActive] = useState(false)

  const navigate = useNavigate()

  function choiceAnswer(el,idx) {
      if(idx == el.right) {
        setAnswers([...answers, true])
        console.log(answers);
      }
      else {
        setAnswers([...answers, false])
        console.log(answers);
    }
    setNum((old) => old + 1);
   
  }

  const newGame = () => {
    setAnswers([]);
    setNum(0);
    navigate('/game')
    setResultActive(false)
  }

  const almostNewGame = () => {
    setAnswers([]);
    setNum(0);
    setResultActive(false)
  }

  const addToLeaderBoard = (num) => {
    const obj = {
      name,
      score: num
    }
    setLeaderboard((old) => [...old, obj])
  }
   return (
    <div>
      <NavBar auth={auth} setResultActive={setResultActive} resultActive={resultActive} setAuth={setAuth} newGame={almostNewGame}/>
      {auth ?   
      <Routes>
        <Route path="/" element={<Auth setName={setName} setAuth={setAuth}/>}/>
        <Route path="/auth" element={<Auth setName={setName} setAuth={setAuth}/>}/>
        <Route path="/game" element={<Questions   answers={answers} setResultActive={setResultActive} addToLeaderBoard={addToLeaderBoard} num={num} questions={questions} choiceAnswer={choiceAnswer}/>}/>
        <Route path="/result" element={ <Result name={name} leaderboard={leaderboard} addToLeaderBoard={addToLeaderBoard} answers={answers} newGame={newGame}/>}/>
        <Route path="/leaderboard" element={<LeaderBoard leaderboard={leaderboard}/>}/>
      </Routes>
      :
      <Routes>
        <Route path="/" element={<Auth setName={setName} setAuth={setAuth}/>}/>
        <Route path="/auth" element={<Auth setName={setName} setAuth={setAuth}/>}/>
      </Routes>
      }
    </div>
  );
}

export default App;
