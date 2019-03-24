import React, { Component } from 'react';

class Avatar extends Component{
    render(){
        return (
            <img className="Avatar"
            src={this.props.user.avatarUrl}
            alt={this.props.user.name}
          />
        );
    };
}

export default Avatar;