import React from "react"
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { goToSearchDetails, goToSearchItemRepositories, goToSearchItemStarred } from "../../routes/coordinator";

const SearchItem = (props) => {
    const history = useHistory();
  
    return (
      <Card className="result-item">
        <Card.Img variant="top" src={props.avatar_url} alt="User avatar" onClick={() => goToSearchDetails(history, props.username)}/>
        <Card.Body onClick={() => goToSearchDetails(history, props.username)}>
          <Card.Title >{props.username}</Card.Title>
        </Card.Body>
        <Card.Body className="row gap-3">
            <Button variant="warning" className=" col-md result-item__btn" onClick={() => goToSearchItemRepositories(history, props.username)}>Repositórios</Button>
            <Button variant="warning" className=" col-md result-item__btn" onClick={() => goToSearchItemStarred(history, props.username)}>Repos. mais visitados</Button>
        </Card.Body>
      </Card>
    );
}

export default SearchItem