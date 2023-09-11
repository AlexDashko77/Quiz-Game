import { useEffect, useState } from "react";
import Question from "../Question/Question";


function Questions({num, questions, choiceAnswer,  setResultActive, answers, addToLeaderBoard}) {

    return (
        <div className="App">
            <Question  addToLeaderBoard={addToLeaderBoard} answers={answers} setResultActive={setResultActive} elem={questions[num]} num={num} changeQuest={choiceAnswer}/>
        </div>
    )
}

export default Questions