import React, {Component} from 'react';
import * as Actions from '../Actions';
import CounterStore from '../stores/CounterStore';

import {Button} from 'antd-mobile';

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: CounterStore.getCounterValues()[props.caption]
        }
        this.onChange = this.onChange.bind(this);
        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState){
        // 传入的 caption 或者 state.count 发生了变化，组件再更新
        return (nextProps.caption !== this.props.caption) || 
        (nextState.count !== this.state.count);
    }

    componentDidMount(){
        CounterStore.addChangeListener(this.onChange)
    }

    componentWillUnmount(){
        CounterStore.removeChangeListener(this.onChange);
    }
    onChange(){
        const newCount = CounterStore.getCounterValues()[this.props.caption];
        this.setState({count: newCount})
    }
    incrementCount(){
        Actions.increment(this.props.caption)
    }

    decrementCount(){
        Actions.decrement(this.props.caption);
    }
    
    render(){
        const {caption} = this.props;
        return(
            <div className="counterItem">
                <p>
                    <Button inline size="large" type="ghost" onClick={this.incrementCount}>+</Button>
                    <Button inline size="large" type="ghost" onClick={this.decrementCount}>-</Button>
                    <span style={{lineHeight: '40px'}}>{caption} count: {this.state.count} </span>
                </p>
            </div>
        )
    }
}

export default Counter;