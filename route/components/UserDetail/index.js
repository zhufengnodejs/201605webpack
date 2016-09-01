import React from 'react';
import {Link} from 'react-router';
export default class UserDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {user:{}};
    }
    componentDidMount(){
        var userlist = localStorage.getItem('userlist');
        userlist = userlist ? JSON.parse(userlist) : [];
        //取出路径参数
        var id = this.props.params.id;
        var user = userlist.find(function(item){
            return item.id == id;
        });
        this.setState({user:user});
    }

    render(){
        return <div className="row">
            <div className="col-xs-12">
                用户ID:{this.state.user.id}
                用户名称:{this.state.user.name}
            </div>
        </div>
    }
}