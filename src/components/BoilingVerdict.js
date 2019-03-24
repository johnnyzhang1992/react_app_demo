import React, { Component } from 'react';

class BoilingVerdict extends Component {
    // 可以在你确认不需要更新组件时使用。
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.celsius === nextProps.celsius ? false : true;
    }

    render(){
        return (
            <div>
                {this.props.celsius >= 100 ? (
                    <p>水会烧开</p>
                ) :  (
                    <p>水不会烧开</p>
                )}
            </div>
        )
    }
}

export default BoilingVerdict;