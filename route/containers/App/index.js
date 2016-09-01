import React from 'react';
import {Link} from 'react-router'
export default class App extends React.Component{
    render(){
        return <div className="container">
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><Link to="home">首页</Link></li>
                            <li><Link to="user">用户管理</Link></li>
                            <li> <Link to="profile">个人设置</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {
                this.props.children
            }
        </div>
    }
}