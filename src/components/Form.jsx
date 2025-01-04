import { useState } from "react";

export const Form = ()=>{

    const [state, setState] = useState({
        name: "",
        age: "",
        textarea: "",
        select: ""
    });

    const handleSubmit = (e)=>{
        e.preventDefault();
        alert(`El nombre introducido es: ${state.name};
            La edad es: ${state.age};
            El textarea es: ${state.textarea};
            El select es: ${state.select}` )
    }

    const handleChange = (e)=>{
        const { name, value } = e.target; //name se refiere a la propiedad del formulario
        setState( prevState =>({...prevState, [name]: value}))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Introduce el nombre:
                <input 
                type='text'
                name='name'
                value= {state.name}
                //onChange={(e)=>setState({name: e.target.value})} esto solo funciona con un input porque se queda con el ultimo cambio
                onChange={handleChange}
                 />
            </label>

            <label>Introduce tu edad:
                <input 
                type='number'
                name='age'
                value= {state.age}
                onChange={handleChange}
                 />
            </label>

            <textarea
                name='textarea'
                value={state.textarea}
                onChange={handleChange}
            />

            <select name='select' value={state.select} onChange={handleChange}>
                <option value="Seleccion1">Seleccion1</option>
                <option value="Seleccion2">Seleccion2</option>
                <option value="Seleccion3">Seleccion3</option>
            </select>
            <input type='submit' />
        </form>
    )
}

export default Form;