/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {
    ThemeContext
} from './theme-context';

function ThemedButton(props) {
    return (
        <ThemeContext.Consumer>
            {
                ({ theme }) => (
                    <button
                        {...props}
                        style={{ backgroundColor: theme.background,color: theme.foreground }}
                    >theme->background: {theme.background}</button>
                )
            }
        </ThemeContext.Consumer>
    );
}

export default ThemedButton;