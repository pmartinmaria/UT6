import React, { Component } from "react";
import Img from 'react-image';

class SelectoresAtributo extends Component {
    render() {
        return (
            <div>
                <a href='https://www.google.es' target='_blank'>Enlace a Google que cumple un selector de atributo</a>
                <br></br>
                <a href='https://www.bing.es' target='_self'>
                    Enlace a Bing que cumple un selector de atributo con valor _self en el atributo target</a>
                <br></br>
                <Img alt='K2' src={require('./img/k2.jpg')}/>
                <br></br>
                <p className='claseparrafo-1'>Este párrafo va a cumplir un selector de atributos para elementos
                con el atributo class y cuyo valor comience por claseparrafo</p>
                <p className='claseselector1'>Este párrafo va a cumplir un selector de atributos para elementos
                con el atributo class y cuyo valor comience por claseselector y este seguida por cualquier
                conjunto de caracteres</p>
            </div>
        )
    }
}
export default SelectoresAtributo;