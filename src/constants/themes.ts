import { createTheme } from '@mui/material/styles';
/*
export const theme = createTheme({
    typography: {
        "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
        h1: {
            color: '#fff',
        },
        h6: {
            color: '#000000',
        },
        body1: {

            color: '#000000',
        },
    },
});

*/
import { green, grey, red } from '@mui/material/colors';

const rawTheme = createTheme({
    palette: {
        primary: {
            light: '#12B0E8',
            main: '#207398',
            dark: '#03203C',
        },
        error: {
            light: red[50],
            main: red[500],
            dark: red[700],
        },
        success: {
            light: green[50],
            main: green[500],
            dark: green[700],
        },
        background: {
            default: '#282c34',
        },
        text: {
            primary: '#fff',
            secondary: '#000000',
        },
    },
    typography: {
        fontFamily: "'Work Sans', sans-serif",
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 700,
    },
});

const fontHeader = {
    color: rawTheme.palette.text.primary,
    fontWeight: rawTheme.typography.fontWeightMedium,
    fontFamily: "'Roboto Condensed', sans-serif",
    textTransform: 'uppercase',

};

const theme = {
    ...rawTheme,
    palette: {
        ...rawTheme.palette,
    },
    typography: {
        ...rawTheme.typography,
        fontHeader,
        h1: {
            ...rawTheme.typography.h1,
            ...fontHeader,
            letterSpacing: 0,
            fontSize: 60,
        },
        h2: {
            ...rawTheme.typography.h2,
            ...fontHeader,
            fontSize: 48,
        },
        h3: {
            ...rawTheme.typography.h3,
            ...fontHeader,
            fontSize: 42,
        },
        h4: {
            ...rawTheme.typography.h4,
            ...fontHeader,
            fontSize: 28,
        },
        h5: {
            ...rawTheme.typography.h5,
            fontSize: 20,
        },
        h6: {
            ...rawTheme.typography.h6,
            ...fontHeader,
            fontSize: 18,
        },
        subtitle1: {
            ...rawTheme.typography.subtitle1,
            fontSize: 18,
        },
        body1: {
            ...rawTheme.typography.body2,
            fontWeight: rawTheme.typography.fontWeightRegular,
            fontSize: 16,
        },
        body2: {
            ...rawTheme.typography.body1,
            fontSize: 14,
        },
    },
};

export default theme;