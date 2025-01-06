import { createContext, useContext, useEffect, useRef, useState } from "react";

const ColorContext = createContext(); // HOOK para utilizar las variables entre componentes sin tener que utilzar props.

export const Hooks = ()=> {

    const [color, setColor] = useState("orange"); //HOOK para utilizar y modificar el estado del componente.
    const [count, setCount] = useState(0);

    useEffect(() => { //HOOK: Hace algo al cargar, cada vez que se actualiza se renderiza de nuevo
        let timer = setTimeout(() => {
          setCount((count) => count + 1);
        }, 1000);
    
        return () => clearTimeout(timer) // es buena práctica limpiar los componentes cuando no se necesitan más sus eventos.
    
      }, [count]); //Realizará un render al componente cada vez que cambie alguna varible pasada

      const inputElement = useRef(); //HOOK Permite hacer cambios sin necesidad de realizar un render
      //Tambien permite guardar información entre renders
      //En el ejemplo permite cambiar el focus sin provocar un render

      const focusInput = () => {
        inputElement.current.focus();
      };

    return (
        <>
            <h1>useState Mi color favorito es {color} </h1>
            <button
                type="button"
                onClick={() => setColor("blue")}
            >Blue</button>
            <h1>useEffect Contador: {count}</h1>



            <ColorContext.Provider value={color}>
                <h1>useContext <HookContext /> </h1>
            </ColorContext.Provider>

            <h1>useRef</h1>
            <input type="text" ref={inputElement} />
            <button onClick={focusInput}>Focus Input</button>
        </>
    )

}

const HookContext = () =>{
    const color = useContext(ColorContext)
    return (
        <>
            <span>Soy un componente {color}</span>
        </>
    )
}

export default Hooks;