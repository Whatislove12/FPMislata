var div = null;
//Objetos de tipo Booleano
div = document.getElementById('booleanos');
var interruptor = false;
//var interruptor = new Boolean(false);

if (interruptor==true)
   div.innerHTML += '<p>Interruptor activo</p>';
else 
   div.innerHTML += '<p>Interruptor no activo</p>';

document.getElementById('booleanos').innerHTML += interruptor.toString();

//Objetos numéricos
div = document.getElementById('numericos');
var numero = Number.MAX_VALUE;
var distancia = Number.EPSILON;
div.innerHTML += '<p>Número más grande: '+numero+'</p>';
numero=Number.MIN_VALUE;
div.innerHTML += '<p>Número más pequeño: '+numero+'</p>';
div.innerHTML += '<p>Precisión: '+distancia+'</p>';
numero = 7584/168.386;
div.innerHTML += '<p>Resultado de la operación: '+numero.toPrecision(5)+' ('+numero+')</p>';
div.innerHTML += '<p>Resultado de la operación: '+numero.toFixed(5)+' ('+numero+')</p>';
div.innerHTML += '<p>Resultado de la operación: '+numero.toExponential(5)+' ('+numero+')</p>';
div.innerHTML += '<p>El resultado es finito: '+Number.isFinite(5874/45)+'</p>';
div.innerHTML += '<p>El resultado es finito: '+Number.isFinite(5874/0)+'</p>';

//Calculos matemáticos
div = document.getElementById('matematicos');
var operacion = 2 * 5 * Math.PI;
div.innerHTML += '<p>Calculo del diametro: '+operacion.toFixed(3)+'</p>';

document.getElementById('pvpl').value = Math.round(Math.random()*1000)/1000;
document.getElementById('bCalcularGasolina').onclick = function(ev) {
    var litros = document.getElementById('litros').value;
    var pvpl = document.getElementById('pvpl').value;
    var pvp = Math.round(litros*pvpl*100)/100;
    var iva = Math.round(pvp*0.21*100)/100;
    document.getElementById('pvp').value = pvp;
    document.getElementById('iva').value = iva;
    document.getElementById('pvptotal').value = pvp+iva;
};


//CADENAS DE TEXTO
div = document.getElementById('cadenasTexto');
var texto = "        Nuevo curso sobre las cadenas de texto, que vamos a dividir en varios cursos.       ";
div.innerHTML = '<p>'+texto+'</p>';
if (texto.length>0)
   div.innerHTML += '<p>Tamaño de la cadena: '+texto.length+'</p>';
else
   div.innerHTML += '<p>Cadena vacía</p>';

div.innerHTML += '<p>Símbolo: '+String.fromCharCode(32541,7852,0xcb57)+'</p>';
div.innerHTML += '<p>Símbolo en la posicion 6: '+texto.charAt(5)+'</p>';
div.innerHTML += '<p>Primera palabra: ';
if (texto.length>0) {
   var i=0;
   do {
      if (texto.at(i)!=' ')
         div.innerHTML += texto.at(i);
      i++;
   } while(i<texto.length && texto.at(i-1)!=' ');
}

div.innerHTML += '</p>';
div.innerHTML += '<p>Primeros códigos: ';
/*
texto=texto.trimStart();
texto=texto.trimEnd();
*/
texto = texto.trim();

if (texto.length>0) {
   var i=0;
   do {
      if (texto.at(i)!=' ')
         div.innerHTML += parseInt(texto.charCodeAt(i),16)+' ';
      i++;
   } while(i<texto.length && texto.at(i-1)!=' ');
}
div.innerHTML += '</p>';


div.innerHTML += '</p>';
div.innerHTML += '<p>Todos los códigos: ';
if (texto.length>0) {
   var i=0;
   do {
         div.innerHTML += String(parseInt(texto.charCodeAt(i),16)).padStart(4,'0')+' ';
      i++;
   } while(i<texto.length);
}
div.innerHTML += '</p>';




if (texto.endsWith('.'))
   div.innerHTML += '<p>Es una frase correcta</p>';
else 
   div.innerHTML += '<p>Es una frase incorrecta</p>';


// **** *dividir en un array ****/
 var words = '<p>Es una frase correcta</p>';
 var words = words.substring(3,words.length-4).split(' ');
 words.reverse();
 words = words.join(' ');
 words = words.toLowerCase();
 words = words.at(0).toUpperCase() + words.substring(1);
 console.log(words)

 // ****************************************


var palabra =".";
var buscarIzq = texto.indexOf(palabra);
var buscarDch = texto.lastIndexOf(palabra);
div.innerHTML += '<p>La palabra '+palabra+': '; 
if (buscarIzq<0) 
   div.innerHTML += 'No existe';
