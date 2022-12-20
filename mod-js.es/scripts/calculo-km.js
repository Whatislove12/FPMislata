document.getElementById('bCalcular').onclick = function(ev) {
    var km=Number(document.getElementById('km').value);
    var euro=Number(document.getElementById('euro').value);

    var velocidad=Number(document.getElementById('velocidad1').value);
    var consumo=Number(document.getElementById('consumo1').value);
    tiempo = km/velocidad;
    horas = parseInt(tiempo);
    minutos = parseInt((tiempo-horas)*60);
    document.getElementById('tiempo1').value = horas+':'+(minutos<10?'0':'')+minutos;
    var consumoTotal = (km/100)*euro*consumo;
    document.getElementById('coste1').value = consumoTotal.toFixed(2);

    velocidad=Number(document.getElementById('velocidad2').value);
    consumo=Number(document.getElementById('consumo2').value);
    tiempo = km/velocidad;
    horas = parseInt(tiempo);
    minutos = parseInt((tiempo-horas)*60);
    document.getElementById('tiempo2').value = horas+':'+(minutos<10?'0':'')+minutos;
    consumoTotal = (km/100)*euro*consumo;
    document.getElementById('coste2').value = consumoTotal.toFixed(2);

    velocidad=Number(document.getElementById('velocidad3').value);
    consumo=Number(document.getElementById('consumo3').value);
    tiempo = km/velocidad;
    horas = parseInt(tiempo);
    minutos = parseInt((tiempo-horas)*60);
    document.getElementById('tiempo3').value = horas+':'+(minutos<10?'0':'')+minutos;
    consumoTotal = (km/100)*euro*consumo;
    document.getElementById('coste3').value = consumoTotal.toFixed(2);


    

};