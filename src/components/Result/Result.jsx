import {BiHappyAlt} from 'react-icons/bi'
import cn from "./style.module.css"

const Result = ({answers, newGame}) => {
    let count = 1;
    answers.forEach(element => {
        if(element === true) {
            count++;
        }
    });
    return (
        <div className={cn.flex}>
            <BiHappyAlt className={cn.img}/>
            <h1>Ваш результат {count} из 10</h1>
            <button onClick={newGame} className={cn.button}>Попробовать снова</button>
        </div>
    );
}

export default Result;  