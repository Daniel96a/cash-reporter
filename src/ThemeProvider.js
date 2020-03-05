import React, { useEffect, useState } from 'react'
import { ThemeProvider, useMediaQuery } from "@material-ui/core";
import { darkTheme, lightTheme } from "./theme/theme";
import { connect } from 'react-redux';
import { chooseTheme } from './redux/actions/theme';

function CustomThemeProvider(props) {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [theme, setTheme] = useState(darkTheme)
    useEffect(() => {
        if (localStorage.theme === undefined) {
            if (prefersDarkMode) {
                setTheme(darkTheme)
                props.chooseTheme({ isDark: true, themeNumber: 1, themeDisabled: props.currentTheme.themeDisabled })
            } else {
                setTheme(lightTheme)
                props.chooseTheme({ isDark: false, themeNumber: 0, themeDisabled: props.currentTheme.themeDisabled })
            }
        }
        if (localStorage.theme === 'dark') {
            setTheme(darkTheme)
            props.chooseTheme({ isDark: true, themeNumber: 1, themeDisabled: props.currentTheme.themeDisabled })
        } if (localStorage.theme === 'light') {
            setTheme(lightTheme)
            props.chooseTheme({ isDark: false, themeNumber: 0, themeDisabled: props.currentTheme.themeDisabled })
        }
        // eslint-disable-next-line
    }, [prefersDarkMode, props.currentTheme.isDark, props.currentTheme.themeNumber, props.currentTheme.themeDisabled]);

    document.body.style.backgroundColor = theme.palette.background.default;

    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>)
}

const mapStateToProps = state => ({
    currentTheme: state.theme,
});

export default connect(mapStateToProps, { chooseTheme })(CustomThemeProvider);
