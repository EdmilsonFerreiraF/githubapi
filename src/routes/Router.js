import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Error from '../screens/Error/Error';
import Home from '../screens/Home/Home';
import LoginCallback from '../screens/LoginCallback/LoginCallback';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login/callback" component={LoginCallback} />
            <Route component={Error}/>
        </Switch>
    )
}

export default Router;