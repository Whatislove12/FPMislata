/* CAPTURAR EVENTOS */

/* METODO WRITE ************************/
document.getElementById('noPulsar').onclick = function (ev){
    document.write('<p>Texto agregado por el botón no pulsar</p>');
};


/* METODO ALERT ************************/
document.getElementById('alerta').onclick = function (ev){
    window.alert('Este es un mensaje de alerta lanzado desde JS');  /* se pueden lanzar mensajes */
    alert(125+42);      /* podemos lanzar también resultados */
};


/* PROPIEDAD innerHTML ************************/
document.getElementById('mostrarLista').onclick = function(ev){
    var contenedor = document.getElementById('lista');
    //contenedor.innerHTML += '<ul>'; si lo hubieramos puesto así se agregarían listas sin parar
    contenedor.innerHTML = '<ul>';
    contenedor.innerHTML =  contenedor.innerHTML + '<li>Item 1</li>';
    contenedor.innerHTML =  contenedor.innerHTML + '<li>Item 2</li>';
    contenedor.innerHTML =  contenedor.innerHTML + '<li>Item 3</li>';
    contenedor.innerHTML =  contenedor.innerHTML + '<li>Item 4</li>';
    /* 'contenedor.innerHTML =  contenedor.innerHTML +', se puede reducir de la siguiente forma*/
    /* el operador += deben ir juntos sin espacio */
    contenedor.innerHTML += '</ul>';         
};


/* PROPIEDAD VALUE ************************/
/* value a la derecha del simbolo = es de lectura */
/* value a la izquierda del simbolo = es de escritura */
document.getElementById('calcularEdad').onclick = function (ev) {
    let anyoNac = document.getElementById('anyoNac').value;     /* aqui value esta leyendo el valor de un elemento */
    let anyoAct = (new Date()).getFullYear();
    document.getElementById('edad').value = anyoAct - anyoNac;  /* aqui value esta escribiendo un valor en un elemento */

};


/* METODO CONFIRM ************************/
document.getElementById('borrarDocumento').onclick = function (ev) {
    let respuesta = false;
    respuesta = window.confirm('¿Deseas eliminar el documento?');  /* al ser de Window se puede poner asi tambien => respuesta = confirm('¿Deseas eliminar el documento?'); */
    if(respuesta == true)
        document.write('');     /* document.write borra todo lo que haya en la pantalla */
    else
        alert('Usted ha decidido no eliminar el documento');

};

document.getElementById('solicitarEdad').onclick = function (ev) {
    let respuesta = 0;
    respuesta = prompt('¿Dime tu edad?', 18);
    if(respuesta < 18)
        document.write('');

}








/* METODO CONFIRM ************************/










