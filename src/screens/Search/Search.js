import React, { Suspense } from 'react';
import { useLocation } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';

import { useProtectPage } from '../../hooks/useProtectPage';
import { useRequestData } from '../../hooks/useRequestData';
import { GITHUB_API_URL } from "../../constants/apiConstants"

const SearchList = React.lazy(() => import('../../components/SearchList/SearchList'));

const Search = () => {
    useProtectPage()

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();

    const result = useRequestData(`${GITHUB_API_URL}/search/users?q=${query.get("username")}`, [])

    return (
        <div className="my-5 px-3 gy-3 row">
            <h1 className="display-4 text-center mb-5 title">Github API
                Search
            </h1>

            {!query.get("username") && <p className="text-center lead">Pesquise por usuário, repositório ou repositórios mais visitados no campo de pesquisa</p>}
            {result && !result.items && <p className="text-center lead">Nenhum resultado encontrado.</p>}

            <Suspense fallback={<Spinner className="loading-spinner mx-auto" animation="border" variant="secondary"/>}>
                <SearchList />
            </Suspense>
        </div>
    )
}

export default Search;