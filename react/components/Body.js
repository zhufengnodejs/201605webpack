/**
 * es5 定义组件 React.createClass({})
 * es6 class Header extends React.Component
 */
import React from 'react';
export default class Body extends React.Component{
    render() {
        return <div style={{border:'1px solid blue'}}>
            <form action="">
                用户名<input type="text"/><br/>
                密码<input type="text"/>
            </form>
        </div>
    }
}