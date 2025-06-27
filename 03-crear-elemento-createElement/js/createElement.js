// ===============================
// ¿Qué es createElement?
// ===============================

// document.createElement() es un método que crea un elemento HTML.
// Lo puedes configurar (atributos, texto, clases, etc.) y luego
// agregarlo al documento con métodos como appendChild o append.

//Ejemplo:
const parrafo = document.createElement("P"); // <p></p>

//algunas cosas que podemos hacer despues de crearla:

//agregar texto
parrafo.textContent = "Hola mundo";

//agregar clases
parrafo.classList.add("mi-clase");

//agregar stributos
parrafo.setAttribute("id", "parrafo-id");

//agregar estilos
parrafo.style.color = "blue";

//agregar eventos
parrafo.addEventListener("click", () => {
  alert("¡Clic en el párrafo!");
});

//agregamos una direccion
const enlace = document.createElement("a");
enlace.href = "https://www.google.com";

// Insertarlo en el DOM
document.body.appendChild(parrafo);
// o en un div específico:
//document.querySelector("#contenedo").appendChild(parrafo);

// ===============================
// Ejercicio 1
// ===============================
// Usando createElement, creá un párrafo <p> con el texto "Hola, este es un párrafo"
// y color azul. Agregalo directamente dentro del #contenedor-elementos.

const crearP = document.createElement("P");

crearP.textContent = "Hola, este es un párrafo";
crearP.style.color = "blue";

document.querySelector("#contenedor-elementos").appendChild(crearP);

// ===============================
// Ejercicio 2
// ===============================

// Creá un elemento <a> con el texto "Visitar Wikipedia", que apunte a https://es.wikipedia.org
// y se abra en una nueva pestaña. Dale una clase "enlace", y agregalo al #contenedor-elementos.

const crearEnlace = document.createElement("A");

crearEnlace.textContent = "Visitar Wikipedia";
crearEnlace.href = "https://es.wikipedia.org";
crearEnlace.setAttribute("target", "_blank");
crearEnlace.classList.add("enlace");

document.querySelector("#contenedor-elementos").appendChild(crearEnlace);

// ===============================
// Ejercicio 3
// ===============================

// Dado este array: const colores = ["Rojo", "Verde", "Azul"];
// Creá un <ul> y dentro de él un <li> por cada color, con clase
// "item-color". Insertá la lista en #contenedor-elementos.

const colores = ["Rojo", "Verde", "Azul"];

const listaContenedor = document.createElement("UL");

colores.forEach((color) => {
  const li = document.createElement("LI");

  li.textContent = color;
  li.classList.add("item-color");

  listaContenedor.appendChild(li);
});

document.querySelector("#contenedor-elementos").appendChild(listaContenedor);

// ===============================
// Ejercicio 4
// ===============================

// A partir del siguiente array: const usuarios = ["Ana", "Luis", "Sofía"];
// Creá una tarjeta (<div class="tarjeta">) para cada usuario. Cada tarjeta
// debe tener un <h2> con su nombre y un <p> con un texto fijo como
// "Usuario registrado". Agregalas al #contenedor-elementos.

const usuarios = ["Ana", "Luis", "Sofía"];

usuarios.forEach((usuario) => {
  const tarjetas = document.createElement("DIV");
  const nombre = document.createElement("H2");
  const texto = document.createElement("P");

  tarjetas.classList.add("tarjeta");

  nombre.textContent = usuario;
  texto.textContent = "Usuario registrado";

  tarjetas.appendChild(nombre);
  tarjetas.appendChild(texto);

  document.querySelector("#contenedor-elementos").appendChild(tarjetas);
});
