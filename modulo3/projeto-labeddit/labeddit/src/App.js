import { ThemeProvider } from "@material-ui/core";
import theme from "./constants/theme";
import Router from "./routes/Router";
import { createGlobalStyle } from "styled-components";
import { useState } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  padding: 0;
}
`

function App() {
  const token = localStorage.getItem('token')
  const [rightButtonText, setRightButtonText] = useState(token ? 'Logout' : 'Login')


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
        <Router setRightButtonText={setRightButtonText} />
      </BrowserRouter>
    </ThemeProvider>

  )

}

export default App;
