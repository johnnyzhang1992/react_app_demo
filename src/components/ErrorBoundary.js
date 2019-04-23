import React, { Component } from 'react';

// 错误边界
class ErrorBoundary extends Component { 
    constructor(props) { 
        super(props);
        this.state = {
            hasError: false
        }
    }
    // 组件内错误捕获
    componentDidCatch(error, info) {
        // 显示错误 UI
        this.setState({
            hasError: true
        })
    	console.log(error, info);
    }

    render() { 
        if (this.state.hasError) {
            return <h1>Oops, something went wrong!</h1>;
        } 
        return this.props.children;
    }
}
export default ErrorBoundary;