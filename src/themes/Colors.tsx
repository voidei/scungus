import * as colours from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      dark: colours.purple[900],
      main: colours.purple[600],
    },
  },
});

export default theme;
