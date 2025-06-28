// ===============================
// ¿Qué es un evento en JavaScript?
// ===============================

// Un evento es una señal de que algo ha ocurrido, como:

//  -El usuario hace clic en un botón.
//  -Se presiona una tecla.
//  -El mouse se mueve.
//  -Una página termina de cargarse.

// JavaScript "escucha" esos eventos y ejecuta funciones cuando ocurren.

// addEventListener(); Es el método más usado para manejar eventos.
// Su sintaxis es: elemento.addEventListener("tipoEvento", funcionQueSeEjecuta);

// Ejemplo:
const clickBtn = document.querySelector("#clickBtn");

clickBtn.addEventListener("click", () => {
  alert("¡Hiciste click!");
});

//                   Tipos comunes de eventos

// | Evento                   | Cuándo ocurre                         |
// | ------------------------ | ------------------------------------- |
// | `click`                  | Al hacer clic                         |
// | `dblclick`               | Doble clic                            |
// | `mouseover` / `mouseout` | Mouse entra / sale                    |
// | `keydown` / `keyup`      | Tecla presionada / soltada            |
// | `submit`                 | Se envía un formulario                |
// | `change`                 | Cambia valor de un input o select     |
// | `input`                  | Cuando el usuario escribe en un input |
// | `load`                   | Cuando la página termina de cargar    |

// Funciones manejadoras
// Puedes definir la función por separado:

function mostrarAlerta() {
  alert("¡Hola!");
}
clickBtn.addEventListener("click", mostrarAlerta);

// Objeto del evento (event)
// El manejador recibe un objeto evento con información útil.

clickBtn.addEventListener("click", function (event) {
  console.log(event.target); // Elemento que disparó el evento
});

// Eliminar un evento
// Para quitar un event listener necesitas una función nombrada:

function saludar() {
  alert("Hola2");
}

clickBtn.addEventListener("click", saludar); //llamamos al evento saludar.
clickBtn.removeEventListener("click", saludar); //eliminamos el evento por lo cual no se hace la llamada

// ===============================
// Doble clic
// ===============================

const dblclickBtn = document.querySelector("#dblclickBtn");

dblclickBtn.addEventListener("dblclick", () => {
  alert("¡Doble clic detectado!");
});

// ===============================
// Mouse over
// ===============================

const mouseOverBtn = document.querySelector("#mouseOverBtn");

mouseOverBtn.addEventListener("mouseover", () => {
  mouseOverBtn.style.backgroundColor = "lightblue";
});

// ===============================
// Mouse out
// ===============================

const mouseOutBtn = document.querySelector("#mouseOutBtn");

mouseOutBtn.addEventListener("mouseout", () => {
  mouseOutBtn.style.backgroundColor = "lightgray";
});

// ===============================
// Keydown
// ===============================

const keydownInput = document.querySelector("#keydownInput");

keydownInput.addEventListener("keydown", () => {
  console.log("Tecla presionada");
});

// ===============================
// Keyup
// ===============================

const keyupInput = document.querySelector("#keyupInput");

keyupInput.addEventListener("keyup", () => {
  console.log("Tecla soltada");
});

// ===============================
// Submit
// ===============================

const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita recargar la página
  alert("Formulario enviado");
});

// ===============================
// Change
// ===============================

const selector = document.querySelector("#selector");

selector.addEventListener("change", (e) => {
  console.log("Seleccionado:", e.target.value);
});

// ===============================
// Input
// ===============================

const inputText = document.querySelector("#inputText");

inputText.addEventListener("input", (e) => {
  console.log("Escribiendo:", e.target.value);
});

// ===============================
// Load
// ===============================

window.addEventListener("load", () => {
  console.log("La página se ha cargado completamente");
});

// ===============================
// crear boton dinamico
// ===============================
const crearDinamico = document.querySelector("#crearDinamico");

crearDinamico.addEventListener("click", () => {
  const nuevoBoton = document.createElement("button");
  nuevoBoton.textContent = "Botón dinámico creado";
  nuevoBoton.id = "dinamico";
  document.body.appendChild(nuevoBoton);

  nuevoBoton.addEventListener("click", () => {
    alert("¡Hiciste clic en el botón dinámico creado!");
  });
});

// ===============================
// Eventos en elementos dinámicos
// ===============================

// Cuando creás elementos con JavaScript, esos no existen al principio del documento.
// Por eso, si intentás agregarles un addEventListener antes de crearlos, no funcionará.

