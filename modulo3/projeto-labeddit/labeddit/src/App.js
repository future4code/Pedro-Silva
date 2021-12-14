import { ThemeProvider } from "@material-ui/core";
import theme from "./constants/theme";
import Router from "./routes/Router";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  padding: 0;
}
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>

  )

}

export default App;
