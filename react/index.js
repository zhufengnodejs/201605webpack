import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Body from './components/Body';
//把这个H1标签插入到APP的DIV内部
ReactDOM.render(
    <div>
        <Header></Header>
        <Body></Body>
    </div>,
    document.querySelector('#app')
);