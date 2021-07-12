import React from 'react';
import Button from 'react-bootstrap/Button';

const Logo = (props) => {
    return (
        <Button variant="link" onClick={props.logoClick} className="nav-link col-2 p-0 col-md-1">Github API</Button>
    )
}

export default Logo;