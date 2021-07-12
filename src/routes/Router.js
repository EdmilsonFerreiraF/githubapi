import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Error from '../screens/Error/Error';
import Home from '../screens/Home/Home';
import LoginCallback from '../screens/LoginCallback/LoginCallback';
import UserDetails from '../screens/UserDetails/UserDetails';
import UserRepos from '../screens/UserRepos/UserRepos';
import UserStarred from '../screens/UserStarred/UserStarred';
import Search from '../screens/Search/Search';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login/callback" component={LoginCallback} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/users/:username" component={UserDetails} />
            <Route exact path="/users/:username/repos" component={UserRepos} />
            <Route exact path="/users/:username/starred" component={UserStarred} />
            <Route component={Error}/>
        </Switch>
    )
}

export default Router;