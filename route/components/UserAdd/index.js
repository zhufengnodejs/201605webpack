import React from 'react';
import {Link,hashHistory} from 'react-router';
export default class User extends React.Component{
    handleSubmit(event){
        event.preventDefault();
        var userlist = localStorage.getItem('userlist');
        userlist = userlist ? JSON.parse(userlist) : [];
        var user = {name:this.refs.name.value};
        user.id = userlist.length;
        userlist.push(user);
        localStorage.setItem('userlist',JSON.stringify(userlist));
        hashHistory.push('/user/list');
        setTimeout(function(){
            hashHistory.goBack();
        },2000);
    }
    render(){
        return <div className="row">
            <form onSubmit={this.handleSubmit.bind(this)} >
                <div className="form-group">
                    <label htmlFor="name">姓名</label>
                    <input type="text" className="form-control" ref="name"/>
                </div>
                <button className="btn btn-primary" type="submit">增加</button>
            </form>
        </div>
    }
}