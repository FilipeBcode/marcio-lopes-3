import React from 'react';
import { createRoot } from 'react-dom/client';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import App from './App.jsx';
import './styles.css';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#ee322b' },
    secondary: { main: '#0b355a' },
    background: { default: '#061d38', paper: '#0a2b48' },
  },
  typography: {
    fontFamily: '"DM Sans", "Arial", sans-serif',
    button: { fontWeight: 700, textTransform: 'none' },
  },
  shape: { borderRadius: 14 },
});

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
