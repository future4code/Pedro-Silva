import { createTheme } from "@material-ui/core/styles";
import { neutralColor, primaryColor, inputColor, textColor } from "./colors";

const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: 'white'
        },
        secondary: {
            main: neutralColor
        },
        text:{
            primary: inputColor
        },
        error: {
            main: textColor
        }
    }
})

export default theme