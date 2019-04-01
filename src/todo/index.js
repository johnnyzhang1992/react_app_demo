import React,{Component} from 'react';
// import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import TodoApp from './TodoApp';

import store from './Store.js';

class Todo extends Component{
    render(){
        return (
            <Provider store={store}>
                <h1>Todo list Demo</h1>
                <TodoApp />
            </Provider>
        )
    }
}
export default Todo;