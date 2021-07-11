import axios from "axios"
import { goToHome } from "../routes/coordinator";

export const login = (body, history, setLogged) => {
    axios.get(`http://localhost:3003/user/login/callback?code=${body}`
    ).then(response => {
        localStorage.setItem("token", response.data.token)
        setLogged(true)
        goToHome(history)
    }).catch(error => {
        console.log(error.message)
        alert(error.message)
    })
}