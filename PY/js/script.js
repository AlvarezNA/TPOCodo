/*function cerrarNav() {
    var nav = document.getElementById("miNav");

    if (nav.style.display === "none") {
      nav.style.display = "block";
    } else {
      nav.style.display = "none";
    }
  }
*/
document.getElementById('formulario').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío del formulario por defecto

  var nombre = document.getElementById('nombreF').value;
  var apellido = document.getElementById('apellido').value;
  var correo = document.getElementById('correo').value;
  var telefono = document.getElementById('telefono').value;
  var consulta = document.getElementById('consulta').value;

  // Verificar si los campos obligatorios están completos
  if (nombre && apellido && correo && telefono && consulta) {
    // Validar el nombre (más de 3 letras y solo letras)
    if (nombre.length <= 3 || !/^[a-zA-Z]+$/.test(nombre)) {
      alert('El nombre debe contener más de 5 letras y solo letras.');
      return;
    }

    // Validar el apellido (más de 4 letras y solo letras)
    if (apellido.length <= 4 || !/^[a-zA-Z]+$/.test(apellido)) {
      alert('El apellido debe contener más de 5 letras y solo letras.');
      return;
    }

    // Validar la consulta (más de 20 letras)
    if (consulta.length <= 20) {
      alert('La consulta debe contener más de 20 letras.');
      return;
    }

    // Validar el número de teléfono (exactamente 10 dígitos y solo números)
    if (!/^\d{10}$/.test(telefono)) {
      alert('El número de teléfono debe contener exactamente 10 números.');
      return;
    }

    // Aquí puedes agregar el código para enviar el formulario
    alert('¡Formulario enviado correctamente!');
    document.getElementById('formulario').reset(); // Restablece el formulario después de enviarlo
  } else {
    alert('Por favor, complete todos los campos obligatorios.');
  }
});