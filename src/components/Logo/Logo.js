import React from 'react';

const Logo = (props) => {
    return (
        <button onClick={props.logoClick} className="btn nav-link col-4 col-md-1 text-nowrap">Github API</button>
    )
}

export default Logo;