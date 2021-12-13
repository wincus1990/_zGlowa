import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from 'Theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'Theme/MainTheme';
import { Provider } from 'react-redux';
import { store } from '../../store/index';

const MainTemplate = ({ children }) => (
    <div>
        <Provider store = {store}>
            <GlobalStyle />
            <ThemeProvider theme = { theme } >
                { children }
            </ThemeProvider>
        </Provider>
    </div>
)

MainTemplate.propTypes = {
    children: PropTypes.element.isRequired,
}

export default MainTemplate;
