import cn from "./style.module.css"

function LeaderBoard({leaderboard}) {
    console.log(leaderboard);
    let uniqueArray = []
        uniqueArray = leaderboard
  .filter((obj, index, self) =>
    index === self.findIndex((t) => t.name == obj.name && t.score == obj.score));    
    uniqueArray = uniqueArray.sort((a, b) => b.score - a.score)
    return (
        <div className="App">
                <h1 className={cn.h1}>Таблица лидеров</h1>
            <div className={cn.wrapper}>
                {uniqueArray.map((el) => {
                    return (
                        <div className={cn.user}>
                            <p>{el.name}</p>
                            <p>{el.score}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default LeaderBoard