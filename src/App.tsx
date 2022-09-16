import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Main from './components/main/Main';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';

const darkTheme = createTheme({
  palette: {
    //mode: 'dark',
    info: {
      main: '#444',
    },
    primary: {
      main: "#5F98F5",
    },
    success: {
      main: "#a9e77b",
    }
  },
  mixins: {
    toolbar: {
      height: 48,
      minHeight: 48,
    }
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          top: 48,
        }
      }
    },
  },
});

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <CssBaseline />
          <Main />
        </LocalizationProvider>
        
      </ThemeProvider>
    </div>
  );
};

export default App;
