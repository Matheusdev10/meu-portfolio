import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import { About } from './pages/About';
// import { Routes } from './routes';
import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <About />
      {/* <Routes /> */}
    </ThemeProvider>
  </React.StrictMode>
);
