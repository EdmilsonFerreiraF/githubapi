import React from 'react';

const SignupButton = (props) => {
    return (
        <div onClick={props.signupClick} className="btn-group col-1-auto col-md-2 col-xl-1" role="group" aria-label="Basic example">
            <button className="btn btn-success me-2" type="button">
                Login
            </button>
        </div>
    )
}

export default SignupButton;