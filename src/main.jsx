import React from 'react';
import ReactDOM from 'react-dom/client';
import Basic from './components/basic';
import BasicProp from './components/BasicProp';
import StateEx from './components/StateEx';
import ScrollCounter from './components/ScrollCounter';

const myFirstElement = <p> Mi primer párrafo
    <p>Otro parrafo</p>
    </p>;


const segundoElemento = React.createElement('h1',{},'no uso JSX!');
console.log(segundoElemento);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement); //El siguiente render lo sobreescribe

root.render(
    <div>
    <ScrollCounter />
    </div>
);