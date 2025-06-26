// ===============================
// ¿Qué es querySelectorAll()?
// ===============================

// Es un método de JavaScript que permite seleccionar todos los elementos del DOM que coincidan
// con un selector CSS, devolviendo una NodeList (una lista de nodos, similar a un array).

const elementos = document.querySelectorAll("p"); // selecciona todos los <p>
console.log(elementos);

// | Devuelve                    | Una **NodeList** (no un array, pero se puede recorrer).                 |
// | Selección                   | Usa **selectores CSS**: clases, ID, etiquetas, combinaciones.           |
// | No selecciona dinámicamente | Si el DOM cambia después de usarlo, la NodeList **no se actualiza**.    |
// | Se puede recorrer           | Con `forEach()`, `for...of`, o convertirla en array con `Array.from()`. |

// ===============================
// Ejemplo de uso
// ===============================

const items = document.querySelectorAll(".item"); //por clase

const parrafos = document.querySelectorAll("p"); //por etiqueta

const destacados = document.querySelectorAll("div.container p.destacado"); //selectores combinados

// A partir de un nodo específico

const contenedor = document.querySelector(".container");
const hijos = contenedor.querySelectorAll("p");

// ===============================
// Cómo recorrer la NodeList
// ===============================

const recorrerItems = document.querySelectorAll(".item");

recorrerItems.forEach((item, index) => {
  console.log(`Elemento ${index + 1}:`, item.textContent);
});

// ===============================
// Convertir NodeList en array
// ===============================

const convertir = document.querySelectorAll(".item");
const arrayItems = Array.from(convertir);

arrayItems.map((item) => console.log(item.textContent));

// ===============================
// Ejercicio 1
// ===============================
console.log("----- ejercicio 1 -----");
// Seleccioná todos los elementos con clase .item y mostrálos en consola con su texto.

const todosElementos = document.querySelectorAll(".item");
console.log(todosElementos);

// ===============================
// Ejercicio 2
// ===============================
console.log("----- ejercicio 2 -----");
// Seleccioná todos los párrafos (<p>) dentro del contenedor
// con clase .container y cambiales el texto por "Modificado".

const contParrafos = document.querySelectorAll(".container p");

contParrafos.forEach((p) => {
  p.textContent = "Modificado";
});

// ===============================
// Ejercicio 3
// ===============================
console.log("----- ejercicio 3 -----");
// Seleccioná todos los elementos con clase .item, convertí la NodeList en
// un array y mostrá un nuevo array con todos los textos en mayúscula.

const elementosItem = document.querySelectorAll(".item");

const convertirArray = Array.from(elementosItem);

const textosMayus = convertirArray.map((item) =>
  item.textContent.toUpperCase()
);

console.log(textosMayus);
