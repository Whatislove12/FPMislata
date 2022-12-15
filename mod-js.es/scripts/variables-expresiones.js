/* Variables globales */
var nombre1 = 'Rafa';
var nombre2 = 'Irene';
var nombre3 = 'Luisa';
var nombre4 = 'Ramon';

var listaTecnologias = ['HTML', 'JAVASCRIPT', 'PHP'];

/* funciones  */
function verlista() {
    var listaTecnologias2 = ['HTML', 'JAVASCRIPT', 'PHP'];
    document.write('<h3>Lista detecnologias</h3>');
    document.write('<ul>');
    for (var i=0;i<listaTecnologias2.length;i++) {
        document.write('<li>Tecnologia: '+listaTecnologias[i]+'</li>');
    }
    document.write('</ul><hr>');
}

    let cuenta = 0;




/* codigo principal del scrip  */ 

document.write('<h2>Codigo del script principal</h2>');
document.write('<ul>');
document.write('<li>'+nombre1+'</li>');
document.write('<li>'+nombre2+'</li>');
document.write('<li>'+nombre3+'</li>');
document.write('<li>'+nombre4+'</li>');
document.write('</ul>');

verlista() 

for (var i=0;i<listaTecnologias.length;i++) {
    document.write('Tecnologia: '+listaTecnologias[i]+'<br>');
}
verlista() 
verlista() 
verlista() 



/* constante */

const MAXIMO = 100;
const COLOR_BASE = '#fff'; 
const COLOR_FONDO = '#000';

var divConstante = document.getElementById('constantes');
divConstante.style.color = COLOR_BASE;
divConstante.style.backgroundColor = COLOR_FONDO;
divConstante.style.minHeight = MAXIMO+'px';
divConstante.style.innerHTML = 'TEXTO DE EJEMPLO';


var operadores = document.getElementById('operadores');
operadores.innerHTML = '<h3>Aritmeticos</h3>';
var num = -8;
operadores.innerHTML += 'valor de num: '+num+'<br>';
num = -(num-2);
operadores.innerHTML += 'Valor de nim cambiado de signo: '+num+'<br>';
operadores.innerHTML += 'Sumando 9 a num: '+(num+9)+'<br>';
num = num -7;
operadores.innerHTML += 'restando 7: '+num+'<br>';
operadores.innerHTML += 'dividiendo por 3: '+(num / 3)+'<br>';
operadores.innerHTML += 'restando 7: '+(num / 4)+'<br>';
operadores.innerHTML += 'modulo 3: '+(num % 3)+'<br>';/* показывает остаток 3/3= 0 */
num++;
operadores.innerHTML += 'Valor de num antes de incrimentarlo: '+num+' <br>';
operadores.innerHTML += 'Num incrimentado: '+num+'<br> ';
num--;
operadores.innerHTML += 'Num descrimentado: '+num+'<br> ';
operadores.innerHTML += 'Valor de num despues de incrimentarlo: '+num+' <br>';

var num1 = 123;
var num2 = 75;

var resultado = num1 - num2;
operadores.innerHTML += 'Num1: '+num1+' Num2: '+num2+' Resultado: '+resultado+'';

/* calculadora ***********************/

