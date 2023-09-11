import { useNavigate } from "react-router-dom"
import cn from "./style.module.css"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrement, clear, changeInterval } from "../../slice"

const Question = ({elem, num, changeQuest, setResultActive,}) => {

    const navigate = useNavigate()
    const time = useSelector((state) => state.timer)
    const dispatch = useDispatch()
    const timerRef = useRef(null);

    function changeOrEnd(elem, idx) {
        if(num == 9) {
            setResultActive(true)
            changeQuest(elem, idx)
            navigate('/result')
        }
        else {
            changeQuest(elem, idx)
        }
        }
   
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
            dispatch(decrement())
            console.log(time.timer);
            if(time.timer == 0) {
                dispatch(clear())
                changeOrEnd(elem, undefined)
            }
        },1000)



    return (
        <>
            <div className={cn.progress}>
                <div style={{width: `${(num) * 10}%`}} className={cn.progressFull}></div>
            </div>
            <p className={cn.center}>{time.timer}</p>
            <h1 className={cn.title}>{elem.title}</h1>
            <ul className={cn.ul}>
                {elem.variants.map((el,idx) => (
                    <li className={cn.li} onClick={() => {
                        dispatch(clear())
                        changeOrEnd(elem, idx)}} key={el}>{el}</li>
                ))}
            </ul>
        </>
    );
}

export default Question;