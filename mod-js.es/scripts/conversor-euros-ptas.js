const EUROPTA = 166.386;

document.getElementById('eurosptas').onclick = function(ev) {
    var euros = document.getElementById('euros');
    var cantidad = Number(euros.value);

    var pesetas = document.getElementById('pesetas');
    pesetas.value = '';

    if (!isNaN(cantidad)) {
        cantidad = Math.round(cantidad * EUROPTA);
        pesetas.value=cantidad;
    } else {
        alert('El dato introducido no puede ser reconvertido');
    }
};

document.getElementById('ptaseuros').onclick = function(ev) {
    var euros = document.getElementById('euros');
    euros.value = '';

    var pesetas = document.getElementById('pesetas');
    var cantidad = Number(pesetas.value);

    if (!isNaN(cantidad)) {
        cantidad = Math.round(cantidad / EUROPTA * 100)/100;
        euros.value=cantidad;
    } else {
        alert('El dato introducido no puede ser reconvertido');
    }
};