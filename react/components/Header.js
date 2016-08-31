/**
 * es5 定义组件 React.createClass({})
 * es6 class Header extends React.Component
 */
import React from 'react';
export default class Header extends React.Component{
    render() {
        return <div style={{border:'1px solid red'}}>
                 我是头部
               </div>
    }
}