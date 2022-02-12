import { ptBR } from '@mui/x-data-grid';
import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        color: '#D9D9D9',
        navbar: '#334756',
        drawer: '#082032',
        primary: {
            main: '#FF4C29',
            background: '#2C394B',
        },
        secondary: {
            main: '#DC3545',
            background: '#082032',
        },
    },
}, ptBR);

const defaultTheme = createTheme({
    palette: {
        primary: {
            main: '#006EC8',
            navbar: '#006EC8',
            background: '#e3f2fd',
            color: '#373D44',
        },
        secondary: {
            main: '#DC3545',
            background: '#FCFCFC',
            color: '#000',
        },
    },
}, ptBR);

export { darkTheme, defaultTheme };