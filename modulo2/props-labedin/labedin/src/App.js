import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import foto from './img/foto.jpg';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

const ContainerGeral = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 30px;
`
const SectionContainer = styled.section`
width: 40vw;
margin: 10px 0;
`
const TitulosDiv = styled.h2`
text-align: center;
margin-bottom: 20px;
`



function App() {
  return (
    <div>
      <GlobalStyle/>
    <ContainerGeral>
      <SectionContainer>
        <TitulosDiv>Dados pessoais</TitulosDiv>
        <CardGrande 
          imagem={foto} 
          nome="Pedro Henrique Duarte da Silva" 
          descricao="Me chamo Pedro Henrique, sou estudante de Desenvolvimento Web fullstack na Labenu e também sou graduando em História, bacharel e licenciatura."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno
          imagem="https://cdn-icons.flaticon.com/png/512/3178/premium/3178158.png?token=exp=1635974555~hmac=8b0173c45d2f79f59fd906214b690d65"
          emailNome="Email:"
          email="ph09duarte@gmail.com"
          imagemDois="https://cdn-icons-png.flaticon.com/512/535/535188.png"
          enderecoNome="Endereço:"
          endereco="Rua Z, número Y"
        />      
      </SectionContainer>

      <SectionContainer>
        <TitulosDiv>Experiências profissionais</TitulosDiv>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://i.pinimg.com/originals/9c/b2/86/9cb2863a009b49fcc03161032e9e5baf.png" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </SectionContainer>

      <SectionContainer>
        <TitulosDiv>Minhas redes sociais</TitulosDiv>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </SectionContainer>
    </ContainerGeral>
    </div>
  );
}

export default App;
