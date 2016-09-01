import React from 'react';
import ReactDOM from 'react-dom';
require('bootstrap/dist/css/bootstrap.css');
import {Router,Route} from 'react-router';
import {App} from './containers';
import {Home,User,Profile} from './components';
ReactDOM.render(
    <Router>
        <Route path="/" component={App}>
            <Route path="home" component={Home}/>
            <Route path="user" component={User}/>
            <Route path="profile" component={Profile}/>
        </Route>
    </Router>,
    document.querySelector('#app')
);
