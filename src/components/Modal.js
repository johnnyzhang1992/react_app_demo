import React, { Component } from 'react';
import ReactDom from 'react-dom';

class Modal extends Component { 
    constructor(props) { 
        super(props);
        // 网页根节点下创建一个 div 节点
        this.container = document.createElement('div');
        document.body.appendChild(this.container);
    }

    componentWillUnmount() { 
        document.body.removeChild(this.container);
    }

    render() { 
        return ReactDom.createPortal(
        <div className='modal'>
                <span className='close' onClick={this.props.onClose}>Close</span>
                <div className='content'>
                    {this.props.children}
                </div>
        </div>,
        this.container)
    }
}
export default Modal;