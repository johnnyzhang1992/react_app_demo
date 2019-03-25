import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator';
import { Button } from 'antd-mobile';
import Email from './components/Email'
// import Comment from './components/comment'
// import Clock from './components/Clock'
// import TodoList from './components/TodoList'
// import From from './components/Form'

// const comment1 = {
// 	date: new Date(),
// 	text: 'I hope you enjoy learning React!',
// 	author: {
// 		name: 'Hello Kitty',
// 		avatarUrl: 'http://placekitten.com/g/64/64'
// 	}
// 	};
// 	function WarningBanner(props) {
// 	if (!props.warn) {
// 		return null;
// 	}
	
// 	return (
// 		<div className="warning">
// 		Warning!
// 		</div>
// 	);
// 	}
	
class App extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props){
		super(props);
		this.state= {
			liked: false,
			counter: 0,
			showWarning: true
		};
		this.handleToggleClick = this.handleToggleClick.bind(this);
		this.updateLikeState = this.updateLikeState.bind(this);
	}

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

	handleToggleClick() {
		this.setState(prevState => ({
			showWarning: !prevState.showWarning
		}));
	}
	updateLikeState(e){
		this.setState((prevState)=>({
			liked: !prevState.liked,
			counter: prevState.counter+1
		}));
		console.log(`state: ${this.state.liked},counter ${this.state.counter}`)
	}
	// 渲染函数，返回 virtualDOM
	render() {
		let style= {
			lineHeight: '30px'
		};
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
				{/*like state*/}
				<p style={style}>Like sate {this.state.liked ? 'Liked' : 'UnLiked'}</p>
				<p><Button inline size="small" type="primary" onClick={this.updateLikeState}>Change like State</Button></p>
				{/*温度器*/}
				<Calculator></Calculator>
				<Email/>
			</div>
		);
	}
}

export default App;