// Debés crear primero el elemento, agregarlo al DOM, y después asignarle el evento:
// Crear el botón dinámicamente

const nuevoBoton = document.createElement("button");

nuevoBoton.textContent = "Botón dinámico";
nuevoBoton.id = "dinamico";

// Agregarlo al cuerpo del documento
document.body.appendChild(nuevoBoton);

// Ahora sí se le puede agregar el evento
nuevoBoton.addEventListener("click", () => {
  alert("¡Hiciste clic en el botón dinámico!");
});

// ===============================
// Ejercicio 1
// ===============================

// Objetivo: Usar el evento click.

// Consigna:
// Crea un botón que diga "Contar clics". Cada vez que el usuario haga clic, se debe mostrar cuántas veces se ha hecho clic.

// Ejemplo esperado:

// Has hecho clic 1 vez
// Has hecho clic 2 veces
// Has hecho clic 3 veces...

const btnContadorEj1 = document.querySelector("#contadorBtn");
const textoContadorEj1 = document.querySelector("#contadorTexto");

let contadorClicksEj1 = 0;

function contarClicks() {
  contadorClicksEj1++;

  if (contadorClicksEj1 === 1) {
    console.log("Has hecho clic " + contadorClicksEj1 + " vez");
  } else {
    console.log("Has hecho clic " + contadorClicksEj1 + " veces");
  }
}

btnContadorEj1.addEventListener("click", contarClicks);

// ===============================
// Ejercicio 2
// ===============================

// Objetivo: Usar el evento keydown.

// Consigna:
// Cuando el usuario presione la tecla r, el fondo de la página se vuelve rojo.
// Si presiona g, el fondo se vuelve verde.
// Si presiona b, el fondo se vuelve azul.

const ejemplo2 = document.querySelector("body");

ejemplo2.addEventListener("keydown", (event) => {
  if (event.key === "r") {
    ejemplo2.style.background = "red";
    console.log("El fondo cambia a rojo");
  }
  if (event.key === "g") {
    ejemplo2.style.background = "green";
    console.log("El fondo cambia a verde");
  }
  if (event.key === "b") {
    ejemplo2.style.background = "blue";
    console.log("El fondo cambia a azul");
  }
  console.log("Tecla presionada");
});

// ===============================
// Ejercicio 3
// ===============================

// Objetivo: Usar el evento input.

// Consigna:
// Crea un campo de texto donde el usuario debe escribir una contraseña.
// Muestra debajo un mensaje dinámico que diga:

// "Débil" si tiene menos de 5 caracteres

// "Media" si tiene entre 5 y 8

// "Fuerte" si tiene más de 8 caracteres

const inputContraseña = document.querySelector("#passwordInput");
const seguridad = document.querySelector("#nivelSeguridad");

inputContraseña.addEventListener("input", () => {
  const valor = inputContraseña.value;

  if (valor.length < 5) {
    seguridad.textContent = "Débil";
  }
  if (valor.length >= 5 && valor.length <= 8) {
    seguridad.textContent = "Media";
  }
  if (valor.length > 8) {
    seguridad.textContent = "Fuerte";
  }
});

// ===============================
// Ejercicio 4
// ===============================

// Objetivo: Usar varios eventos: submit, click, input, y manejo de elementos dinámicos.

// Consigna:
// Crea un formulario con un input y un botón que diga "Agregar tarea".
// Cada vez que el usuario envíe el formulario, agrega una nueva tarea a una lista.
// Cada tarea debe tener un botón al lado que diga "Eliminar" y al hacer clic elimine esa tarea.

// <form id="formTareas">
//         <input type="text" id="tareaInput" placeholder="Nueva tarea" required />
//         <button type="submit">Agregar tarea</button>
//       </form>
//       <ul id="listaTareas"></ul>

const formulario = document.querySelector("#formTareas");
const inputForm = document.querySelector("#tareaInput");
const lista = document.querySelector("#listaTareas");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const valorForm = inputForm.value.trim();

  if (valorForm !== "") {
    console.log("Texto válido:", valorForm);
    const nuevaTarea = document.createElement("li");
    const btnEliminar = document.createElement("button");

    nuevaTarea.textContent = valorForm;
    btnEliminar.textContent = "Eliminar";

    btnEliminar.addEventListener("click", () => {
      nuevaTarea.remove();
    });

    nuevaTarea.appendChild(btnEliminar);
    lista.appendChild(nuevaTarea);

    inputForm.value = "";
  } else {
    console.log("Formulario vacío");
  }
});
