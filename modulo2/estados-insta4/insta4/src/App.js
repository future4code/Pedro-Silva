import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'usuário123'}
          fotoUsuario={'https://picsum.photos/id/1060/536/354?blur=2'}
          fotoPost={'https://picsum.photos/seed/picsum/536/354'}
        />
        
        <Post
          nomeUsuario={'usuário321'}
          fotoUsuario={'https://picsum.photos/536/354'}
          fotoPost={'https://picsum.photos/id/870/536/354?grayscale&blur=2'}
        />
      </MainContainer>
    );
  }
}

export default App;
