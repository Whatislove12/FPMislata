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