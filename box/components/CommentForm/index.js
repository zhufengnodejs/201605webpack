import React from 'react';
export default class CommentForm extends React.Component{
    handleSubmit(event){
        event.preventDefault();//取消默认事件
        var author = this.refs.author.value;//得到作者的文本框的值
        var content = this.refs.content.value;//得到内容的文本框的值
        //因为涉及修改父组件的状态，所以需要父组件来处理
        this.props.addComment({author,content});
        this.refs.author.value = '';
        this.refs.content.value = '';
    }

    render(){
        return <div>
            <form onSubmit={this.handleSubmit.bind(this)}   className="form-horizontal">
                <div className="form-group">
                    <label htmlFor="useauthorrname">姓名</label>
                    <input ref="author" type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="content">留言</label>
                    <textarea ref="content" name="content" id="content" cols="30" rows="10" className="form-control"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">发表</button>
            </form>
        </div>
    }
}