import { createMuiTheme } from 'material-ui/styles';
import { indigo, pink, red } from 'material-ui/colors'

// export const theme = createMuiTheme({
//     palette: {
//         textColor: 'black',
//         primary1Color: "#e84118",
//         // primary2Color: Colors.indigo700,
//         accent1Color: 'orange'
//         // pickerHeaderColor: Colors.darkBlack,
//         // alternateTextColor: Colors.redA200
//       },
//       appBar: {
//         height: 60,
//       },
// })
export const theme = createMuiTheme({
    palette: {
        primary: {
            50: '#fce8e3',
            100: '#f8c6ba',
            200: '#f4a08c',
            300: '#ef7a5d',
            400: '#eb5e3b',
            500: '#e84118',
            600: '#e53b15',
            700: '#e23211',
            800: '#de2a0e',
            900: '#d81c08',
            A100: '#ffffff',
            A200: '#ffd2cf',
            A400: '#ffa29c',
            A700: '#ff8a82',
            'contrastDefaultColor': 'light',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
  });