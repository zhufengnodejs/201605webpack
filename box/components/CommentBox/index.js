import React from 'react';
import {CommentForm,CommentList} from '../../components';
export default class CommentBox extends React.Component{
    render(){
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
                        <CommentList></CommentList>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        {/*留言表单*/}
                        <CommentForm></CommentForm>
                    </div>
                </div>
            </div>
        </div>
    }
}