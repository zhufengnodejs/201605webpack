import React from 'react';
import {Link} from 'react-router';
export default class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {user:{}};
    }
    componentDidMount(){
        var userlist = [{"id":1,"name":"张三"},{"id":2,"name":"李四"}];
        var id = this.props.params.id;
        var user = userlist.find(function(item){
            return item.id == id;
        });
        this.setState({user});
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