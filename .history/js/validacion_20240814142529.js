// Ningún campo puede estar vacío.
// La contraseña debe tener al menos 6 caracteres.
// Los datos ingresados en "Contraseña" y "Repetir contraseña" deben ser iguales.
// Se debe haber marcado el checkbox "Acepto los términos y condiciones del servicio.".

document.getElementById("regBtn").addEventListener("click", function () {
    let password1 = document.getElementById("password1").value;
    if (password1.length < 6 ) {
        showAlertError();
    } showAlertSuccess(); 
}


);

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

