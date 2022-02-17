import React, { useContext } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { BASE_URL } from '../../constants/apiConstants';

import LoggedContext from "../../context/LoggedContext";

const LoginOrLogoutButton = (props) => {
  const loggedContext = useContext(LoggedContext)
    
    return (
        <ButtonGroup onClick={props.signupClick} className="col-3 offset-5 offset-md-0 col-md-2 col-xl-1">
            <a className="btn btn-success me-2" href={`${BASE_URL}/user/login/auth`}>
                {loggedContext && loggedContext.logged ? "Sair" : "Login"}
            </a>
        </ButtonGroup>
    )
}

export default LoginOrLogoutButton;