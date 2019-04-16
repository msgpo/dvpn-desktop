import { createMuiTheme } from '@material-ui/core/styles'

const options: any = {
  colors:{
    blackColor: '#000000',
    whiteColor: '#ffffff',
    darkPurple: '#632462',
    actionPurple: '#843a72',
    lightPurple: '#914e80',
    textDarkGrey: '#333333',
    textMain: '#404040',
    textGrey: '#4e4e4e',
    textSecondary: '#666666',
    textLightGrey:'#808080',
    warningRed: '#d93c3c',
    successGreen: '#4cac29',
    borderColor: '#c4c4c4',
    purpleAppBg: 'linear-gradient(to bottom, #9b2463, #312461)',
    purpleMain: 'linear-gradient(to bottom, #7c2463, #552462)',
    greyMain: 'linear-gradient(to bottom, #fefefe, #f2f2f2)',
  },
  typography: {
    useNextVariants: true,
    color: 'rgb(85, 85, 85)',
    // Use the system font instead of the default Roboto font.
    fontSizes: {
      mainTitle: 24,
      subTitle: 20,
      tableContentFont: 16,
      tableHeadFont: 12,
      buttonText: 14,
    },
    fontFamily: [
      '"Open Sans"',
      '"Montserrat"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
}

export default createMuiTheme(options)
