import React from 'react';
import { useLocation } from "react-router-dom";

import { useProtectPage } from '../../hooks/useProtectPage';
import { useRequestData } from '../../hooks/useRequestData';
import { GITHUB_API_URL } from "../../constants/apiConstants"

import SearchItem from '../../components/SearchItem/SearchItem';

const SearchList = () => {
    useProtectPage()

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();

    const result = useRequestData(`${GITHUB_API_URL}/search/users?q=${query.get("username")}`, [])

    return (
        <ul className="row my-5 gap-4 justify-content-center">
            {result && result.items && result.items.map(result => (
                <SearchItem 
                    key={result.id}
                    avatar_url={result.avatar_url}
                    username={result.login}
                />
            ))}
        </ul>
    )
}

export default SearchList;