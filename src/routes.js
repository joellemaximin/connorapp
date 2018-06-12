import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Welcome from './Components/Welcome/Welcome';
import Login from'./Components/Login/Login';
import Signup from'./Components/Signup/Signup';
import NotFound from './Components/NotFound/NotFound';
import Home from'./Components/Home/Home';



const Routes = () => (
    <BrowserRouter>
    <Switch>
    <Route exact path='/' component={Welcome}/>
    <Route  path='/login' component={Login}/>
    <Route  path='/signup' component={Signup}/>
    <Route  path='/home' component={Home}/>
    <Route  path='/*' component={NotFound} />

    </ Switch>
    </BrowserRouter>
);

export default Routes;