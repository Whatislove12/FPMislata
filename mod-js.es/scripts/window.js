var tempBola = null;
const POSMAX = 710;     //en px
const DESPLAZ = 10;     //en px
//variable para controlar la direccion de la bola
var direccion = 1;
//variable para el tiempo
var tiempo = 50;
//variable y constante para poder modificar la velocidad del frame
var numFrame = 0;
const INTFRAME = 10;

/*parte para el script usuario.js */
var usuarios = [];

//funcion para generar un usuariosd de prueba
function generarUsuarios(){
    var usuario = null;

    //usuario 1
    usuario = new Usuario();
    usuario.nombre = 'Usuario 1';
    usuario.setNick = 'userUno';
    usuario.setPass = 'User01';
    //agregamos el usuario al array
    usuarios.push(usuario);


    //usuario 2
    usuario = new Usuario();
    usuario.nombre = 'Usuario 2';
    usuario.setNick = 'userDos';
    usuario.setPass = 'User02';
    usuarios.push(usuario);


    //usuario 3
    usuario = new Usuario();
    usuario.nombre = 'Usuario 3';
    usuario.setNick = 'userTres';
    usuario.setPass = 'User03';
    usuarios.push(usuario);


    //usuario 4
    usuario = new Usuario();
    usuario.nombre = 'Usuario 4';
    usuario.setNick = 'userCuatro';
    usuario.setPass = 'User04';
    usuarios.push(usuario);

};

/*  ************************************************************************************************/

//funcion moverBola
function moverBola(){
    //document.querySelector('#temporizador .panel').innerHTML += '.';
    var bola = document.querySelector('#temporizador .bola');      //este es el elemento bola a mover
    var posBola;

    /* 
    //vamos a averiguar la posicion inicial de mi elemento en consola
    if(!bola.style.left){
        posBola = 0;
    } else {
        posBola = Number(bola.style.left.substring(0, bola.style.left.length-2));
    };
  
    //para que la pelota al llegar al final rebote y vuelva al inicio
    if(posBola == 0){
        direccion = 1;    
    } else if(posBola == POSMAX){
        direccion = -1; 
    };

    bola.style.left = (posBola + (direccion) * DESPLAZ) + 'px';

    //tempBola = setTimeout(moverBola, tiempo);         //como setTimeout solo se mueve una vez tenemos que repetir la llamada aqui para que se repita como el Interval
    tempBola = requestAnimationFrame(moverBola);        //realizado con requestAnimationFrame 

    //console.info('Left: '+ posBola);

    */

    //truco para intentar controlar el tiempo en un frame
    numFrame = ++numFrame % INTFRAME;
    console.info(numFrame);            //console.error(numFrame);
    if(numFrame == 0){
        if(!bola.style.left){
            posBola = 0;
        } else {
            posBola = Number(bola.style.left.substring(0, bola.style.left.length-2));
        };
      

        if(posBola == 0){
            direccion = 1;    
        } else if(posBola == POSMAX){
            direccion = -1; 
        };
    
        bola.style.left = (posBola + (direccion) * DESPLAZ) + 'px';
     
    };

    tempBola = requestAnimationFrame(moverBola);

};

function esUsuarioValido() {
    var search = location.search;
    if (search.length==0)
        return false;
    else {
        search = search.substring(1);
        search = search.split('&');
        if (search.length!=2) return false;
        if(!search[0].startsWith('user=') || !search[1].startsWith('pass='))
            return false;
        search[0] = search[0].split('=');
        search[1] = search[1].split('=');

        return validarUserPass(search[0][1],search[1][1]);
    }



}

function validarUserPass(user,pass) {
    var i =0;
    while (i<usuarios.length && usuarios[i].getNick!=user) i++;
    if (i==usuarios.length) return false;
    return usuarios[i].getPass == pass;
}

//capturamos el evento
window.onload = function(ev){
    console.clear();    //para limpiar la consola al inicio

    //al comienzo stop deshabilidado
    document.getElementById('bStop').disabled = true;

    
    document.getElementById('bPlay').onclick = function(ev){
        //Control botones
        document.getElementById('bPlay').disabled = true;
        document.getElementById('bStop').disabled = false;

        //---------------------

        //Control animacion
        if(tempBola == null){                               //animacion parada, pq el temporizador esta a null
            //tempBola = setInterval(moverBola, tiempo);
            
            //tempBola = setTimeout(moverBola, tiempo);     //transformamos el Interval en Timeout   
            
            
            
            tempBola = requestAnimationFrame(moverBola);    //requestAnimationFrame solo tiene un parametro el callback    
                                                            //un frame es un tic de reloj por lo tanto no se puede controlar el tiempo
        };

        //---------------------
    };



    document.getElementById('bStop').onclick = function(ev){
        //Control botones
        document.getElementById('bPlay').disabled = false;
        document.getElementById('bStop').disabled = true;

        //---------------------

        //Control temporizador
        if(tempBola != null){                           //temporizador en marcha, pq es distinto de null
            //clearInterval(tempBola);                  //pero el temporizador no esta a null
            //clearTimeout(tempBola);                   //transformamos el Interval en Timeout         
            cancelAnimationFrame(tempBola);             //para cancelar un requestAnimationFrame
            tempBola = null;                            //para que el temporizador quede a null
        };
    };


    /*  ************************************************************************************************/
    //para el script usuario
    generarUsuarios();
    if (!esUsuarioValido())
        location = '/window-form.html';

        document.getElementById('bVolver').onclick = function(ev) {
            //history.back();  history.forward()
            if(history.length>0)
            history.go(-1);



        };

        document.getElementById('abrirConversor').onclick = function(ev) {
            if (ventConversor==null || ventConversor.closed==true) {
                ventConversor=open('/windows-conversor.html','ventConversor','width=300,height=300,top=10,left=10,location=no,resizable=no,scrollbars=no');
                //ventConversor.document.getElementById('euros').value = document.getElementById('cantidad').value;

                }
            else{
                ventConversor.focus();
                ventConversor.moveTo(10,10)
                ventConversor.document.getElementById('euros').value = document.getElementById('cantidad').value;
            }
        };
        document.getElementById('calcularIVA').onclick = function(ev) {
            var cantidad = Number(document.getElementById('cantidad').value);
            document.getElementById('iva').value = Math.round(cantidad*0.21*100)/100;
        };
};

var ventConversor = null;

