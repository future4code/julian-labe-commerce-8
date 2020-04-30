import React from 'react';
import Filtro from './components/Filtro';
import Produtos from './components/Produtos';
import styled from 'styled-components';

const Principal = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`

const FiltroContainer = styled.div`
  width: 20%;
  border: 1px solid black;
`
const ProdutosContainer = styled.div`
  width: 80%;
`


class App extends React.Component {
  render() {

    return (
      <Principal>

        <FiltroContainer>
        <Filtro/>
        </FiltroContainer>

        <ProdutosContainer>
        <Produtos/>
        </ProdutosContainer>
  
      </Principal>
    );
  
  }


}

export default App;
