import React from 'react';
export default class Comment extends React.Component {
    remove() {
        this.props.removeComment(this.props.id);
    }

    render() {
        return <li className="list-group-item">
            {this.props.author}:{this.props.children}
            <span className="pull-right">{this.props.date}</span>
            <span className="pull-right">
                <span onClick={this.remove.bind(this)} className="glyphicon glyphicon-remove"></span>
            </span>
        </li>
    }
}