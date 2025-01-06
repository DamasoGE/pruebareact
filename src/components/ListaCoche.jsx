import PropTypes from "prop-types";

const Car = (props)=>{
    return <li> I am { props.marca } </li>
}

export const ListaCoche = () => {

    const style = { // Objeto con todas las propiedades Style
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Sans-Serif"
    };

    const cars =  ['megane','mini','scout'];

    return (
        <>
            <h1 style={style}>Lista de coches</h1>
            <ul>
                { cars.map((car, index)=> <Car key={ index } marca={ car } />) }
            </ul>
        </>
    )
}

export default ListaCoche

Car.propTypes = {
    marca: PropTypes.string
};