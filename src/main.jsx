import React from 'react';
import ReactDOM from 'react-dom/client';
import StateEx from './components/StateEx';
import StateExClass from './components/StateExClass';



const myFirstElement = <p> Mi primer párrafo
    <p>Otro parrafo</p>
    </p>;


const segundoElemento = React.createElement('h1',{},'no uso JSX!');
console.log(segundoElemento);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement); //El siguiente render lo sobreescribe

root.render(
    <div>
    <StateExClass />
    <StateEx />
    </div>
);

