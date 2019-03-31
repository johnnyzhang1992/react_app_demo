import React, {Component} from 'react';
// import {Button} from 'antd-mobile';
import Counter from './Counter'
import Summary from './Summary'
class CountPanel extends Component{

    render(){
        return (
            <div className="counterPanel">
                <Counter caption="First"></Counter>
                <Counter caption="Second"></Counter>
                <Counter caption="Third"></Counter>
               <hr/>
               <Summary />
            </div>
        )
    }
}

export default CountPanel;