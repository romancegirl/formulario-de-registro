// Ningún campo puede estar vacío.
// La contraseña debe tener al menos 6 caracteres.
// Los datos ingresados en "Contraseña" y "Repetir contraseña" deben ser iguales.
// Se debe haber marcado el checkbox "Acepto los términos y condiciones del servicio.".

document.getElementById("regBtn").addEventListener("click", function () {

    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;
    let terminos = document.getElementById("terminos").checked;

    if (password1.length < 6 || password1 != password2 || !terminos) {
        showAlertError();
    } else {
        showAlertSuccess();
    }
});

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

