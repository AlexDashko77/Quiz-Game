import cn from "./style.module.css"
import { useNavigate } from "react-router-dom"

function Auth({setName, setAuth}) {

    const navigate = useNavigate()

    return (
        <div className="App">
           <div className={cn.flex}>
             <h1>Как вас называть ?</h1>
             <input onChange={(e) => setName(e.target.value)} type="text" />
             <button onClick={() => {
                setAuth(true)
                navigate('/game')
                }}>Войти</button>
           </div>
        </div>
    )
}
export default Auth