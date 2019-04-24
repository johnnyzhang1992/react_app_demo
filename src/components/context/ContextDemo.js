import React, { Component } from 'react';

// 创建一个 theme Context,  默认 theme 的值为 light
const {
    Provider,
    Consumer
} = React.createContext('light');

function ThemedButton(props) {
    // ThemedButton 组件从 context 接收 theme

    return (
        <Consumer >
            {theme => <button {...props} theme={theme}>theme: {theme}</button>} 
        </Consumer>
        );
}
// 中间组件
function Toolbar(props) {
    return (
         <div >
            <ThemedButton />
        </div>
    );
}

class ContextDemo extends Component {
    render() {
        return (
            <Provider value = "dark" >
                <Toolbar />
            </Provider>
        );
    }
}  
    
export default ContextDemo;