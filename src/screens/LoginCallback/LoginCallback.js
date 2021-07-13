import { useContext, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { login } from "../../services/user";
import { goToHome } from "../../routes/coordinator";
import LoggedContext from '../../context/LoggedContext';

const LoginCallback = () => {
  const history = useHistory();

  const loggedContext = useContext(LoggedContext)

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (token) {
      localStorage.removeItem("token")
      loggedContext.setLogged(false)
    } else {
      const code = query.get("code")
        login(code, history, loggedContext.setLogged);
    }

    goToHome(history);
  })

  return null;
}

export default LoginCallback;