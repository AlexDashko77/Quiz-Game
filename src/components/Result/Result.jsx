import {BiHappyAlt} from 'react-icons/bi'
import cn from "./style.module.css"
import { useEffect } from 'react';

const Result = ({answers, newGame, addToLeaderBoard}) => {
    let count = 0;
    answers.forEach(element => {
        if(element === true) {
            count++;
        }
    });
    useEffect(() => {
        addToLeaderBoard(count)
    }, [])
    return (
       <div className='App'>
         <div className={cn.flex}>
             <BiHappyAlt className={cn.img}/>
             <h1>Ваш результат {count} из 10</h1>
             <button onClick={newGame} className={cn.button}>Попробовать снова</button>
         </div>
       </div>
    );
}

export default Result;  