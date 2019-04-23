import React, { Component } from 'react';
import Modal from './Modal';
class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            showModal: false
        }
    }
    showModal = () => { 
        this.setState({
            showModal: true
        })
    }
    closeModal = () => { 
        console.log('click');
        this.setState({
            showModal: false
        })
    }
    // 生命周期钩子。
    // 当组件输出到 DOM 后会执行 componentDidMount() 钩子
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
          );
    }
    // update state
    // this.setState((prevState, props) => ({
    //     counter: prevState.counter + props.increment
    // }));
    // uodate colck date
    tick() {
        this.setState({
          date: new Date()
        });
      }
    componentWillUnmount() {
        // interval 回收
        clearInterval(this.timerID);
    }
    render(){
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <p><button onClick={this.showModal}>showModal</button></p>
                {this.state.showModal && (
                    <Modal onClose={this.closeModal}>Modal Dialog</Modal>
                )}
            </div>
        );
    }
}
export default Clock;