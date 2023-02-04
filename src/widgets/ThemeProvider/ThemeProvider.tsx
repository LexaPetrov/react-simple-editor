import { ThemeProvider as Provider, createTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { ThemeSwitch } from 'shared/ui';

const components = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        scrollbarColor: 'white lightgrey',
        '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
          backgroundColor: 'white',
        },
        '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
          borderRadius: 8,
          backgroundColor: 'lightgrey',
          minHeight: 24,
        },
        '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
          backgroundColor: 'lightgrey',
        },
        '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
          backgroundColor: 'lightgrey',
        },
        '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
          backgroundColor: 'lightgrey',
        },
        '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
          backgroundColor: 'lightgrey',
        },
      },
    },
  },
};

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
  components,
});

type ThemeProviderProps = {
  children: React.ReactElement[];
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const theme = localStorage.getItem('theme') || 'dark';
  const [mode, setMode] = useState(theme);

  const selectedTheme = mode === 'dark' ? darkTheme : lightTheme;

  useEffect(() => {
    localStorage.setItem('theme', mode);
  }, [mode]);

  return (
    <Provider theme={selectedTheme}>
      <ThemeSwitch
        sx={{ position: 'fixed', bottom: 5 }}
        onChange={() => setMode(mode === 'light' ? 'dark' : 'light')}
      />
      {children}
    </Provider>
  );
};
