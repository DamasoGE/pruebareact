import React from "react";
import PropTypes from "prop-types";
  
export default class StateExClass extends React.Component {
    constructor(props){
        super(props);
        this.state={
            nombre: 'Damaso',
            edad: '33',
            email: 'damaso@gmail.com',
            color: props.color || 'red'
        };
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({ color: 'orange' })
          },1000)
    }

        //es capaz de sobreescribir la funcion componentDidMount()
    // static getDerivedStateFromProps(props, state){ //state contiene las variables de estado
    //     if (props.color) {
    //         return { color: props.color };
    //     }
    //     return null;
    // }

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


StateExClass.propTypes = {
    color: PropTypes.string,
};