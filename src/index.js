// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);
/**
 * React va a ser el analogo a element
 * Crea el elemento y agrega el contenido
 * Nos permite hacer uso de JSX,
 * y en cada lugar que lo
 * escribamos, debemos
 * importarlo
 */
import 'bootstrap/dist/css/bootstrap.css'
import'./global.css'
import React from "react";
/**
 * Es el encargado de incrustar el nuevo elemento al DOM
 *
 */

import App from "../src/components/App";
import ReactDOM from "react-dom";
/**
 * El nuevo elemento __qué__ queremos agregar
 */
// const element = <h1>Hello, Platzi Badges!</h1>; 
// const name = "Joseph";
/**
 * Las variable null o undefined no se van a presentar en la pantalla a la hora de imprimir
 */
// const jsx = (
//   <div>
//     <h1>Hola {name}</h1> 
//   </div>
// );
/**
 * El lugar  __dónde__ lo vamos a agregar
 */

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
/**
 * Prodremos acceder a este usuario desde 
 * el componente por medio de los props
 * 
 */
ReactDOM.render(<App/>, container);
