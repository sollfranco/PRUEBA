// script.js

// Credenciales predefinidas
const usuarioCorrecto = "admin";
const contraseñaCorrecta = "1234";

// Seleccionamos el botón de inicio de sesión
document.getElementById("loginButton").addEventListener("click", function () {
    // Obtenemos los valores ingresados por el usuario
    const usuarioIngresado = document.getElementById("usuario").value;
    const contraseñaIngresada = document.getElementById("contraseña").value;

    // Validamos las credenciales
    if (usuarioIngresado === usuarioCorrecto && contraseñaIngresada === contraseñaCorrecta) {
        // Credenciales correctas, redirigimos a la página de inicio
        window.location.href = "dashboard.html"; // Cambia "dashboard.html" por la página a la que deseas redirigir
    } else {
        // Credenciales incorrectas, mostramos mensaje de error
        alert("Usuario o contraseña incorrectos. Por favor, intente nuevamente.");
    }
});
