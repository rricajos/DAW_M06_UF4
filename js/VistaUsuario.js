// vista.js: Manipulación del DOM para mostrar los datos


function ocultarUsuarios() {
  const contenedor = document.getElementById("contenedorUsuarios");
  contenedor.innerHTML = '';
}

// Función para generar y mostrar la tabla de usuarios
function mostrarUsuarios(usuarios) {
  const contenedor = document.getElementById("contenedorUsuarios");

  // Creación de la tabla
  let tabla = `<table>
                  <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Primer Apellido</th>
                      <th>Email</th>
                  </tr>`;

  // Agregar las filas de los usuarios
  usuarios.forEach(usuario => {
      tabla += `<tr>
                  <td>${usuario.id}</td>
                  <td>${usuario.nombre}</td>
                  <td>${usuario.primerApellido}</td>
                  <td>${usuario.email}</td>
                </tr>`;
  });

  tabla += `</table>`;

  // Insertar la tabla en el contenedor
  contenedor.innerHTML = tabla;
}

// Función para mostrar un mensaje de error
function mostrarError(mensaje) {
  const contenedor = document.getElementById("contenedorUsuarios");
  contenedor.innerHTML = `<p style="color: red;">${mensaje}</p>`;
}
