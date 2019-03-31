import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
// import { Button } from 'antd-mobile';
import CountPanel from './react-flux/views/CountPanel';
// css put to bottom
import './App.css';
class App extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props){
		super(props);
		this.state= {

		};
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
	// 渲染函数，返回 virtualDOM
	render() {
		return (
			<div className="App">
				<Header logo={logo} />
				<CountPanel></CountPanel>
			</div>
		);
	}
}

export default App;
