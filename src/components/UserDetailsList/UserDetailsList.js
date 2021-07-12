import React from 'react';
import dayjs from 'dayjs';
import ListGroup from 'react-bootstrap/ListGroup';

import UserDetailsItem from '../UserDetailsItem/UserDetailsItem';

const UserDetailsList = (props) => {
    return (
    <ListGroup horizontal className="card-body row grid gap-3 justify-content-center my-5">
        <UserDetailsItem text="Id" data={props.data.id} />
        <UserDetailsItem text="Name" data={props.data.name} />
        <UserDetailsItem text="Login" data={props.data.login} />
        <UserDetailsItem text="URL" data={props.data.html_url} />
        <UserDetailsItem text="Biografia" data={props.data.bio} />
        <UserDetailsItem text="Blog" data={props.data.blog} />
        <UserDetailsItem text="Empresa" data={props.data.company} />
        <UserDetailsItem text="Email" data={props.data.email} />
        <UserDetailsItem text="Criado em" data={dayjs(props.data.created_at).format('DD/MM/YYYY')} />
        <UserDetailsItem text="Node id" data={props.data.node_id} />
        <UserDetailsItem text="Seguidores" data={props.data.followers} />
        <UserDetailsItem text="Seguindo" data={props.data.following} />
        <UserDetailsItem text="Contratável" data={props.data.hirable} />
        <UserDetailsItem text="Localização" data={props.data.location} />
        <UserDetailsItem text="Atualizado em" data={dayjs(props.data.updated_at).format('DD/MM/YYYY')} />
        <UserDetailsItem text="Nome de usuário do Twitter" data={props.data.twitter_username} />
        <UserDetailsItem text="Gists públicos" data={props.data.public_gists} />
        <UserDetailsItem text="Repositórios públicos" data={props.data.public_repos} />
        <UserDetailsItem text="Pontuação" data={props.data.score} />
        <UserDetailsItem text="Tipo" data={props.data.type} />
      </ListGroup>
    )
}

export default UserDetailsList;