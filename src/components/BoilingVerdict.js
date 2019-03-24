import React, { Component } from 'react';

class BoilingVerdict extends Component {
    render(){
        return (
            <div>
                { this.props.celsius >= 100 ? (<p>水会烧开</p>) :  (<p>水不会烧开</p>) }
            </div>
        )
    }
}

export default BoilingVerdict;