import React, { Component } from 'react';
import {
    ThemeContext,
    themes
} from './theme-context';
import ThemedButton from './theme-button';
import ThemeTogglerButton from './theme-toggle-button';
// 一个使用到ThemedButton组件的中间组件
function Toolbar(props) {
    return (
        <div>
           <ThemedButton
                onClick={
                    props.changeTheme
                }
            >
            Change Theme 
            </ThemedButton> 
        </div>
    );
}
function Page(props) { 
    const style = {
        marginTop: '20px'
    }
    return (
        <div className="page" style={style}>
            {props.children}
        </div>
    );
}
class ContextDemo1 extends Component {
    constructor(props) {
        super(props);

        this.toggleTheme = () => {
            this.setState(state => ({
                theme: state.theme === themes.dark ?
                    themes.light :
                    themes.dark,
            }));
        };
        // State 包含了 updater 函数 所以它可以传递给底层的 context Provider
        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme,
        };
    }

    render() {
        // ThemedButton 位于 ThemeProvider 内
        // 在外部使用时使用来自 state 里面的 theme
        // 默认 dark theme
        return (
            <Page >
                <ThemeContext.Provider value = {this.state}>
                    <Toolbar changeTheme={this.toggleTheme} /> 
                    <ThemeTogglerButton />
                </ThemeContext.Provider>
            </Page>
        );
    }
}
export default ContextDemo1;