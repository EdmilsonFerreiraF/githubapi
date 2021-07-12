import React from "react"
import { useParams } from 'react-router-dom';

import DetailsList from "../../components/UserDetailsList/UserDetailsList";
import { GITHUB_API_URL } from "../../constants/apiConstants"
import { useProtectPage } from '../../hooks/useProtectPage';
import { useRequestData } from "../../hooks/useRequestData";

const UserDetails = () => {
    useProtectPage()

    const params = useParams()
    const result = useRequestData(`${GITHUB_API_URL}/users/${params.username}`, [])

    return (
      <div className="card row container col col-lg-7 mx-auto my-5 px-3">
        <div className="card-body col">
          <h1 className="card-title display-6 text-center my-5">{params.username}</h1>
        </div>
        <img src={result.avatar_url} className=" col-5 my-5 mx-auto" alt="User avatar" />

        <DetailsList data={result} />
      </div>
    );
}

export default UserDetails