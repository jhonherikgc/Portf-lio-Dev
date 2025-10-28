import { createTheme, responsiveFontSizes } from "@mui/material";
import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    gradient: {
      dark: string;
    };
    footer: {
      dark: string;
    };
  }
  interface PaletteOptions {
    gradient?: {
      dark?: string;
    };
    footer?: {
      dark?: string;
    };
  }
}

// paleta de cores 
let theme = createTheme({
  palette: {
    primary: {
      main: '#2c2b26',
      
    },
    secondary: {
      main: '#aa7fc2ff',
    },
    background: {
      default: '#2c2b26',
    },
    gradient: {
      dark: 'linear-gradient(to right, #000000, #2F0743);', 
    },
    footer: {
      dark: 'linear-gradient(to right, #000000, #110118ff);',
    },
  },
  typography: {
    fontFamily:"Helvetica Neue",
  }
});

theme = responsiveFontSizes(theme);
export default theme;
