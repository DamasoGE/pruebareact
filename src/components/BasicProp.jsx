import React from "react";
import PropTypes from "prop-types";

export default class BasicProp extends React.Component{
    render(){
        return <p style={{ color: this.props.color || 'black'}}>Soy un Prop</p>;
    }
}

BasicProp.propTypes = {
    color: PropTypes.string, // La prop `color` debe ser una cadena
};