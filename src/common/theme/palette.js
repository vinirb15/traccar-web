import { grey, red, blue } from '@mui/material/colors';

const validatedColor = (color) => (/^#([0-9A-Fa-f]{3}){1,2}$/.test(color) ? color : null);

export default (server, darkMode) => ({
  mode: darkMode ? 'dark' : 'light',
  background: {
    default: darkMode ? grey[900] : grey[50],
  },
  primary: {
    main: validatedColor(server?.attributes?.colorPrimary) || (darkMode ? red[800] : red[900]),
    gradient: 'linear-gradient(90deg, #c62828 0%, #1e1e1e 100%)'
  },
  secondary: {
    main: validatedColor(server?.attributes?.colorSecondary) || (darkMode ? blue[300] : blue[700]),
  },
  neutral: {
    main: grey[500],
  },
  geometry: {
    main: '#d04a3b',
  },
});
