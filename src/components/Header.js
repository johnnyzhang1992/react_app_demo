/**
 * Created by PhpStorm.
 * Author: johnnyzhang
 * Date: 2019-03-30 19:16
 */
import React,{Component} from 'react';

class Header extends Component{
    render(){
        return (
            <header className="App-header">
                <img src={this.props.logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
            </header>
        )
    }
}
export default Header;