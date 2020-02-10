import React, { Component } from "react";
import Img from 'react-image';
class TrabajoConFormularios extends Component{
    render(){
        return(
            <div>
                <fomr name='formulario1' id='formario1Id' action=''>
                    <fieldset>
                        <legend>Formulario con React</legend>
                        <label for='campotexto1Id'>Nombre: </label>
                        <input type='text' name='campotexto1' id='campotexto1Id' placeholder='Introduce tu nombre'></input>
                        <br/>
                        <label for='campotexto2Id'>Búsqueda: </label>
                        <input type='text' name='campotexto2' id='campotexto2Id' placeholder='Término de búsqueda' className='claseInput1'></input>
                    </fieldset>
                </fomr>
            </div>
        )
    }
}
export default TrabajoConFormularios;