import axios from "axios"
import dotenv from 'dotenv';
import { goToHome } from "../routes/coordinator";

dotenv.config();

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