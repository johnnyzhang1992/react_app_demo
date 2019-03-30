import React, { Component } from 'react';
import UserInfo from './userinfo';

// const comment1 = {
// 	date: new Date(),
// 	text: 'I hope you enjoy learning React!',
// 	author: {
// 		name: 'Hello Kitty',
// 		avatarUrl: 'http://placekitten.com/g/64/64'
// 	}
// 	};
  function formatDate(date) {
    return date.toLocaleDateString();
  }

  class Comment extends Component{

      render(){
          return (
            <div className="Comment">
            <UserInfo user={this.props.author}></UserInfo>
            <div className="Comment-text">
              {this.props.text}
            </div>
            <div className="Comment-date">
              {formatDate(this.props.date)}
            </div>
          </div>
          );
      };
  }

  export default Comment;