import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: '#0277bd',
      
    },
    secondary: {
      main: '#2c2b26',
    },
  },
  typography: {
    fontFamily:"Helvetica Neue",
  }
});

theme = responsiveFontSizes(theme);
export default theme;