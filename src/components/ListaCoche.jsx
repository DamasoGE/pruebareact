import PropTypes from "prop-types";

const Car = (props)=>{
    return <li> I am { props.marca } </li>
}

export const ListaCoche = () =>{

    const cars =  ['megane','mini','scout'];

    return (
        <>
            <h1>Lista de coches</h1>
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