import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const UserDetailsItem = (props) => {
    return (
        <ListGroup.Item className="col-md-5 col-xl-4 lead">{props.text} {props.data}</ListGroup.Item>
    )
}

export default UserDetailsItem;