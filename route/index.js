import React from 'react';
import ReactDOM from 'react-dom';
require('bootstrap/dist/css/bootstrap.css');
import {Router,Route,hashHistory} from 'react-router';
import {App} from './containers';
import {Home,User,Profile,UserAdd,UserList,UserDetail} from './components';
ReactDOM.render(
    <Router history={hashHistory} >
        <Route path="/" component={App}>
            <Route path="home" component={Home}/>
            <Route path="user" component={User}>
                <Route path="add" component={UserAdd}/>
                <Route path="list" component={UserList}/>
                <Route path="detail/:id" component={UserDetail}/>
            </Route>
            <Route path="profile" component={Profile}/>
        </Route>
    </Router>,
    document.querySelector('#app')
);
