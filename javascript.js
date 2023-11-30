
// Manejar el evento de registros

function registrar(event) {
			event.preventDefault();

			const usernameInput = document.querySelector('#username'); 
			const emailInput = document.querySelector('#email'); 
			const passwordInput = document.querySelector('#password'); 
			const confirmPasswordInput = document.querySelector('#confirm-password'); 

			if (usernameInput.value === "" || emailInput.value === "" || passwordInput.value === "") {
			alert("Por favor, complete todos los campos");
			return false;
			}

			if (passwordInput.value !== confirmPasswordInput.value) {
			alert("Las contraseñas no coinciden"); 
			return false;
			}

			sessionStorage.setItem("username", usernameInput.value);
			sessionStorage.setItem("email", emailInput.value);
			sessionStorage.setItem("password", passwordInput.value);

			alert("¡Registrado correctamente!");
			window.location.href = "login.html";
}



// Manejar el evento de inicio de sesión

function iniciarSesion(event) {
	
  event.preventDefault();
  const usernameInput = document.querySelector('#login-username'); 
  const passwordInput = document.querySelector('#login-password'); 

  const storedEmail = sessionStorage.getItem("#email");
  const storedPassword = sessionStorage.getItem("#password");

  if (usernameInput.value !== storedEmail || passwordInput.value !== storedPassword) {
  alert("¡Logeado correctamente!");
    window.location.href = "informacion.html";
  return false;
  }

  // Iniciar sesión exitosamente
  alert("¡Logeado correctamente!");
  window.location.href = "informacion.html";
}


function registros(event) {
  event.preventDefault(); // Prevent the form from submitting by default

  // Get the form input values
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  // Simple validation
  if (username === '' || email === '' || password === '' || confirmPassword === '') {
      alert('Por favor, complete todos los campos.');
  } else if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden. Por favor, inténtelo de nuevo.');
  } else {
      // Registration successful
      alert('¡Registro exitoso! Gracias por registrarse.');
      // You can also submit the form to a server here if needed
  }
}



function mostrarFormularioAdmin() {
  // mostrar el formulario de inicio de sesión
  $('#formulario-login').show();
  
  // centrar el formulario de inicio de sesión en la pantalla
  var anchoFormulario = $('#formulario-login').outerWidth();
  var altoFormulario = $('#formulario-login').outerHeight();
  var posicionIzquierda = ($(window).width() - anchoFormulario) / 2;
  var posicionArriba = ($(window).height() - altoFormulario) / 2;
  $('#formulario-login').css({
  'position': 'fixed',
  'left': posicionIzquierda,
  'top': posicionArriba
  });
}


 