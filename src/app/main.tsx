import React from 'react';
import ReactDOM from 'react-dom/client';
import { Container } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import CssBaseline from '@mui/material/CssBaseline';
import router from 'app/router';
import 'react-toastify/dist/ReactToastify.css';
import './styles/global.sass';
import { ThemeProvider } from 'widgets';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider>
    <CssBaseline enableColorScheme />
    <Container maxWidth="lg">
      <RouterProvider router={router} />
    </Container>
    <ToastContainer />
  </ThemeProvider>,
);
