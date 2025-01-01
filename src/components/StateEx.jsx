import { useState, useEffect } from "react";
import PropTypes from "prop-types";


export const StateEx = ({ color: propColor }) =>{

    const [ state, setState ] = useState({ //requiere de useState
        nombre: 'Damaso',
        edad: '33',
        email: 'damaso@gmail.com',
        color: propColor || 'red'
    });

    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            if(!propColor){
                setState ((prevState) => ({...prevState, color: 'orange'}))
            }
        },1000)

        return () => clearTimeout(timeOut);
    },[propColor])

    return (
    <div>
        <h1> Mi nombre es {state.nombre}</h1>
        <p>Tengo {state.edad}</p>
        <p>Mi email de Contacto es: {state.email}</p>
        <p style={{ color: state.color }}>Color</p>
    </div>
    )
}


StateEx.propTypes = {
    color: PropTypes.string,
};

export default StateEx;
