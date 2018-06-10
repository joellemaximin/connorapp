import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import Welcome  from '././Components/Welcome/Welcome';
import  from '././Components/Login/Login';
import  from '././Components/Signup/Signup';
import  from '././Components/Home/Home';
import  from '././Components/NotFound/NotFound';

const Routes = () => (
    <BrowserRouter>
    <Switch>
    <Route exact path='/' component={Welcome}/>
    <Route  path='/login' component={Login}/>
    <Route  path='/signup' component={Signup}/>
    <Route  path='/welcome' component={Home}/>
    <Route  path='/*' component={NotFound}/>
        
    </ Switch>
    </BrowserRouter>
);