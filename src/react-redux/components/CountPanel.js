import React, {Component} from 'react';
// import {Button} from 'antd-mobile';
import Counter from './Counter'
class CountPanel extends Component{
    constructor(props){
        super(props);
        this.state = {
            total: 30,
            initValue:[0,10,20] 
        }
        this.computerToltalCount = this.computerToltalCount.bind(this);
    }
    computerToltalCount(newValue, previousValue){
        console.log(newValue,previousValue);
        const valueChange = parseInt(newValue) - parseInt(previousValue);
        this.setState({
            total: this.state.total + parseInt(valueChange)
        })
    }
    render(){
        return (
            <div className="counterPanel">
                <Counter caption="First" initValue={this.state.initValue[0]} onUpdate={this.computerToltalCount}></Counter>
                <Counter caption="Second" initValue={this.state.initValue[1]} onUpdate={this.computerToltalCount}></Counter>
                <Counter caption="Third" initValue={this.state.initValue[2]} onUpdate={this.computerToltalCount}></Counter>
                <p>Total: {this.state.total}</p>
            </div>
        )
    }
}

export default CountPanel;