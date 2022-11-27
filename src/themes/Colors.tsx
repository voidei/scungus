import { createTheme } from '@mui/material/styles';
import * as colours from '@mui/material/colors';

const theme = createTheme({
	palette: {
		primary: {
			main: colours.purple[600],
			dark: colours.purple[900],
		},
	},
});

export default theme;