else if (buscarIzq==buscarDch)
   div.innerHTML += 'Palabra única';
else {
   div.innerHTML += 'La palabra se repite más de una vez';
}
div.innerHTML += '</p>';

var numveces = 0;
var indice = 0;
do {
   indice=texto.indexOf(palabra,indice);
   if (indice>=0) {
      numveces++;
      indice++;
   } else indice=texto.length;
} while (indice<texto.length);

div.innerHTML += '<p>La palabra "'+palabra+'" aparece '+numveces+' veces</p>';


//ARRAY *******************************************
   var div = document.getElementById('arrays');
   var nombres = new Array();
   var notas = [];
   var ids = new Array('img0', 'img1', 'img20', new Date());
   var info = [7, 'carlos',new Date()];
   var asientos = new Array(20);
   var tablero1 = new Array(
      new Array(3),
      new Array(3),
      new Array(3),
   );
   var tablero2 = [
      [null,null,null],
      [null,null,null],
      [null,null,null]
   ];
   //var titulosH2 = document.querySelector('h2')
   var titulosH2 = document.querySelectorAll('h2');

   //acceder a elementos individuales de un array

   div.innerHTML += '<p>Segundo id: '+ids[1]+'</p>'
   div.innerHTML += '<p>Fecha info: '+info[2].toString()+'</p>'

   asientos[0] = '12345678Z';
   asientos[1] = '2345678B';
   asientos.fill('libre', 1)
   div.innerHTML += 'impirmimos '+asientos.toString()+''

   for (let i=0;i<3;i++) 
      for (let j=0;j<3;j++)
         tablero1[i][j] = Math.round(Math.random()*10);


 
   var codigo='';
   codigo += '<table>';
      for (let i=0;i<3;i++) {
         codigo += '<tr>';
         for (j=0;j<3;j++) 
            codigo += '<td>'+tablero1[i][j]+'</td>';
         codigo += '</tr>';
      }
   codigo += '</table>';
   div.innerHTML += codigo;
   

   for (let i=0;i<3;i++)
      for (let j=0;j<3;j++)
         tablero2[i][j] = tablero1[j][i];

         
   var codigo='';
   codigo += '<table>';
      for (let i=0;i<3;i++) {
         codigo += '<tr>';
         for (j=0;j<3;j++) 
            codigo += '<td style="color:red;">'+tablero2[i][j]+'</td>';
         codigo += '</tr>';
      }
   codigo += '</table>';
   div.innerHTML += codigo;


   div.innerHTML += '<p>Numero de titulos h2 = '+titulosH2.length+'</p>'
  
  
    // замена титулов: if (titulosH2.length>0)   titulosH2[0].innerHTML = titulosH2[titulosH2.length-1].innerHTML;



    // areglar y eliminar elementos de un array

    nombres.unshift('javier');
    nombres.unshift('Vlad');
    nombres.unshift('Gladis');
    nombres.unshift('Salus');
    nombres.unshift('Isaac');
    nombres.sort().reverse();

    codigo = '';
    for (let i=0;i<nombres.length;i++) 
      codigo += '<li>'+nombres[i]+'</li>';
   div.innerHTML += '<ul>'+codigo+'</ul>'

   var listaNombres = nombres.join(', ');
   console.log(listaNombres)
    


// fechas /*********************************** */

var fechaNac = new Date();
document.getElementById('fechaNac').value = fechaNac.getFullYear() + '-'+(fechaNac.getMonth()+1).toString().padStart(2,'0')+'-'+(fechaNac.getDate()).toString().padStart(2,'0');

document.getElementById('fechaNac').onchange = function(ev) {
   var fechaNac = new Date(document.getElementById('fechaNac').value);

   var fechaActual = new Date();
  var edad = (new Date(fechaActual.getTime() - fechaNac.getTime())).getFullYear()-1970;

   document.getElementById('edad').innerHTML = edad;
};


document.getElementById('dias').onchange = function(ev){
   var fechaHoy = new Date();
   var tiempo = Number(document.getElementById('dias').value)*24*60*60*1000;
   fechaHoy.setTime(fechaHoy.getTime()+tiempo)

   document.getElementById('fechaFutura').innerHTML = fechaHoy.toLocaleDateString()+' Dia de la semana '+fechaHoy.getDay();
};



//regexp ******************

document.getElementById('bValidar').onclick = function(ev) {
   var expReg = new RegExp(document.getElementById('expresion').value);
   var log = document.getElementById('log');
   var texto = document.getElementById('texto').value;

   log.innerHTML = 'Resultado: '+expReg.test(texto)+' - Expresion: '+expReg.source+' - Elemento: '+texto+' <br>' + log.innerHTML;
};

document.getElementById('bLimpiar').onclick = function(ev) {
   document.getElementById('log').innerHTML = '';
};





