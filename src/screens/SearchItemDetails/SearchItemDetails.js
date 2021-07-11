import React from "react"
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';

import { GITHUB_API_URL } from "../../constants/apiConstants"
import { useProtectPage } from '../../hooks/useProtectPage';
import { useRequestData } from "../../hooks/useRequestData";

const SearchItemDetails = () => {
    useProtectPage()

    const params = useParams()
    const result = useRequestData(`${GITHUB_API_URL}/users/${params.username}`, [])

    return (
      <div className="card row container col col-lg-7 mx-auto my-5">
        <div className="card-body col">
          <h1 className="card-title display-6 text-center my-5">{params.username}</h1>
        </div>
        <img src={result.avatar_url} className=" col-5 my-5 mx-auto" alt="User avatar" />
        <div className="card-body row grid gap-3 justify-content-center my-5">
          <p className="col-md-2 lead">Id: {result.id}</p>
          <p className="col-md-2 lead">Name: {result.name}</p>
          <p className="col-md-2 lead">Login: {result.login}</p>
          <p className="col-md-2 lead">URL: {result.html_url}</p>
          <p className="col-md-2 lead">Biografia: {result.bio}</p>
          <p className="col-md-2 lead">Blog: {result.blog}</p>
          <p className="col-md-2 lead">Empresa: {result.empresa}</p>
          <p className="col-md-2 lead">Email: {result.email}</p>
          <p className="col-md-2 lead">Criado em: {dayjs(result.created_at).format('DD/MM/YYYY')}</p>
          <p className="col-md-2 lead">Node id: {result.node_id}</p>
          <p className="col-md-2 lead">Seguidores: {result.followers}</p>
          <p className="col-md-2 lead">Seguindo: {result.following}</p>
          <p className="col-md-2 lead">Contratável: {result.hirable}</p>
          <p className="col-md-2 lead">Localização: {result.location}</p>
          <p className="col-md-2 lead">Atualizado em: {dayjs(result.updated_at).format('DD/MM/YYYY')}</p>
          <p className="col-md-2 lead">Nome de usuário do Twitter: {result.twitter_username}</p>
          <p className="col-md-2 lead">Public gists: {result.public_gists}</p>
          <p className="col-md-2 lead">Repositórios públicos: {result.public_repos}</p>
          <p className="col-md-2 lead">Pontuação: {result.score}</p>
          <p className="col-md-2 lead">Tipo: {result.type}</p>
        </div>
      </div>
    );
}

export default SearchItemDetails