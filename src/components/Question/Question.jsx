import cn from "./style.module.css"

const Question = ({elem, num, changeQuest}) => {
    return (
        <>
            <div className={cn.progress}>
                <div style={{width: `${(num) * 10}%`}} className={cn.progressFull}></div>
            </div>
            <h1 className={cn.title}>{elem.title}</h1>
            <ul>
                {elem.variants.map((el,idx) => (
                    <li className={cn.li} onClick={() => changeQuest(elem, idx)} key={el}>{el}</li>
                ))}
            </ul>
        </>
    );
}

export default Question;