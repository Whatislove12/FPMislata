document.getElementById('derecha').onclick = function(ev) {



    var aux1;
    var aux2;
    
    aux1 = document.getElementById('elem2').src;
    document.getElementById('elem2').src =  document.getElementById('elem1').src;
    aux2 = document.getElementById('elem3').src;    
    document.getElementById('elem3').src = aux1;

    aux1 = document.getElementById('elem4').src;
    document.getElementById('elem4').src = aux2;

    aux2 = document.getElementById('elem5').src;
    document.getElementById('elem5').src = aux1;

    aux1 = document.getElementById('elem6').src;
    document.getElementById('elem6').src = aux2;

    document.getElementById('elem1').src =  aux1;




};
document.getElementById('isquerda').onclick = function(ev) {
    var aux1;
    var aux2;

    aux1 = document.getElementById('elem6').src;
    document.getElementById('elem6').src = document.getElementById('elem1').src;
   
    aux2 = document.getElementById('elem5').src;
    document.getElementById('elem5').src = aux1;

    aux1 = document.getElementById('elem4').src;
    document.getElementById('elem4').src = aux2;

    aux2 = document.getElementById('elem3').src;
    document.getElementById('elem3').src = aux1;

    aux1 = document.getElementById('elem2').src;
    document.getElementById('elem2').src = aux2;

    aux2 = document.getElementById('elem1').src;
    document.getElementById('elem1').src = aux1;

};


document.getElementById('arriba').onclick = function(ev) {
    var aux1;
    var aux2;
    var aux3;

    aux1 = document.getElementById('elem1').src;
    aux2 = document.getElementById('elem2').src;
    aux3 = document.getElementById('elem3').src;

    document.getElementById('elem1').src = document.getElementById('elem4').src;
    document.getElementById('elem2').src = document.getElementById('elem5').src;
    document.getElementById('elem3').src = document.getElementById('elem6').src;

    document.getElementById('elem4').src = aux1;
    document.getElementById('elem5').src = aux2;
    document.getElementById('elem6').src = aux3;

}

document.getElementById('columna').onclick = function(ev) {
    var aux1;
    var aux2;

    aux1 = document.getElementById('elem3').src;
    aux2 = document.getElementById('elem6').src;


    document.getElementById('elem3').src = document.getElementById('elem1').src;
    document.getElementById('elem6').src = document.getElementById('elem4').src;

    document.getElementById('elem1').src = document.getElementById('elem2').src;
    document.getElementById('elem4').src = document.getElementById('elem5').src;

    document.getElementById('elem2').src = aux1;
    document.getElementById('elem5').src = aux2;
   
}


document.getElementById('columna2').onclick = function(ev) {
    var aux1;
    var aux2;

    aux1 = document.getElementById('elem1').src;
    aux2 = document.getElementById('elem4').src;


    document.getElementById('elem1').src = document.getElementById('elem3').src;
    document.getElementById('elem4').src = document.getElementById('elem6').src;

    document.getElementById('elem3').src = document.getElementById('elem2').src;
    document.getElementById('elem6').src = document.getElementById('elem5').src;

    document.getElementById('elem2').src = aux1;
    document.getElementById('elem5').src = aux2;
   
}

document.getElementById('temporizador').onclick = function(ev) {
    temporizador = setInterval(columna2,1000);

}

        