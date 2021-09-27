import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import './index.css';
import theme from './components/theme/theme';
import { ThemeProvider } from 'styled-components';

ReactDom.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
