/* De la documentacion para validaciones del bootstrap:

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
	'use strict'
  
	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	var forms = document.querySelectorAll('.needs-validation')
  
	// Loop over them and prevent submission
	Array.prototype.slice.call(forms)
	  .forEach(function (form) {
		form.addEventListener('submit', function (event) {
		  if (!form.checkValidity()) {
			event.preventDefault()
			event.stopPropagation()
		  }
  
		  form.classList.add('was-validated')
		}, false)
	  })
  })()

*/



// Exercise 6
function validate() {
	var error = 0;

	const lettersOnly = /^[A-Za-z]+$/
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,3})+$/
    const numberFormat = /^\d{9}$/
    const passwordFormat = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/
	
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == ""){
		error++;
	}

	if(fEmail.value == ""){
		error++;
	}
	 
	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}

}

