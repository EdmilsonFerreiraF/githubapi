import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

import { goToHome } from '../../routes/coordinator';
import LoggedContext from '../../context/LoggedContext';

import LoginOrLogoutButton from '../LoginOrLogoutButton/LoginOrLogoutButton';
import SearchBar from '../SearchBar/SearchBar';
import Logo from '../Logo/Logo';

const MainAppBar = () => {
    const history = useHistory()
    const loggedContext = useContext(LoggedContext)

    const handleLogoClick = () => {
        goToHome(history)
    }
    
    return (    
        <Navbar bg="light" expand="2xl" className="row p-4 g-2">
            <Logo logoClick={handleLogoClick}/>
            <SearchBar/>
            <LoginOrLogoutButton loggedContext={loggedContext}/>
        </Navbar>
    )
}

export default MainAppBar;