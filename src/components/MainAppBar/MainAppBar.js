import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToHome } from '../../routes/coordinator';

import SignupButton from '../SignupButton/SignupButton';
import SearchBar from '../SearchBar/SearchBar';
import Logo from '../Logo/Logo';

const MainAppBar = () => {
    const history = useHistory()
    
    const handleLogoClick = () => {
        goToHome(history)
    }

    return (    
        <nav className="navbar navbar-dark bg-light row gy-1">
            <Logo logoClick={handleLogoClick}/>
            <SearchBar/>
            <SignupButton/>
        </nav>

    )
}

export default MainAppBar;