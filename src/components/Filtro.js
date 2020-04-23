import React from 'react'

class Filtro extends React.Component{
    state={
        valorInputMinimo: '',
        valorInputMaximo: '',
        valorInputBusca: '',
    }
    render(){
        return(
            <div>
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
            </div>
        )
    }
}
export default Filtro;