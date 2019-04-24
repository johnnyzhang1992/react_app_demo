// @ts-nocheck
import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
//import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom'
import {BrowserRouter as Router, Route ,NavLink} from 'react-router-dom'
import {WhiteSpace } from 'antd-mobile';

import Todo from './todo/index'
import Email from './components/Email';
import Clock from './components/Clock';
import ContextDemo from './components/context/context-demo1';
import MultipleContext from './components/multiple-context/context-demo';
import MouseTracker from './components/render-props/render-demo'
// css put to bottom
import './App.css';
class App extends Component {

	// 组件更新前调用
	// 在组件接收到一个新的 prop (更新后)时被调用。
	// 这个方法在初始化render时不会被调用。
	componentWillReceiveProps(nextProps, nextState, nextContext){

	}
	// 在组件接收到新的props或者state但还没有render时被调用。
	// 在初始化时不会被调用。
	componentWillUpdate(){

	}
	// 在组件完成更新后立即调用。在初始化时不会被调用。
	componentDidUpdate(){

	}

	// 卸载组件
	componentWillUnmount() {
	}

	// 渲染函数，返回 virtualDOM
	render() {
		return (
			<Router>
				<div className="App">
					<Header logo={logo} />
					<WhiteSpace />
					<div className="link-list clear">
						<NavLink to="/" replace>Home</NavLink>
						<NavLink to={{
							pathname: "/email",
							search: '?email=me@johnny.com'
						}} activeClassName="selected" replace>Email</NavLink>
						<NavLink to="/todo/1" activeClassName="selected" replace>Todo list</NavLink>
						<NavLink to="/context">Context Demo</NavLink>
						<NavLink to="/mul_context" > MultipleContext Demo </NavLink>
						<NavLink to = "/render_props" > Render Props Demo </NavLink>
					</div>
					<WhiteSpace />
					{/* router */}
					<Route exact path="/" component={Clock} />
					<Route path="/email" component={Email} />
					<Route path="/todo/:todoId" component={Todo} />
					<Route path="/context" component={ContextDemo} />
					<Route path="/mul_context" component={MultipleContext}></Route>
					<Route path="/render_props" component={MouseTracker}></Route>
				</div>
			</Router>
		);
	}
}

export default App;
