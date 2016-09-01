import React from 'react';
require('moment/locale/zh-cn.js');
var moment = require('moment');
//moment().fromNow()
export default class Comment extends React.Component {
    remove() {
        this.props.removeComment(this.props.id);
    }

    render() {
        return <li className="list-group-item">
            {this.props.author}:{this.props.children}
            <span className="pull-right">{moment(this.props.date).fromNow()}</span>
            <span className="pull-right">
                <span onClick={this.remove.bind(this)} className="glyphicon glyphicon-remove"></span>
            </span>
        </li>
    }
}