// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres
let nombres = [];

// Función para agregar el nombre a la lista
function agregarAmigo() {
  const amigo = document.getElementById('amigo');
  const nombre = amigo.value.trim();

  // Validar si el campo está vacío
  if (nombre === "") {
    alert("Por favor ingresa un nombre válido.");
    return;
  }

  // Agregar nombre al array
  nombres.push(nombre);

  // Limpiar el campo de texto
  amigo.value = "";

  // Mostrar la lista de nombres en la página
  mostrarListaNombres();

  // Habilitar el botón de sorteo si hay al menos un nombre
  if (nombres.length > 0) {
    document.getElementById('sortearBtn').disabled = false;
  }
}

// Función para mostrar la lista de nombres en la página
function mostrarListaNombres() {
  const listaNombres = document.getElementById('listaAmigos');
  listaNombres.innerHTML = "";  // Limpiar la lista antes de volver a mostrarla

  // Crear un elemento de lista para cada nombre
  nombres.forEach((nombre, index) => {
    const li = document.createElement('li');
    li.textContent = nombre;
    listaNombres.appendChild(li);
  });
}

// Función para realizar el sorteo aleatorio
function sortearAmigo() {
  if (nombres.length === 0) {
    alert("La lista está vacía. Agrega nombres primero.");
    return;
  }

  // Seleccionar un nombre aleatorio
  const indiceAleatorio = Math.floor(Math.random() * nombres.length);
  const amigoSeleccionado = nombres[indiceAleatorio];

  // Mostrar el resultado en pantalla
  document.getElementById('resultado').textContent = `El amigo secreto es: ${amigoSeleccionado}`;
}