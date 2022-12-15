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
document.getElementById('isquierda').onclick = function(ev) {
    
};




    

        