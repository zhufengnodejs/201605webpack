import React from 'react';
export default class CommentForm extends React.Component{
    render(){
        return <div>
            <form  className="form-horizontal">
                <div className="form-group">
                    <label htmlFor="username">姓名</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="content">留言</label>
                    <textarea name="content" id="content" cols="30" rows="10" className="form-control"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">发表</button>
            </form>
        </div>
    }
}