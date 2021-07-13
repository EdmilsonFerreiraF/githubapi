import { useEffect } from "react"
import { useHistory } from 'react-router-dom';
import { goToHome } from '../routes/coordinator';

export const useProtectPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (!token) {
            goToHome(history)
        }
    }, [history])
}