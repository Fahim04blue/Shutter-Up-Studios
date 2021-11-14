import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5f031d'
    },
  },
  typography: {
    fontFamily: [
      'Nunito Sans',
      'sans-serif',
    ].join(','),
  },
});

export default theme;
