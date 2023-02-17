//TAREA NUMERO 1*****************************************************
var result1 = document.getElementById('result1');
result1.style="color:red; font-size:1.5rem";
document.getElementById('bValidar').onclick = function(ev) {
    var numIntroducido = document.getElementById('numCapicua').value;
    var numInicial = numIntroducido;
    var numArrevers = numIntroducido.split('').reverse().join('');
    if (numInicial==numArrevers) result1.innerHTML='El numero es capicua';
    else result1.innerHTML='No es capicua';
};

//TAREA NUMERO 2*****************************************************
var arrays = [];
document.getElementById('bBuscar').onclick = function(ev) {
    var result2 = document.getElementById('result2');
    var frase = String(document.getElementById('frase').value).replace(/[^a-zа-яё\s|-]/gi, '').replace(/\r?\n/g, " ").toLowerCase().trim().split(' ').sort();
    var cantidadPalabr=[];
    var listaPalabr=[];
    result2.innerHTML='';
    
    for (let i=0;i<frase.length;i++){

        palabrasIguales = frase.filter(buscarPalabra=>buscarPalabra==frase[i]);
        cantidadPalabr.push(palabrasIguales.length);
        if (listaPalabr.includes(frase[i])==false){
            listaPalabr.push(frase[i]);
            result2.innerHTML+=frase[i]+': '+cantidadPalabr[i]+'<br>';
        }
    }
};

//TAREA NUMERO 3*****************************************************
var result3 = document.getElementById('result3');
window.onload = function(ev) {
    for(let i=1;i<=20;i++) {
        result3.innerHTML += '<div class="numFila"><h1>'+i+'</h1></div> <br>';
        for(let j=1;j<=10;j++)
        result3.innerHTML += '<button id="bAsiento'+j+''+i+'">'+j+'</button>'
    }
/*     for (let i=1;i<=20;i++){
        var numeroRandom=Math.random()*100;
        document.getElementById('bAsiento'+i+'')
} */


}


