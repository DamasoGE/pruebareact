import React from "react";
import PropTypes from "prop-types";

export default class StateEx extends React.Component {
    constructor(props){
        super(props);
        this.state={
            nombre: 'Damaso',
            edad: '33',
            email: 'damaso@gmail.com'
        };
    }

    static getDerivedStateFromProps(props){
        return {color: props.color}
    }

        render(){
            return (
                <div>
                    <h1> Mi nombre es {this.state.nombre}</h1>
                    <p>Tengo {this.state.edad}</p>
                    <p>Mi email de Contacto es: {this.state.email}</p>
                    <p>Color: {this.state.color}</p>
                </div>
            )
        }
}

StateEx.propTypes = {
    color: PropTypes.string,
};