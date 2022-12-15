document.getElementById('opSuma').onclick = function(ev) {
    var op1 = Number(document.getElementById('op1').value);
    var op2 = Number(document.getElementById('op2').value);
    document.getElementById('resultado').value = op1+op2;
}
document.getElementById('opResta').onclick = function(ev) {
    var op1 = Number(document.getElementById('op1').value);
    var op2 = Number(document.getElementById('op2').value);
    document.getElementById('resultado').value = op1 - op2;
}
document.getElementById('opProducto').onclick = function(ev) {
    var op1 = Number(document.getElementById('op1').value);
    var op2 = Number(document.getElementById('op2').value);
    document.getElementById('resultado').value = op1 * op2;
}
document.getElementById('opDivision').onclick = function(ev) {
    var op1 = Number(document.getElementById('op1').value);
    var op2 = Number(document.getElementById('op2').value);
    document.getElementById('resultado').value = op1 / op2;
}




const DOLLAR = 1.07;
/* const SIMBOLO_DOLLAR = '$'; */
const LIBRA = 0.85;
/* const SIMBOLO_LIBRA = 'Y'; */
const YEN = 1.07;
/* const SIMBOLO_YEN = 'Fr'; */


document.getElementById('usd').onclick = function(ev) {
    var mon1 = Number(document.getElementById('mon1').value);
    var simbolo = (document.getElementById('usd').value);
    document.getElementById('mon2').value = mon1*DOLLAR + ' '+simbolo;

}
document.getElementById('gbp').onclick = function(ev) {
    var mon1 = Number(document.getElementById('mon1').value);
    var simbolo = (document.getElementById('gbp').value);
    document.getElementById('mon2').value = mon1*LIBRA+ ' '+simbolo;

}
document.getElementById('jpy').onclick = function(ev) {
    var mon1 = Number(document.getElementById('mon1').value);
    var simbolo = (document.getElementById('jpy').value);
    document.getElementById('mon2').value = mon1*YEN+ ' '+simbolo;
}



document.getElementById('intercambio').onclick = function(ev) {
    var auxiliar;
    auxiliar = document.getElementById('posicion1').value;
    document.getElementById('posicion1').value = document.getElementById('posicion2');
    document.getElementById('posicion2').value = auxiliar;


};



