import React from 'react';
import Filtro from './components/Filtro'
import Produtos from './components/Produtos'


class App extends React.Component {
  render() {

    return (
      <div>
        <Filtro/>
        <Produtos/>
  
      </div>
    );
  
  }


}

export default App;
