


function func() {
    var resultado;
    var operador1 = Number(document.getElementById('operador1').value );
    var operador2 = Number(document.getElementById('operador2').value );

    switch (op) {
        case '+':
            resultado = operador1 + operador2;
        break;
        case '-':
            resultado = operador1 - operador2;
        break;
        case '*':
            resultado = operador1 * operador2;
        break;
        case '/':
            resultado = operador1 / operador2;
        break;
    }
    document.getElementById('resultado').innerHTML = resultado;
}