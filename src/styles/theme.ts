import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: '#2c2b26',
      
    },
    secondary: {
      main: '#0277bd',
    },
    background: {
      default: '#2c2b26',
    },
  },
  typography: {
    fontFamily:"Helvetica Neue",
  }
});

theme = responsiveFontSizes(theme);
export default theme;
