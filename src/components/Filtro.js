import React from 'react'

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
    
    render(){
        
        return(
            
            <CampoDeBusca>
                <h3>Filtros:</h3>
                    <div>
                        <label for="valorMinimo">Valor mínimo: </label>
                        <input type="number" name="valorMinimo"/>
                    </div>
                   
                    <div>   
                        <label for="valorMaximo">Valor máximo: </label>
                        <input type="number" name="valorMaximo"/>
                    </div>
                    
                    <div>
                        <label>Buscar produto: </label>
                        <input type="text" name="busca"/>
                    </div>

            </CampoDeBusca>
        )
    }

}

export default Filtro;