document.getElementById('calcular').onclick = function(ev) {
    var a = Number(document.getElementById('numA').value);
    var b = document.getElementById('numB').value;
    var c = document.getElementById('numC').value;

    var resultado = document.getElementById('resultado');
    var X1 = document.getElementById('resultadoX1');
    var X2 = document.getElementById('resultadoX2');

    resultado.innerHTML = ''+a+'x²+'+b+'x+'+c+'=0'

    var D = b*b-4*a*c;

    if ()


    if (D<0) alert('no hay raizes')
    else if (D>0) alert('hay 2 raizes')
    else if (D=0) alert('hay 1 raiz ')


}; 










/* var palabra = 'numero';
var texto = 'numero numero letras letras.'
var numveces = 0;
var indice = 0;

do {
    indice = texto.indexOf(palabra, indice);
    if (indice>=0) {
        numveces++
        indice++
    } else indice=texto.length;
}
while (indice<texto.length)

var div = document.getElementById('resultado');
div.innerHTML = 'La palabra  "'+palabra+'" esta '+numveces+' vezes' */