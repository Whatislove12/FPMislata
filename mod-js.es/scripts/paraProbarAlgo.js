document.getElementById('calcular').onclick = function(ev) {
    var velocidad = Number(document.getElementById('velocidad').value);
    var km = Number(document.getElementById('km').value);
    var Tiempo = km/velocidad;
    var horas = parseInt(Tiempo);
    var minutos = ((Tiempo - horas)*60).toFixed(0);

    if (minutos<10)
    document.getElementById('tiempo').innerHTML = horas + ':' + '0' + minutos;
        else if (minutos>=10)
        document.getElementById('tiempo').innerHTML = horas + ':' + minutos;
};