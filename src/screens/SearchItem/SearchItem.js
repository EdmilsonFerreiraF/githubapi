import React from "react"

const SearchItem = (props) => {
    return (
      <div className="card result-item">
        <img src={props.avatar_url} className="card-img-top" alt="User avatar" />
        <div className="card-body">
          <h5 className="card-title">{props.query}</h5>
        </div>
        <div className="card-body row gap-3">
            <button type="button" className="btn btn-warning col-md result-item__btn">Repositórios</button>
            <button type="button" className="btn btn-warning col-md result-item__btn">Repos. mais visitados</button>
        </div>
      </div>
    );
}

export default SearchItem