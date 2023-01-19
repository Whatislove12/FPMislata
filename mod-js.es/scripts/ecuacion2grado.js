document.getElementById('bResolver').onclick = function(ev) {
    var soluciones = document.getElementById('soluciones');
    
    //Recoger Datos
    var a = Number(document.getElementById('a').value);
    var b = Number(document.getElementById('b').value);
    var c = Number(document.getElementById('c').value);

    if (validarDatos(a,b,c)) {
        //Calcular si datos correctos
        var raiz = Math.sqrt(Math.pow(b,2)-4*a*c);
        var sol1 = Math.round((-b+raiz)/(2*a)*1000)/1000;
        var sol2 = Math.round((-b-raiz)/(2*a)*1000)/1000;
        //Representar resultados si datos correctos
        if (sol1==sol2) {
            soluciones.innerHTML = '<span>Solucion doble: '+sol1+'</span>';
        } else {
            soluciones.innerHTML = '<span>Solucion 1: '+sol1+'</span><br>';
            soluciones.innerHTML += '<span>Solucion 2: '+sol2+'</span>';
        }
    } else {
        //Indicar que los datos introducidos no son correctos
        soluciones.innerHTML = '<span style="color:red">Los datos introducidos no son correctos. La ecuación no es de segundo grado ó la ecuación no tiene solución real</span>';
    }
};

function validarDatos(a,b,c) {
    var validos = true;
    validos = validos && !isNaN(a) && a!=0;
    validos = validos && !isNaN(b);
    validos = validos && !isNaN(c);
    validos = validos && (Math.pow(b,2)-4*a*c)>=0;
    return validos;
}