import { NavLink, useNavigate } from "react-router-dom"
import cn from "./style.module.css"

function NavBar({auth, setAuth, newGame, resultActive, setResultActive}) {

    const navigate = useNavigate()    

    return (
        <div>
            <div>
                {!auth ? 
                <ul className={cn.ul}>
                    <li className={cn.li}><NavLink to={'/auth'}>Игра</NavLink></li>
                    <li className={cn.li}><NavLink to={'/auth'}>Таблица Лидеров</NavLink></li>
                    <li className={cn.li}><NavLink to={'/auth'}>Войти</NavLink></li>
                </ul>
                :
                <ul className={cn.ul}>
                    <li className={cn.li}><NavLink to={resultActive ? "/result" : '/game'}>Игра</NavLink></li>
                    <li className={cn.li}><NavLink to={'/leaderboard'}>Таблица Лидеров</NavLink></li>
                    <li onClick={() => {
                        setAuth(false)
                        setResultActive(false)
                        newGame()
                    }} className={cn.li}><NavLink to={'/auth'}>Выйти</NavLink></li>
                </ul>    
            }
            </div>
        </div>
    )
}
export default NavBar