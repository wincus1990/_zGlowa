import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from 'Theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'Theme/MainTheme';

const MainTemplate = ({ children }) => (
    <div>
        <GlobalStyle />
        <ThemeProvider theme = { theme } >
            { children }
        </ThemeProvider>
    </div>
)

MainTemplate.propTypes = {
    children: PropTypes.element.isRequired,
}

export default MainTemplate;
