import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { login } from "../../services/user";
import { goToHome } from "../../routes/coordinator";
import LoggedContext from '../../context/LoggedContext';

function LoginCallback() {
  const history = useHistory();

  const loggedContext = useContext(LoggedContext)
    useEffect(() => {
      const token = localStorage.getItem("token")

      if (token) {
        localStorage.removeItem("token")
        loggedContext.setLogged(false)
      } else {
        const code =
          window.location.href.match(/\?code=(.*)/) &&
          window.location.href.match(/\?code=(.*)/)[1];
          login(code, history, loggedContext.setLogged);
      }

      goToHome(history);
    }, [history, loggedContext])

  return null;
}

export default LoginCallback;