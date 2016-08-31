import React from 'react';
import ReactDOM from 'react-dom';
require('bootstrap/dist/css/bootstrap.css');
import CommentBox from './components/CommentBox';
ReactDOM.render(
    <CommentBox/>,
    document.querySelector('#app')
);