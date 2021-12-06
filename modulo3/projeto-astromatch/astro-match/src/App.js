import styled from "styled-components";
import { useState } from "react";
import ChooseHome from "./Components/ChooseHome";
import Matches from "./Components/Matches";
import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`

const ContainerPage = styled.div`
display: flex;
justify-content: center;
margin-top: 200px;
`

function App() {
  const [page, setPage] = useState('choose')


  const changePage = () => {
    if (page === 'choose') {
    return <ChooseHome
    matchPage={pageMatch}
    />

    } else if (page === 'matches') {
      return <Matches
      choosePage={pageChoose}
      />
    }
  } 

  const pageMatch = () => {
    setPage('matches')
  }

  const pageChoose = () => {
    setPage('choose')
  }
  

  return (
    <ContainerPage>
      <Globalstyle/>
    {changePage()}
    </ContainerPage>
  );
}

export default App;
