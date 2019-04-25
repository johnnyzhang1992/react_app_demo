/**
 * Created by PhpStorm.
 * Author: johnnyzhang
 * Date: 2019-03-25 17:13
 */
// 子组件向父组件传值

// 方法：父组件将改变state的函数名传给子组件，该函数检测子组件内容变化
// ref set on parent Component
import React, { Component } from 'react';
import {Route , Link} from 'react-router-dom'
import {Button} from 'antd-mobile';
import getUrlParam from '../untils/until'
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

class Email extends Component{
    constructor(props){
    super(props);
        const { location,match } =  props;
        // props => location,match,history
        this.match = match;
        this.state = {
            email: getUrlParam(location)['email'] ? getUrlParam(location)['email'] : 'me@johnny.cn'
        };
        // ref 可以添加到子组件上
        this.textInput = React.createRef();
        this.inputFocus = this.inputFocus.bind(this);
}
    
    inputFocus(){
        console.log(this.textInput.current.value);
        this.textInput.current.focus();
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
                <Route exact path='/email' render={(props) => (
                    <div>
                        <div>用户邮箱：{this.state.email}</div>
                        <button><Link to="/email/create" >Create Email</Link></button>
                    </div>
                )}>
                </Route>
                {/* create */}
                <Route path={`${this.match.url}/:id`} render={(props) => (
                     <Child inputRef={this.textInput} inputFocus={this.inputFocus} name="email" email={this.state.email} handleEmail={this.handleEmail.bind(this)}/>
                )}></Route>
              
            </div>
        )
    }
}

export default Email;