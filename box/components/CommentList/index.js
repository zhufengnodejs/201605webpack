import React from 'react';
import {Comment} from '../../components';
export default class CommentList extends React.Component{
    render(){
        return <div>
            <ul className="list-group">
                {
                    this.props.data.map((item,index)=><Comment author={item.author} date={item.date} key={index}>{item.content}</Comment>)
                }
            </ul>
        </div>
    }
}