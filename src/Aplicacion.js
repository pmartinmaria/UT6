import React, { Component } from 'react';
import SelectoresAtributo from './SelectoresAtributo'
import TrabajoConFormularios from './TrabajoConFormularios'
class Aplicacion extends Component {
    render(){
        return(
            <div>
                <h2>Selectores de atributo</h2>
                <SelectoresAtributo/>
                <TrabajoConFormularios/>
            </div>
        )
    }
}
export default Aplicacion;