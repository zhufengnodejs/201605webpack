import React from 'react';
import ReactDOM from 'react-dom';
require('bootstrap/dist/css/bootstrap.css');
import {CommentBox} from './components';
ReactDOM.render(
    <CommentBox/>,
    document.querySelector('#app')
);