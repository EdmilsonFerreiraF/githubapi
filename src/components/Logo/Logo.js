import React from 'react';

const Logo = (props) => {
    return (
        <div onClick={props.logoClick} className="btn nav-link col-4 col-md-1 text-nowrap">Github API</div>
    )
}

export default Logo;