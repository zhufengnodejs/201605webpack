import React from 'react';
export default class CommentList extends React.Component{
    render(){
        return <div>
            <ul className="list-group">
                <li className="list-group-item">张三:今天天气真好 2016年9月1日10:16:43</li>
                <li className="list-group-item">李四:是不错 2016年9月1日10:16:58</li>
            </ul>
        </div>
    }
}