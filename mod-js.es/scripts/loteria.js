/*
document.getElementById('obtenerNumero').onclick = function(ev) {
    var numero;
    for (let i=1;i<=5;i++) {
        do {
            numero = Math.floor(Math.random()*10);
        } while (numero==10);
        document.getElementById('num'+i).src = '/images/num/number-'+numero+'.png';
    }
};
*/


function obtenerDigito() {
    var numero=null;
    do {
        numero = Math.floor(Math.random()*10);
    } while (numero==10);
    return numero;
}

function obtenerNumeroCompleto(longitud) {
    var numero = '';
    for (let i=1;i<=longitud;i++)
        numero += obtenerDigito();
    return numero;
}


document.getElementById('obtenerNumero').onclick = function(ev) {
    var numero;
    for (let i=1;i<=5;i++) {
        numero = obtenerDigito();
        document.getElementById('num'+i).src = '/images/num/number-'+numero+'.png';
    }
};

document.getElementById('obtenerSecuencia').onclick = function(ev) {
    let div = document.getElementById('secuencia');
    div.innerHTML='';
    let numero=null;
    for (let i=1;i<=100;i++) {
        numero = obtenerNumeroCompleto(5);
        div.innerHTML += '<span>'+numero+'</span>';
    }

}
