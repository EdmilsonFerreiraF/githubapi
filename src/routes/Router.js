import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Error from '../screens/Error/Error';
import Home from '../screens/Home/Home';
import LoginCallback from '../screens/LoginCallback/LoginCallback';
import Search from '../screens/SearchList/SearchList';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login/callback" component={LoginCallback} />
            <Route exact path="/search" component={Search} />
            <Route component={Error}/>
        </Switch>
    )
}

export default Router;