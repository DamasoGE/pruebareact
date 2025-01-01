import React from 'react';
import ReactDOM from 'react-dom/client';
import StateEx from './components/StateEx';
import StateExClass from './components/StateExClass';
import Conditional from './components/Conditional';
import Football from './components/Football';
import ListaCoche from './components/ListaCoche';



const myFirstElement = <p> Mi primer párrafo
    <p>Otro parrafo</p>
    </p>;


const segundoElemento = React.createElement('h1',{},'no uso JSX!');
console.log(segundoElemento);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement); //El siguiente render lo sobreescribe

const colored = 'blue';

root.render(
    <div>
    <StateExClass color={ colored } />
    <StateEx />
    <Football nombre='damaso' />
    <Conditional isTrue='true' />
    <ListaCoche />
    </div>
);

