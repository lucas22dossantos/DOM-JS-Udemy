//===============================
// ¿Qué es querySelector?
//===============================
// querySelector() es un método del DOM que te permite seleccionar el primer
// elemento que coincida con un selector CSS (como .clase, #id, div, ul li, etc.).

//  Sintaxis:
// document.querySelector('selector')

//===============================
// Selectores CSS básicos
//===============================
// Selecciona por ID (usa #)
const titulo = document.querySelector("#titulo");
// Selecciona el elemento con id="titulo"
console.log(titulo);

// Selecciona por clase (usa .)
const parrafo = document.querySelector(".parrafo");
// Selecciona el primer elemento con class="parrafo"

// Selecciona por etiqueta
const div = document.querySelector("div");
// Selecciona el primer <div> del documento
