



document.getElementById('calcular').onclick = function(ev) {



    var km = Number(document.getElementById('km').value);
    var precio = Number(document.getElementById('precio').value);

    var tr11 = Number(document.getElementById('tr11').value);
    var tr12 = Number(document.getElementById('tr12').value);
    tiempo = km/tr11;
    horas = parseInt(tiempo);
    minutos = parseInt((tiempo-horas)*60);
    document.getElementById('tiempo1').value = horas+':'+(minutos<10?'0':'')+minutos;
    document.getElementById('coste1').value = ((km/100)*tr12*precio).toFixed(2);

    var tr21 = Number(document.getElementById('tr21').value);
    var tr22 = Number(document.getElementById('tr22').value);
    tiempo = km/tr21;
    horas = parseInt(tiempo);
    minutos = parseInt((tiempo-horas)*60);
    document.getElementById('tiempo2').value = horas+':'+(minutos<10?'0':'')+minutos;
    document.getElementById('coste2').value = ((km/100)*tr22*precio).toFixed(2);

    var tr31 = Number(document.getElementById('tr31').value);
    var tr32 = Number(document.getElementById('tr32').value);
    tiempo = km/tr31;
    horas = parseInt(tiempo);
    minutos = parseInt((tiempo-horas)*60);
    document.getElementById('tiempo3').value = horas+':'+(minutos<10?'0':'')+minutos;
    document.getElementById('coste3').value = ((km/100)*tr32*precio).toFixed(2);

};




/*  
нужно во времени добавить в минуты т.е. округлить числа c parceint и добавить время в формате час: минуты.
 = horas +':0'+(minutos<10?'0':'')+minutos;
  */

