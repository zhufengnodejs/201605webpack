import React from 'react';
import {Link} from 'react-router';
export default class User extends React.Component{
    render(){
        return <div className="row">
            <div className="col-xs-3">
                <ul className="nav nav-pills nav-stacked">
                    <li><Link to="/user/add">增加用户</Link></li>
                    <li><Link to="/user/list">用户列表</Link></li>
                </ul>
            </div>
            <div className="col-xs-9">
                {this.props.children}
            </div>
        </div>
    }
}