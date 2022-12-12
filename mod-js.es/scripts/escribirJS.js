/* Este JS es reutilizable */

/* VARIABLES */
var p1=20, p2=30;
var fechaActual = new Date();
      
function calcularTotal(prd1, prd2){
    return (prd1+prd2)*1.21;
}

/* 
esto funcionará así con el enlace al script abajo del documento
//retorna la fecha actual
document.getElementById('fechaActual').innerHTML = 'La fecha de hoy es ' + fechaActual.toString();

//retorna los precios de cada producto
document.getElementById('productos').innerHTML = '<li>Producto1: '+ p1*1.21 +'€</li><li>Producto2: '+ p2*1.21 +'€</li>';

//retorna la suma de los productos
document.getElementById('cTotal').innerHTML = calcularTotal(p1,p2);
*/

/* cuando se haya terminado de cargar la pagina vas a ejecutar el siguiente 
codígo, esto es para cuando el enlace al script esta en la cabecera, para ello
es necesario que el código HTML este todo terminado*/ 
/* window.onload = function(){
    //retorna la fecha actual
    document.getElementById('fechaActual').innerHTML = 'La fecha de hoy es ' + fechaActual.toString();

    //retorna los precios de cada producto
    document.getElementById('productos').innerHTML = '<li>Producto1: '+ p1*1.21 +'€</li><li>Producto2: '+ p2*1.21 +'€</li>';

    //retorna la suma de los productos
    document.getElementById('cTotal').innerHTML = calcularTotal(p1,p2);
} */

/* con este codigo haces una prueba de existencia */
/* window.onload = function(ev){
    if( document.getElementById('fechaActual'))
        document.getElementById('fechaActual').innerHTML = 'La fecha de hoy es ' + fechaActual.toString();

    if(document.getElementById('productos'))
        document.getElementById('productos').innerHTML = '<li>Producto1: '+ p1*1.21 +'€</li><li>Producto2: '+ p2*1.21 +'€</li>';

    if(document.getElementById('cTotal'))
        document.getElementById('cTotal').innerHTML = calcularTotal(p1,p2);

    if(document.getElementById('copy'))
        document.getElementById('copy').innerHTML = 'CPIFP &copy; ' + fechaActual.getFullYear();

}; */

/* otra forma de hacerlo es esta */
function iniciarPagina (ev){
    if( document.getElementById('fechaActual'))
        document.getElementById('fechaActual').innerHTML = 'La fecha de hoy es ' + fechaActual.toString();

    if(document.getElementById('productos'))
        document.getElementById('productos').innerHTML = '<li>Producto1: '+ p1*1.21 +'€</li><li>Producto2: '+ p2*1.21 +'€</li>';

    if(document.getElementById('cTotal'))
        document.getElementById('cTotal').innerHTML = calcularTotal(p1,p2);

    /* podemos crear una variable para un elemento y así a traves de esa variable
    acceder al elemento en distintos lugares
    if(document.getElementById('copy')){
        document.getElementById('copy').innerHTML = 'CPIFP &copy; ' + fechaActual.getFullYear();
        document.getElementById('copy').style="color:yellow; background-color:blue;";
    } */    

    let spanCopy =  document.getElementById('copy'); 
    if(spanCopy){
        spanCopy.innerHTML = 'CPIFP &copy; ' + fechaActual.getFullYear();
        spanCopy.style="color:yellow; background-color:blue;";
    }
    
}    
window.onload = iniciarPagina;




