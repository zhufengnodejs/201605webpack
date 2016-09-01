import React from 'react';
import {CommentForm,CommentList} from '../../components';
import $ from 'jquery';
export default class CommentBox extends React.Component {
    //构造函数,当组件被实例化执行第一个函数
    constructor(props) {
        super(props);//一定要先调用父类的初始化函数 不然会报错
        //先初始化状态对象
        this.state = {comments: []};
        this.init();
    }

    init() {
        var url = this.props.url;
        $.ajax({
            url: url,
            method: 'GET',
            dataType:'json',//强行把返回的内容转成json
            context: this,//成功或失败的回调中的this指针对象
            success: function (data) {
                //当数据取回来之后把data传给comments状态
                this.setState({comments: data})
            }
        })
    }
    //增加新的留言
    addComment(comment){
        var url = this.props.url;
        $.ajax({
            url: url,
            method: 'POST',
            data:comment,//把新的留言作为data属性，放在请求体里传到后台
            dataType:'json',//强行把返回的内容转成json
            context: this,//成功或失败的回调中的this指针对象
            success: function (data) {
                //当数据取回来之后把data传给comments状态
                this.setState({comments: data})
            }
        })
    }

    render() {
        return <div className="row">
            <div className="col-xs-12">
                <div className="row">
                    <div className="page-header col-xs-12">
                        珠峰留言版
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        {/*留言列表*/}
                        <CommentList data={this.state.comments}></CommentList>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        {/*留言表单*/}
                        <CommentForm addComment={this.addComment.bind(this)}></CommentForm>
                    </div>
                </div>
            </div>
        </div>
    }
}