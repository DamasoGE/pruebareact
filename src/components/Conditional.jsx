import PropTypes from "prop-types";

export default function Conditional (props){

    const isTrue = props.isTrue;

    if(isTrue==='true'){
        return <h2>Parametro: true</h2>
    }
    return <h2>Parametro: false</h2>

}

Conditional.propTypes = {
    isTrue: PropTypes.string
};