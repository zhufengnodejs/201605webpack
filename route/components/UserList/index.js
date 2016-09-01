import React from 'react';
import {Link} from 'react-router';
export default class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {userlist: []};
    }

    componentDidMount() {
        this.getUserList();
    }

    //获取所有的用户列表
    getUserList() {
        var userlist = localStorage.getItem('userlist');
        userlist = userlist ? JSON.parse(userlist) : [];
        this.setState({userlist: userlist});
    }

    render() {
        return <div className="row">
            <div className="col-xs-12">
                <ul className="list-group">
                    {
                        this.state.userlist.map((item, index)=><li key={index} className="list-group-item"><Link
                            to={"/user/detail/"+item.id}>{item.name}</Link></li>)
                    }
                </ul>
            </div>
        </div>
    }
}