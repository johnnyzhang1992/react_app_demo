import React, {Component} from 'react';
import {Button} from 'antd-mobile';
class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: props.initValue ? props.initValue : 0
        }
        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);
    }
    incrementCount(){
        this.updateCount(true);
    }
    decrementCount(){
        this.updateCount(false);
    }
    updateCount(isIncrement){
        const previousValue = this.state.count;
        const newValue = isIncrement ? this.state.count+1 : this.state.count-1;
        this.setState({
            count: newValue
        })
        this.props.onUpdate(newValue,previousValue)
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