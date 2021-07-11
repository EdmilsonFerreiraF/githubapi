import React from "react"
import { useParams } from 'react-router-dom';

import { useProtectPage } from '../../hooks/useProtectPage';
import { useRequestData } from "../../hooks/useRequestData";
import { GITHUB_API_URL } from "../../constants/apiConstants"

const SearchItemStarred = () => {
    useProtectPage()

    const params = useParams()
    const result = useRequestData(`${GITHUB_API_URL}/users/${params.username}/starred`, [])
    console.log(result)

    return (
      <div className="card row container col col-lg-7 mx-auto my-5">
        <div className="card-body col">
          <h1 className="card-title display-6 text-center my-5">{params.username}</h1>
        </div>
      <h2 className="card-title display-6 text-center my-5">Repositórios mais visitados</h2>
      <div className="card-body row grid gap-3 justify-content-center my-5">

        <ul className="row my-5 gap-4 justify-content-center">
          {result && result.map(result => (
            <li className="col-md-2 lead">{result.name} <a href={result.html_url} target="_blank">Github link</a></li>
          ))}
        </ul>
      </div>
    </div>
    );
}

export default SearchItemStarred