//Practicando el js aprendido

const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");

const datos = {
  nombre: "",
  email: "",
  mensaje: "",
};

nombre.addEventListener("input", leerInput);
email.addEventListener("input", leerInput);
mensaje.addEventListener("input", leerInput);

function leerInput(evento) {
  datos[evento.target.id] = evento.target.value;
}

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const { nombre, email, mensaje } = datos;

  for (let campo in datos) {
    if (datos[campo] === "") {
      mostrarAlerta(`El campo ${campo} no puede estar vacío`);
      return;
    }
  }

  alert("Mensaje enviado correctamente");

  // limpiamos los campos
  formulario.reset();

  // limpiar datos
  for (let campo in datos) {
    datos[campo] = "";
  }
});

let ultimoMensajeMostrado = null;

function mostrarAlerta(mensajeTexto) {
  // Si el mensaje ya fue mostrado recientemente, no lo mostramos de nuevo
  if (mensajeTexto === ultimoMensajeMostrado) {
    return;
  }

  // Actualizamos el mensaje actual
  ultimoMensajeMostrado = mensajeTexto;

  // Eliminamos cualquier alerta anterior
  const alertaExistente = document.querySelector(".error");
  if (alertaExistente) {
    alertaExistente.remove();
  }

  // Creamos y mostramos nueva alerta
  const alerta = document.createElement("p");
  alerta.textContent = mensajeTexto;
  alerta.style.color = "red";
  alerta.classList.add("error");

  formulario.appendChild(alerta);

  setTimeout(() => {
    alerta.remove();

    // Al eliminar la alerta, también reiniciamos el estado del último mensaje mostrado
    ultimoMensajeMostrado = null;
  }, 5000);
}
