import Router from './Router/Router';
import { createGlobalStyle } from 'styled-components';
import Header from './Components/Header';


const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}`


function App() {
  return (
    <div>
      <GlobalStyle/> 
      <Router />

    </div>
  );
}

export default App;
