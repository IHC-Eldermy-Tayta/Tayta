const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

document.addEventListener('DOMContentLoaded', function () {
    // Identifica los botones de envío por su ID
    const loginSubmitButton = document.getElementById('loginSubmitButton');
    const registerSubmitButton = document.getElementById('registerSubmitButton');

    if (loginSubmitButton) {
        loginSubmitButton.addEventListener('click', function (event) {
            event.preventDefault();
            handleLoginSubmit();
        });
    }

    if (registerSubmitButton) {
        registerSubmitButton.addEventListener('click', function (event) {
            event.preventDefault();
            handleRegisterSubmit();
        });
    }

    function handleLoginSubmit() {
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        if (username === 'admin' && password === 'password') {
            alert('Login Exitoso');
			window.location.href = '../index.html';

        } else {
            alert('Datos invalidos');
        }
    }

    function handleRegisterSubmit() {
        const username = document.getElementById('registerUsername').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('registerConfirmPassword').value;

        if (username && email && password && confirmPassword) {
            if (password === confirmPassword) {
                alert('Registro Exitoso');
				window.location.href = '../index.html';

            } else {
                alert('Las contraseñas son diferentes');
            }
        } else {
            alert('Completa todos los espacios');
        }
    }
});


