import React, { useContext } from 'react';

import LoggedContext from "../../context/LoggedContext";

const SignupButton = (props) => {
  const loggedContext = useContext(LoggedContext)
    
    return (
        <div onClick={props.signupClick} className="btn-group col-1-auto col-md-2 col-xl-1" role="group" aria-label="Basic example">
            <a className="btn btn-success me-2" href={`${BASE_URL}/user/login/auth`}>
                {loggedContext && loggedContext.logged ? "Sair" : "Login"}
            </a>
        </div>
    )
}

export default SignupButton;