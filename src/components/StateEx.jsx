import React from "react";
import PropTypes from "prop-types";

export default class StateEx extends React.Component {
    constructor(props){
        super(props);
        this.state={
            nombre: 'Damaso',
            edad: '33',
            email: 'damaso@gmail.com',
            color: 'red'
        };
    }

    static getDerivedStateFromProps(props, state){ //state contiene las variables de estado
        if (props.color) {
            return { color: props.color };
        }
        return null;
    }

    componentDidMount(){ //NO FUNCIONA
        setTimeout(() => {
            this.setState({ color: "orange" })
          }, 1000)
    }

        render(){
            return (
                <div>
                    <h1> Mi nombre es {this.state.nombre}</h1>
                    <p>Tengo {this.state.edad}</p>
                    <p>Mi email de Contacto es: {this.state.email}</p>
                    <p style={{ color: this.state.color }}>Color</p>
                </div>
            )
        }
}


StateEx.propTypes = {
    color: PropTypes.string,
};