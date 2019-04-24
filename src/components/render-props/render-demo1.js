// @ts-nocheck
import React from 'react';
import logo from '../../logo.svg';
class Cat extends React.Component {
    render() {
      const mouse = this.props.mouse;
      return (
        <img src={logo} alt="" style={{ width: '100px',position: 'absolute', left: mouse.x, top: mouse.y }} />
      );
    }
  }
  
  class Mouse extends React.Component {
    constructor(props) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { x: 0, y: 0 };
    }
  
    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }
  
    render() {
      return (
        <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
  
          {/*
            Instead of providing a static representation of what <Mouse> renders,
            use the `render` prop to dynamically determine what to render.
          */}
          {this.props.render(this.state)}
        </div>
      );
    }
  }
// 我们提供了一个 render prop 以让 <Mouse> 能够动态决定什么需要渲染，
// 而不是克隆 < Mouse > 组件并硬编码来解决特定的用例。

// render prop 是一个组件用来了解要渲染什么内容的函数 prop。

class MouseTracker extends React.Component {
    constructor(props) {
        super(props);
        this.renderTheCat = this.renderTheCat.bind(this)
    }
    renderTheCat(mouse) { 
        return <Cat mouse={mouse} />
    }
    render() {
      return (
        <div>
          <h1>Move the mouse around!</h1>
              <Mouse render={this.renderTheCat}/>
        </div>
      );
    }
  }

export default MouseTracker;