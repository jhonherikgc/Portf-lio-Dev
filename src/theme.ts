import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: '#0277bd',
      
    },
    secondary: {
      main: '#212121',
    },
  },
  typography: {
    fontFamily:"Helvetica Neue",
  }
});

theme = responsiveFontSizes(theme);
export default theme;