//===============================
// ¿Qué es querySelector?
//===============================
// querySelector() es un método del DOM que te permite seleccionar el primer
// elemento que coincida con un selector CSS (como .clase, #id, div, ul li, etc.).

//  Sintaxis:
// document.querySelector('selector')

//===============================
// Selectores básicos
//===============================
// Selecciona por ID (usa #)
const titulo = document.querySelector("#titulo");
// Selecciona el elemento con id="titulo"

// Selecciona por clase (usa .)
const parrafo = document.querySelector(".parrafo");
// Selecciona el primer elemento con class="parrafo"

// Selecciona por etiqueta
const div = document.querySelector("div");
// Selecciona el primer <div> del documento

//===============================
// Selectores combinados
//===============================
const cajaEspecial = document.querySelector(".caja.especial");
// Selecciona la primera caja que tenga ambas clases: "caja" y "especial"

const itemEnLista = document.querySelector("ul .item");
// Selecciona el primer elemento con class="item" que esté dentro de un <ul>

//===============================
// Manipular elementos una vez seleccionados
//===============================
// Se puede usar querySelector para cambiar estilos o el contenido del elemento seleccionado

const cambiarTitulo = document.querySelector("#titulo");

cambiarTitulo.textContent = "Título cambiado";
// Cambia el texto que muestra el <h1 id="titulo">

cambiarTitulo.style.color = "red";
// Cambia el color del texto a rojo

//===============================
// Validar si el selector encontró un elemento
//===============================
const noExiste = document.querySelector(".inexistente");
if (noExiste) {
  noExiste.textContent = "Encontrado";
} else {
  console.log("Elemento no encontrado");
}

//===============================
// Encadenar selectores dentro de otro elemento
//===============================
const contenedor = document.querySelector(".contenedor");
const parrafoEnContenedor = contenedor.querySelector(".parrafo");

//===============================
// Ejercicio 1
//===============================

// Seleccioná un elemento con el ID #bienvenida y cambiale el texto
// por “¡Hola, DOM!”. Luego cambiá su color de fondo a verde claro.

const elemento = document.querySelector("#bienvenida");
elemento.textContent = "¡Hola, DOM!";
elemento.style.backgroundColor = "lightgreen";

//===============================
// Ejercicio 2
//===============================

// Seleccioná la primera tarjeta con clases .tarjeta.destacada y hacé lo siguiente:

// Cambiá su contenido a “Tarjeta actualizada”

// Poné un borde de 3px sólido en color azul

// Cambiá el color del texto a blanco

const tarjeta = document.querySelector(".tarjeta.destacada");
const tituloTarjeta = tarjeta.querySelector("h3");

tituloTarjeta.textContent = "Tarjeta actualizada";
tarjeta.style.border = "3px solid blue";
tarjeta.style.color = "white";

//===============================
// Ejercicio 3
//===============================

// Dentro de un <section class="productos">, seleccioná el primer <li class="item"> que esté en una lista.

// Si lo encuentra, cambiá el texto a “Producto destacado” y poné un fondo amarillo.

// Si no existe, mostrale al usuario un mensaje en consola que diga: "No se encontró el producto".

const primerItem = document.querySelector(".productos li");

if (primerItem) {
  primerItem.textContent = "Producto destacado";
  primerItem.style.background = "yellow";
} else {
  console.log("No se encontró el producto");
}
