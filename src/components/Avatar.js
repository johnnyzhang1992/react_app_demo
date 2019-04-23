import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';
class Avatar extends Component{
    render(){
        return (
            <ErrorBoundary>
                 <img className="Avatar"
                    src={this.props.user.avatarUrl}
                    alt={this.props.user.name}
                />
            </ErrorBoundary>
        );
    };
}

export default Avatar;