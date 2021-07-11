import React from 'react';
import { useLocation } from "react-router-dom";

import { useProtectPage } from '../../hooks/useProtectPage';
import { useRequestData } from '../../hooks/useRequestData';
import { GITHUB_API_URL } from "../../constants/apiConstants"

import SearchItem from '../SearchItem/SearchItem';

const SearchList = () => {
    useProtectPage()

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();

    const result = useRequestData(`${GITHUB_API_URL}/search/users?q=${query.get("username")}`, [])

    console.log(result)
    return (
        <div className="my-5 gy-3 row">
            <h1 className="display-4 text-center mb-5 title">Github API
                Search
            </h1>

            {!query.get("username") && <p className="text-center lead">Pesquise por usuário, repositório ou repositórios mais visitados no campo de pesquisa</p>}
            {result && !result.items && <p className="text-center lead">Nenhum resultado encontrado.</p>}

            <ul className="row my-5 gap-4 justify-content-center">
                {result && result.items && result.items.map(result => (
                    <SearchItem 
                        key={result.id}
                        username={query.get("username")}
                        avatar_url={result.avatar_url}
                    />
                ))}
            </ul>
        </div>
    )
}

export default SearchList;