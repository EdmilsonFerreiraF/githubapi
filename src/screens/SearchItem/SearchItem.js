import React from "react"
import { useHistory } from "react-router-dom";

import { goToSearchDetails, goToSearchItemRepositories, goToSearchItemStarred } from "../../routes/coordinator";

const SearchItem = (props) => {
    const history = useHistory();
  
    return (
      <div className="card result-item">
        <img src={props.avatar_url} className="card-img-top" alt="User avatar" onClick={() => goToSearchDetails(history, props.username)}/>
        <div className="card-body"  onClick={() => goToSearchDetails(history, props.username)}>
          <h5 className="card-title">{props.username}</h5>
        </div>
        <div className="card-body row gap-3">
            <button type="button" className="btn btn-warning col-md result-item__btn" onClick={() => goToSearchItemRepositories(history, props.username)}>Repositórios</button>
            <button type="button" className="btn btn-warning col-md result-item__btn" onClick={() => goToSearchItemStarred(history, props.username)}>Repos. mais visitados</button>
        </div>
      </div>
    );
}

export default SearchItem