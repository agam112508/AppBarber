function validarFormulario() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

  // Lógica de validación (puedes personalizarla según tus necesidades)
    if (username === "ADMON" && password === "1111") {
    alert("Inicio de sesión exitoso");
    // Redirige al usuario a la página deseada
    window.location.href = "/cliente/iniciocliente.html";
    return false; // Evita que se envíe el formulario
    } else {
    alert("Nombre de usuario o contraseña incorrectos");
    return false; // Evita que se envíe el formulario
    }
}



function cerrarModal() {
    // Redirigir al index.html
    window.location.href = "index.html";
}


document.addEventListener('DOMContentLoaded', function () {
  var cells = document.querySelectorAll('table.table-bordered tbody td');
  
  cells.forEach(function(cell) {
      cell.addEventListener('click', function() {
          // Remover la clase 'selected' de todas las celdas
          cells.forEach(function(cell) {
              cell.classList.remove('selected');
          });

          // Agregar la clase 'selected' a la celda actualmente seleccionada
          this.classList.add('selected');
      });
  });
});


function cerrarSesion() {
  alert('Cerrar sesión');
  window.location.href = '../index.html';
}
