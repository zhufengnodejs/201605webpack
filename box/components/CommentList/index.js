import React from 'react';
import {Comment} from '../../components';
export default class CommentList extends React.Component{
    render(){
        return <div>
            <ul className="list-group">
                <Comment author="张三" date="10分钟前">今天天气真好</Comment>
                <Comment author="李四" date="1分钟前">是呀</Comment>
            </ul>
        </div>
    }
}