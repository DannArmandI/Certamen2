"use strict";
function ValidarRut(valor) {
    var tmp = valor.split('-');
    var digito = tmp[1];
    var rut = tmp[0];
    if (digito == 'K')
        digito = 'k';
    var M = 0, S = 1;
    for (; rut; rut = Math.floor(rut / 10))
        S = (S + rut % 10 * (9 - M++ % 6)) % 11;
    console.log(S ? S - 1 : 'k');
    return S ? S - 1 : 'k';
}
(function () {
    var acudientes = document.getElementById("Acudientes");
    var telefono = document.getElementById("telefono");
    var rut = document.getElementById("rut");
    var email = document.getElementById("email");
    telefono.maxLength = "9";
    rut.pattern = "^[0-9]{8}-[0-9Kk]{1}$";
    var campos = document.getElementById("campos");
    //console.log(nombreCompleto.value);
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation');
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                if (telefono.Length < 9) {
                    campos.children[1].getElementsByClassName("invalid-feedback")[0].innerHTML = "Telefono no válido";
                }
                if (ValidarRut(rut.value) > 1) {
                    campos.children[0].getElementsByClassName("invalid-feedback")[0].innerHTML = "Rut no válido";
                }
                event.preventDefault();
                event.stopPropagation();
            }
            else {
                form.style.display = "none";
                var mensaje = document.getElementById("mensaje");
                mensaje.style.display = "block";
            }
            event.preventDefault();
            event.stopPropagation();
            form.classList.add('was-validated');
        }, false);
    });
})();
