import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator';
// import { Button } from 'antd-mobile';
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
	this.state = {
		liked: false,
		counter: 0,
		showWarning: true
	}
	this.handleToggleClick = this.handleToggleClick.bind(this);
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
	render() {
		// let style= {
		// 	lineHeight: '30px'
		// }
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
		<Calculator></Calculator>
		</div>
	);
	}
}

export default App;
