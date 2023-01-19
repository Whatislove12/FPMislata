function test() {
    var hoy = new Date();
    if (hoy.getDay()>0 && hoy.getDay()<6)
        alert('Es laborable');
    else
        alert('Es fin de semana')
}

function imprimirFrase(frase, numVezes, idDestino) {
    var codigo = "";
    while (numVezes>0) {
        codigo += frase;
        numVezes--;
    }
    if (codigo.length>0)
        document.getElementById(idDestino).innerHTML = codigo;
}

function numeroAleatorio(min, max, numDecimales) {
    var numeroAleatorio = Math.random();
    numeroAleatorio = numeroAleatorio*(max-min);
    numeroAleatorio = Math.round(numeroAleatorio);
    numeroAleatorio = numeroAleatorio+min;
    return numeroAleatorio;
};

function cargarPagina(ev) {
    //var num1 = numeroAleatorio(0,100,0);
    //var num2 = numeroAleatorio(-10,10,2);
    test();
    imprimirFrase("Fraze numero uno ",10,"frase1");
    imprimirFrase("frase numero 2 = ",5,"frase2");

    var html = '';
    for (i=0;i<100;i++)
        html += numeroAleatorio(-20,20)+', ';
    document.getElementById('aleatorios').innerHTML = html.substring(0,html.length-2);

};

window.onload = cargarPagina;