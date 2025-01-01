import PropTypes from "prop-types";

export default function Football({ nombre }){
    const shoot = (a,b) => {
        alert(`Great Shot! ${a}, tipo de evento: ${b.type}`);
      }
    
    
      return (
        <button onClick={(event) => shoot(nombre,event)}>Take the shot!</button>
        //Si no tengo que pasar parámetro con {shoot} funcionaría, pero si necesito pasar parametros utilizo una función anónima
      );
}

Football.propTypes = {
    nombre: PropTypes.string, // La prop `color` debe ser una cadena
};