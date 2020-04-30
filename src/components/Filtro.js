import React from 'react'
import styled from 'styled-components';
import Produtos from './Produtos';


const CampoDeBusca = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 200px;
    padding: 10px;
    align-items: stretch;
`

class Filtro extends React.Component{
    
    state={
        valorInputMinimo: '',
        valorInputMaximo: '',
        valorInputBusca: '',
    }

    pegaValorMinimo = (event) => {
        this.setState({valorInputMinimo: event.target.value})
    }

    pegaValorMaximo = (event) => {
        this.setState({valorInputMaximo: event.target.value})
    }

    pegaValorBusca = (event) => {
        this.setState({valorInputBusca: event.target.value})
    }
    
    render(){
        
        const produtos = this.props.produtos
        console.log("funcionando", produtos)

        return(
            
            <CampoDeBusca>
                <h3>Filtros:</h3>
                    <div>
                        <label for="valorMinimo">Valor mínimo: </label>
                        <input onChange={this.pegaValorMinimo}/>
                    </div>

                    <div>   
                        <label for="valorMaximo">Valor máximo: </label>
                        <input onChange={this.pegaValorMaximo} />
                    </div>
                    <div>
                        <label>Buscar produto: </label>
                        <input onChange={this.pegaValorBusca} />
                    </div>

            </CampoDeBusca>
        )
    }
}
export default Filtro;