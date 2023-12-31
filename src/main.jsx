import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import { Home } from './pages/Home';
// import { Routes } from './routes';
import theme from './styles/theme';
import { register } from 'swiper/element/bundle';
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
      {/* <Routes /> */}
    </ThemeProvider>
  </React.StrictMode>
);
