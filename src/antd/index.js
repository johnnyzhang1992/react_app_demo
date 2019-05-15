import React, { Component } from 'react'

import { DatePicker } from 'antd';

export default class AntDemo extends Component { 
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() { 
        return (
            <div>
                <DatePicker />
            </div>
        )
    }
    
}