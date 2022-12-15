//Variables globales
var nombre1 = 'Rafa';
var nombre2 = 'Irene';
var nombre3 = 'Luisa';
var nombre4 = 'Ramón';

let listaTecnologias = ['HTML','CSS','JAVASCRIPT','PHP'];

//Funciones
function verLista(activo) {
    if (activo) {
        var listaTecnologias2 = ['HTML2','CSS2','JAVASCRIPT2','PHP2'];
    }
    listaTecnologias[0] = 'Vacio';
    document.write('<h3>Lista de tecnologías</h3>');
    document.write('<ul>');
    for (var i=0;i<listaTecnologias.length;i++) {
        document.write('<li>Tecnología: '+listaTecnologias[i]+'</li>');
    }
    document.write('</ul><hr>');
    document.write('<h3>Lista de tecnologías 2</h3>');
    document.write('<ul>');
    for (var i=0;i<listaTecnologias2.length;i++) {
        document.write('<li>Tecnología: '+listaTecnologias2[i]+'</li>');
    }
    document.write('</ul><hr>');
}

function verTecnologias() {
    var listaTecnologias2 = ['net','apache'];
    document.write('<h3>Lista de tecnologías 2</h3>');
    document.write('<ul>');
    for (var i=0;i<listaTecnologias2.length;i++) {
        document.write('<li>Tecnología: '+listaTecnologias2[i]+'</li>');
    }
    document.write('</ul><hr>');
}

//Contador
let cuenta = 0;
function contar() {
    let input = document.getElementById('contador');
    cuenta = cuenta+1;
    input.value = cuenta;
}

//Codigo principal del script
document.write('<h2>Código del script principal</h2>');
document.write('<ul>');
document.write('<li>'+nombre1+'</li>');
document.write('<li>'+nombre2+'</li>');
document.write('<li>'+nombre3+'</li>');
document.write('<li>'+nombre4+'</li>');
document.write('</ul>');
verLista(true);

for (var i=0;i<listaTecnologias.length;i++) {
    document.write('Tecnología: '+listaTecnologias[i]+'<br>');
}

verLista(true);
verLista(true);
verTecnologias();

contar();
contar();
contar();

//CONSTANTE
const MAXIMO = 100;
const COLOR_BASE = '#fff';
const COLOR_FONDO = '#000';

var divConstante = document.getElementById('constantes');
divConstante.style.color = COLOR_BASE;
divConstante.style.backgroundColor = COLOR_FONDO;
divConstante.style.minHeight = MAXIMO+'px';
divConstante.innerHTML='TEXTO DE EJEMPLO';

//OPERADORES
var operadores = document.getElementById('operadores');
operadores.innerHTML = '<h3>Aritmeticos</h3>';
var num = -8;
operadores.innerHTML += 'Valor de num: '+num+'<br>';
num = -(num-2);
operadores.innerHTML += 'Valor de num cambiado de signo: '+num+'<br>';
operadores.innerHTML += 'Sumando 9 a num: '+ (num + 9) +'<br>';
operadores.innerHTML += 'Restando 7: '+ (num - 7) +'<br>';
operadores.innerHTML += 'Dividiendo 3: '+ (num / 3) +'<br>';
operadores.innerHTML += 'Cociente 3: '+ parseInt(num / 3) +'<br>';
operadores.innerHTML += 'Resto 3: '+ (num % 3) +'<br>';
++num; // num = num + 1;
operadores.innerHTML += 'Valor de num antes de incrementarlo: '+num+'<br>';
operadores.innerHTML += 'Num incrementado: '+ num++ +'<br>';
operadores.innerHTML += 'Valor de num despues de incrementarlo: '+num+'<br>';

var num1 = 123;
var num2 = 75;
//var resultado = num1 - ++num2;
/*num2 = num2 + 1;
var resultado = num1 - num2;*/

//var resultado = num1 - num2++;
var resultado = num1 - num2;
num2 = num2 + 1;


operadores.innerHTML += 'Num1: '+num1+' Num2: '+num2+' Resultado: '+resultado+'<br>';


/* 15/12 *************************/


var valor1 = 0;
var valor2 = false;
var valor3 = '';
var valor4 = 5;

resultado = valor1 !== valor4;
operadores.innerHTML += 'resultado de la conporacion: '+resultado+'<br>'

resultado = ' ' < 'a';
operadores.innerHTML += 'resultado de la conporacion: '+resultado+'<br>'