// Exercise 6

function validate(event) {

	let error = 0;	

	event.preventDefault(); // Para evitar la recarga de la página al hacer click en SAVE y que se muestren los console.log
	
	const lettersOnly = /^[A-Za-z]+$/
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,3})+$/
    const numberFormat = /^\d{9}$/
    const passwordFormat = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/
	
	// Get the input fields
	let fName = document.getElementById("fName").value;
	let fEmail = document.getElementById("fEmail").value;
	let fAddress = document.getElementById("fAddress").value;
	let fLastN = document.getElementById("fLastN").value;
	let fPassword = document.getElementById("fPassword").value;
	let fPhone = document.getElementById("fPhone").value;

	// Get the error elements
	let errorName = document.getElementById("errorName");
	let errorEmail = document.getElementById("errorEmail");
	let errorAddress = document.getElementById("errorAddress");
	let errorLastN = document.getElementById("errorLastN");
	let errorPassword = document.getElementById("errorPassword");
	let errorPhone = document.getElementById("errorPhone");
	
	// Validate fields entered by the user: name, phone, password, and email
	(fName === "" || !lettersOnly.test(fName)) ? showError(errorName) : clearError(errorName);
	(fEmail === "" || !emailFormat.test(fEmail)) ? showError(errorEmail) : clearError(errorEmail);
	(fAddress === "") ? showError(errorAddress) : clearError(errorAddress);
	(fLastN === "" || !lettersOnly.test(fLastN)) ? showError(errorLastN) : clearError(errorLastN);
	(fPassword === "" || !passwordFormat.test(fPassword)) ? showError(errorPassword) : clearError(errorPassword);
	(fPhone === "" || !numberFormat.test(fPhone)) ? showError(errorPhone) : clearError(errorPhone);

	  // Así se agrega en el formulario un controlador de eventos para capturar el envío:
	const form = document.querySelector("form"); // El document.querySelector("form") sirve para seleccionar el formulario del HTML que nos interesa. 
	form.addEventListener("submit", validate); // Con addEventListener se agrega un controlador de eventos al formulario. En este caso, el evento es un "submit" (hay muchos más eventos: click, mouseover, mouseout,...) que ejecuta la función validate (Nota: no es necesario poner los parentesis a la función)

	function showError(element) {
        error++;
        element.style.display = 'block';  // Si el input NO cumple con los requisitos de validación, se muestra el mensaje de error...
        element.classList.add('is-invalid');  // ...y se añade a la lista de clases definidas en Bootstrap la clase "is-invalid".
	}

	function clearError(element) {
        error--;
        element.style.display = 'none';  // Si el input SI cumple con los requisitos de validación, se oculta le mensaje de error...
        element.classList.remove('is-invalid'); // ... y se quita la clase "is-invalid" de a lista de clases.
    }

	if(error > 0){
		console.log("Error");
	}else{
		console.log("OK" +
		"\nName: " + fName + 
		"\nEmail: " + fEmail + 
		"\nAddress: " + fAddress +
		"\nLast Name: " + fLastN + 
		"\nPassword: " + fPassword +
		"\nPhone: " + fPhone);
	}

}
