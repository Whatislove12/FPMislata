document.getElementById('bValidar').onclick = function(ev){
    
    var numCuenta = document.getElementById('numCuenta').value;
    var resultado = document.getElementById('resultado');
    var regExp = /^[0-9]{20}$/;

    if(regExp.test(numCuenta)){
        resultado.innerHTML = 'El dato no tiene el formato adecuado';
    } else {
        var entSuc = numCuenta.substr(0,8);
        var dc = numCuenta.substr(8,2);
        var cuenta = numCuenta.substr(10);     //es igual que poner numero.substr(10,10) sino ponemos el segundo valor coge hasta el final
        var digitosControl = calcularDigito(entSuc) + calcularDigito(cuenta);
        
        if(dc == digitosControl){
            resultado.innerHTML = 'Cuenta correcta';
        } else {
            resultado.innerHTML = 'Cuenta incorrecta';
        };
    };
};

function calcularDigito(numero){
    var pesos = [1,2,4,8,5,10,9,7,3,6];
    var suma = 0;

    if(numero.length<10){
        numero = '00' + numero;
    };

    for (var i=0; i<pesos.length; i++){
        suma += pesos[i]*numero.charAt(i);
    };

    var resto = 11-(suma%11);
    if(resto == 10){
        resto = 1;
    } else if (resto == 11) {
        resto = 0;
    };

    return resto.toString();
};