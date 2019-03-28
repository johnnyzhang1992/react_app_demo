/**
 * Created by PhpStorm.
 * Author: johnnyzhang
 * Date: 2019-03-25 17:13
 */
// 子组件向父组件传值

// 方法：父组件将改变state的函数名传给子组件，该函数检测子组件内容变化
// ref set on parent Component
import React,{Component} from 'react';
import {Button} from 'antd-mobile';
class Child extends Component{
    render(){
        return (
            <div>
                请输入邮箱：<input ref={this.props.inputRef} value={this.props.email} onChange={this.props.handleEmail}/>
                <p> <Button inline size="small" type="primary" onClick={this.props.inputFocus}>Input Focus</Button></p>
            </div>
        )
    }
}

export default class Email extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: 'me@johnny.cn'
        };
        // ref
        this.textInput = null;
        this.inputFocus = this.inputFocus.bind(this);
    }
    inputFocus(){
        console.log(this.textInput.value);
        this.textInput.focus();
    }

    handleEmail(e){
        this.setState({
            email: e.target.value
        })
    }
    render(){
        let style = {
            margin: '5vh 0'
        };
        return (
            <div style={style}>
                <div>用户邮箱：{this.state.email}</div>
                <Child inputRef={el=>{this.textInput = el}} inputFocus={this.inputFocus} name="email" email={this.state.email} handleEmail={this.handleEmail.bind(this)}/>
            </div>
        )
    }
}