document.getElementById('validarValorNumerico').onclick = function(ev) {
    var valorNumerico = Number(document.getElementById('valorNumerico').value);
    document.getElementById('errorValorNumerico').innerHTML = '';
    if (isNaN(valorNumerico) || valorNumerico<0)
        document.getElementById('errorValorNumerico').innerHTML = 'DATO INCORRECTO';
};

document.getElementById('calcular').onclick = function(ev) {
    var valorNum1 = Number(document.getElementById('valorNum1').value);
    var valorNum2 = Number(document.getElementById('valorNum2').value);
    document.getElementById('resultadoCalculo').innerHTML = '';
    document.getElementById('errorCalcular').innerHTML = '';

    var condicionIF = isNaN(valorNum1) || isNaN(valorNum2) || valorNum1<0 || valorNum2<0;
    // if (condicionIF)
    //     document.getElementById('errorCalcular').innerHTML = 'DATOS INCORRECTOS';

    // if (!condicionIF) {
    //     let suma = valorNum1 + valorNum2;
    //     let resta = valorNum1 - valorNum2;
    //     document.getElementById('resultadoCalculo').innerHTML = 'Suma: ' + suma + ' | Resta: '+resta;
    // }
    
    if (condicionIF)
        document.getElementById('errorCalcular').innerHTML = 'DATOS INCORRECTOS';
    else {
        let suma = valorNum1 + valorNum2;
        let resta = valorNum1 - valorNum2;
        document.getElementById('resultadoCalculo').innerHTML = 'Suma: ' + suma + ' | Resta: '+resta;
    }
};

document.getElementById('validarValorIntroducido').onclick = function(ev) {
    var numero = Number(document.getElementById('valorIntroducido').value);
    if (isNaN(numero) || numero<1 || numero>30) {
        document.getElementById('resultadoValidarValorIntroducido').innerHTML = 'DATOS INCORRECTOS';
        document.getElementById('resultadoValidarValorIntroducido').style = 'color:red';
    }
        else if (numero>=1 && numero<=10) {
            document.getElementById('resultadoValidarValorIntroducido').innerHTML = 'NUMERO PERTENECIENTE A LA PRIMERA DECENA';
            document.getElementById('resultadoValidarValorIntroducido').style = 'color:black';
        }
            else if (numero>=11 && numero<=20) {
                document.getElementById('resultadoValidarValorIntroducido').innerHTML = 'NUMERO PERTENECIENTE A LA SEGUNDA DECENA';
                document.getElementById('resultadoValidarValorIntroducido').style = 'color:black';
            }
                 else {
                    document.getElementById('resultadoValidarValorIntroducido').innerHTML = 'NUMERO PERTENECIENTE A LA TERCERA DECENA';
                    document.getElementById('resultadoValidarValorIntroducido').style = 'color:black';
                 };
};


document.getElementById('calcularOperacion').onclick = function(ev) {
    var operacion = document.getElementById('operacion').value;
    var operando1 = document.getElementById('operando1').value;
    var operando2 = document.getElementById('operando2').value;
    var resultado = null;
    operando1 = Number(operando1);
    operando2 = Number(operando2);


    operacion = operacion.toLowerCase();

    switch (operacion) {
        case 's':
        case 'sumar':
            operacion = 'sumar';
            resultado = operando1 + operando2;
            break;
        case 'r':
        case 'restar':
            operacion = 'restar';
            resultado = operando1 - operando2;
            break;
        case 'multiplicar':
            resultado = operando1 * operando2;
            break; 
        case 'dividir':
            resultado = operando1 / operando2;
            break;
        case 'intercambiar':
            let aux = operando1;
            operando1 = operando2;
            operando2 = aux;
             break;
        case 'cambiar':
            operando1 = -operando1;
            operando2 = -operando2;
            break;   
            
    };


    switch (operacion) {
        case 'sumar':
        case 'restar':
        case 'multiplicar':
        case 'dividir':
            alert('El resultado de la operacion('+operacion+') es:'+resultado);
            break;
        case 'intercambiar':
        case 'cambiar':
            document.getElementById('operando1').value = operando1;
            document.getElementById('operando2').value = operando2;
            break;
    };
    
};


const NUM_INPUTS = 5;
document.getElementById('buscarPares').onclick = function (ev) {
    var pos = 1;
    var numPares = 0;
    while (pos<=NUM_INPUTS && document.getElementById('num' +pos).value!=0) {
        if (document.getElementById('num' +pos).value%2==0) numPares++;
        pos++;
    };
    document.getElementById('numPares').innerHTML = numPares;

};

document.getElementById('bContarNumeros').onclick = function(ev) {
    var contador = 0;
    var entrada;
    do {
        entrada = Number(prompt('introduce un valor numerico'));
        if (!isNaN(entrada)) contador ++;
    } while (!isNaN(entrada));
    document.getElementById('numerosContados').innerHTML = contador;
};


document.getElementById('numTabla').onchange = function(ev) {
    var numTabla = document.getElementById('numTabla').value;
    var div = document.getElementById('tablaMultiplicar');
    div.innerHTML = '';


    if (numTabla == parseInt(numTabla))
        for (let i=1;i<=10 ;i=i+1)  
            div.innerHTML += i + 'X' + numTabla + '=' + (i*numTabla) +'<br>';
        
/*             if (numTabla == parseInt(numTabla)) {
                let i=1;
                while (i<=10) {
                    div.innerHTML += i + 'X' + numTabla + '=' + (i*numTabla) +'<br>';
                    i++;
                }
            } */

};


document.getElementById('bCargarImagenes').onclick = function(ev) {
    var nombreImagenes = [
        'num1.jpg',
        'num2.jpg',
        'num3.jpg',
        'num4.jpg',
        'num5.jpg',
        'num6.jpg'
    ];

/*     var div = document.getElementById('imagenesActuales');
    div.innerHTML = '';
    for (let ruta of nombreImagenes)
        div.innerHTML += '<img src="/image/'+ruta+'">' */

/*         var div = document.getElementById('imagenesActuales');
        div.innerHTML = '';
        for (let ruta of nombreImagenes) {
            if (ruta == 'num3.jpg') break;
            div.innerHTML += '<img src="/image/'+ruta+'">'
        } */

        var div = document.getElementById('imagenesActuales');
        div.innerHTML = '';
        for (let ruta of nombreImagenes) {
            if (ruta == 'num1.jpg' || ruta == 'num5.jpg') continue;
            div.innerHTML += '<img src="/image/'+ruta+'">'
        }
};