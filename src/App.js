// @ts-nocheck
import React, { Component } from "react";
//import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom'
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
} from "react-router-dom";
import { WhiteSpace } from "antd-mobile";
import { Layout, Menu, Breadcrumb, Icon } from "antd";

import AsyncComponent from "./components/AsyncComponent";
// import logo from "./logo.svg";
// import Header from './components/Header';
// import Todo from './todo/index'
// import Email from './components/Email';
// import Clock from './components/Clock';
// import ContextDemo from './components/context/context-demo1';
// import MultipleContext from './components/multiple-context/context-demo';
// import MouseTracker from './components/render-props/render-demo'
// css put to bottom
import "./App.css";

// const AsyncHeader = AsyncComponent(() => import("./components/Header"));
const AsyncTodo = AsyncComponent(() => import("./todo/index"));
const AsyncEmail = AsyncComponent(() => import("./components/Email"));
const AsyncClock = AsyncComponent(() => import("./components/Clock"));
const AsyncEcharts = AsyncComponent(() => import("./echarts"));
const AsyncAntDemo = AsyncComponent(() => import("./antd"));
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			location: {}
		}
	}
	
	componentDidMount() { 
		
	}
    // 组件更新前调用
    // 在组件接收到一个新的 prop (更新后)时被调用。
    // 这个方法在初始化render时不会被调用。
    componentWillReceiveProps(nextProps, nextState, nextContext) {}
    // 在组件接收到新的props或者state但还没有render时被调用。
    // 在初始化时不会被调用。
    componentWillUpdate() {}
    // 在组件完成更新后立即调用。在初始化时不会被调用。
    componentDidUpdate() {}

    // 卸载组件
    componentWillUnmount() {}

    // 渲染函数，返回 virtualDOM
    render() {
        return (
            <Router>
                <Layout>
                    <Header className="header">
						<div className="logo" >React App</div>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={["2"]}
                            style={{ lineHeight: "64px" }}
                        >
                            <Menu.Item key="1">
                                <NavLink to="/" replace>
                                    Home
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <NavLink
                                    to={{
                                        pathname: "/email",
                                        search: "?email=me@johnny.com"
                                    }}
                                    activeClassName="selected"
                                    replace
                                >
                                    Email
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <NavLink
                                    to="/todo"
                                    activeClassName="selected"
                                    replace
                                >
                                    Todo list
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <NavLink to="/echarts"> Echarts</NavLink>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <NavLink to="/antd"> AntD Demo</NavLink>
                            </Menu.Item>
                        </Menu>
                    </Header>
                    <Layout>
                        <Sider width={200} style={{ background: "#fff" }}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={["1"]}
                                defaultOpenKeys={["sub1"]}
                                style={{ height: "100%", borderRight: 0 }}
                            >
                                <SubMenu
                                    key="sub1"
                                    title={
                                        <span>
                                            <Icon type="user" />
                                            subnav 1
                                        </span>
                                    }
                                >
                                    <Menu.Item key="1">option1</Menu.Item>
                                    <Menu.Item key="2">option2</Menu.Item>
                                    <Menu.Item key="3">option3</Menu.Item>
                                    <Menu.Item key="4">option4</Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="sub2"
                                    title={
                                        <span>
                                            <Icon type="laptop" />
                                            subnav 2
                                        </span>
                                    }
                                >
                                    <Menu.Item key="5">option5</Menu.Item>
                                    <Menu.Item key="6">option6</Menu.Item>
                                    <Menu.Item key="7">option7</Menu.Item>
                                    <Menu.Item key="8">option8</Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="sub3"
                                    title={
                                        <span>
                                            <Icon type="notification" />
                                            subnav 3
                                        </span>
                                    }
                                >
                                    <Menu.Item key="9">option9</Menu.Item>
                                    <Menu.Item key="10">option10</Menu.Item>
                                    <Menu.Item key="11">option11</Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: "0 24px 24px" }}>
                            <Breadcrumb style={{ margin: "16px 0" }}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content
                                style={{
                                    background: "#fff",
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 480
                                }}
                            >
                                <div className="App">
                                    {/* <AsyncHeader logo={logo} /> */}
                                    <WhiteSpace />
                                    {/* router */}
                                    <Switch>
                                        <Route
                                            exact
                                            path="/"
                                            component={AsyncClock}
                                        />
                                        <Route
                                            path="/email"
                                            component={AsyncEmail}
                                        />
                                        <Route
                                            exact
                                            path="/todo"
                                            component={AsyncTodo}
                                        />
                                        {/* <Route path="/context" component={ContextDemo} />
						<Route path="/render_props" component={MouseTracker}></Route> */}
                                        <Route
                                            exact
                                            path="/echarts"
                                            component={AsyncEcharts}
                                        />
                                        <Route
                                            exact
                                            path="/antd"
                                            component={AsyncAntDemo}
                                        />
                                    </Switch>
                                </div>
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}

export default App;
