
class Punto{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.color = '';
    }

    print(){
        return '(' + this.x + ',' + this.y + ',' + this.color + ')';    //devolverá los valores de la siguiente forma (7, 9, red)
    }
}


window.onload = function(ev) {
    /* DATOS POR VALOR VS POR REFERENCIA **************************************/
    let a = 7;  //Dato numerico
    let b = a;  //Dato numerico

    a =  a + 1;  //Incrementamos a

    a =  a + 5;  // a = 12
    b =  b + 1;  // b = 8

    let refVal = document.getElementById('valorReferencia');    //refVal es un objeto
    refVal.innerHTML = '<h3>VALOR</h3>';
    refVal.innerHTML += '<ul><li>Variable a: '+ a +'</li></ul>';
    refVal.innerHTML += '<ul><li>Variable b: '+ b +'</li></ul>';


    let refValNew = refVal;
    /* Para la clase Punto */
    let p1 = new Punto();
    //creamos un objeto y le asignamos valores
    p1.x = 7;
    p1.y = 9;
    p1.color = 'blue';

    //creamos una nueva variable y le pasamos los valores del anterior objeto
    let p2 = p1;
    p2.x = -5;
    p2.y = 3;
    p2.color = 'red';

    /* refVal.innerHTML += '<h3>REFERENCIA</h3>';
    refVal.innerHTML += '<ul><li>Variable p1: '+ p1.print() +'</li></ul>';
    refVal.innerHTML += '<ul><li>Variable p2: '+ p2.print() +'</li></ul>'; */
    //daran ambas referencias el mismo resultado
    refValNew.innerHTML += '<h3>REFERENCIA</h3>';   /* ponemos aqui += para que no borre la información del ejercicio anterior */
    refValNew.innerHTML += '<ul><li>Variable p1: '+ p1.print() +'</li></ul>';
    refValNew.innerHTML += '<ul><li>Variable p2: '+ p2.print() +'</li></ul>';


    /* CLONACIÓN **********************************************/
    /* para que p1 y p2 se comportaran como los elementos de arriba sería necesaria la
    clonación */
    let p3 = new Punto();   //aqui hay un punto nuevo
    p3.x = p1.x;
    p3.y = p1.y;
    p3.color = p1.color;

    p3.x = 125;
    p3.color = 'brown';

    refValNew.innerHTML += '<h3>CLONACION</h3>';  
    refValNew.innerHTML += 'Variable p3: '+ p3.print();


    /* hexadecimal */
    //p = 125a;   /* así da error */
    p = 0x125a; /* ssí no da error */



    /* TIPOS NUMERICOS ****************************************************/

    var numDec = 148;
    var numOct = 0147;
    var numHex = 0x1bbc5;
    var numNotC = 0.147e3;
    var resultado = numDec/0;
    resultado = Number('pepe');     //dara error porque pepe no se puede convertir en numero
    resultado = Number('5678');     //es una cadena de texto pero la convertira en numero
    resultado = Number('56-78');    //dara error por el guión que no es un numero
    var infinito = Infinity;

    var divNumericos = document.getElementById('numericos');

    divNumericos.innerHTML = '<ul>';
    divNumericos.innerHTML += '<li><b>numDec</b>: ' + numDec + '</li>';
    divNumericos.innerHTML += '<li><b>numOct</b>: ' + numOct + '</li>';
    divNumericos.innerHTML += '<li><b>numHex</b>: ' + numHex + '</li>';
    divNumericos.innerHTML += '<li><b>numNotC</b>: ' + numNotC+ '</li>';
    divNumericos.innerHTML += '<li><b>resultado</b>: ' + resultado + '</li>';
    divNumericos.innerHTML += '<li><b>infinito</b>: ' + infinito + '</li>';
    divNumericos.innerHTML += '</ul>';


    /* BOOLEANOS ********************************************************/
    var activo = false;
    var activo = 0;
    var activo = 157;

    var divLogicos = document.getElementById('logicos');

    if(activo){
        divLogicos.innerHTML = 'Variable activada';
    } else {
        divLogicos.innerHTML = 'Variable desactivada';
    }


    /* STRINGS **************************************************/

    var divStrings = document.getElementById('strings');
    var curso = 'Curso de Desarrollo Web';
    var centro = "CPIFP de 'Mislata'";
    var cadenaVacia = '';

    /* divNumericos.innerHTML = ''; */    //así vaciamos un div o lo que sea desde JS

    /* var descripcion = 'Este curso "Web" implementa varias \'tecnologias\' como veremos en su desarrollo'; */
    /* var descripcion = 'Este curso "Web" implementa varias \'tecnologias\' como veremos en su desarrollo \*'; */
    /* var descripcion = 'Este curso "Web" implementa varias \'tecnologias\' como veremos en su desarrollo \\*'; */
    var descripcion = 'Este curso "Web" implementa varias \'tecnologias\' como veremos en su desarrollo \u00c6';
    
    divStrings.innerHTML = '<ul>';
    divStrings.innerHTML += '<li><b>Curso</b>: ' + curso + '</li>';
    divStrings.innerHTML += '<li><b>Centro</b>: ' + centro + '</li>';
    divStrings.innerHTML += '<li><b>Vacia</b>: ' + cadenaVacia + '</li>';
    divStrings.innerHTML += '<li><b>Descripcion</b>: ' + descripcion+ '</li>';
    divStrings.innerHTML += '</ul>';


    /* CONVERSIONES */

    var numFlotante = 145678.26544847745554;

    var divNumericos = document.getElementById('strings');
    divNumericos.innerHTML = '<ul>';
    divNumericos.innerHTML += '<li><b>numDec</b>: ' + String(numDec) + '</li>';
    divNumericos.innerHTML += '<li><b>numOct</b>: ' + numOct + '</li>';
    divNumericos.innerHTML += '<li><b>numHex</b>: ' + numHex.toString(16) + '</li>';
    divNumericos.innerHTML += '<li><b>numHex</b>: ' + numHex.toString(2) + '</li>';
    divNumericos.innerHTML += '<li><b>numNotC</b>: ' + numNotC+ '</li>';
    divNumericos.innerHTML += '<li><b>numFlotante</b>: ' + numFlotante + '</li>';
    divNumericos.innerHTML += '<li><b>numFlotante</b>: ' + numFlotante.toFixed(3) + '</li>';        //estos cambios son solo visuales internamente sigue siendo el numero original
    divNumericos.innerHTML += '<li><b>numFlotante</b>: ' + numFlotante.toExponential(3) + '</li>';  //estos cambios son solo visuales internamente sigue siendo el numero original
    divNumericos.innerHTML += '<li><b>numFlotante</b>: ' + numFlotante.toPrecision(8) + '</li>';    //estos cambios son solo visuales internamente sigue siendo el numero original
    divNumericos.innerHTML += '<li><b>numFlotante</b>: ' + numFlotante.toPrecision(5) + '</li>';    //estos cambios son solo visuales internamente sigue siendo el numero original 
    divNumericos.innerHTML += '<li><b>numFlotante</b>: ' + numFlotante.toPrecision(6) + '</li>';    //estos cambios son solo visuales internamente sigue siendo el numero original 
    divNumericos.innerHTML += '<li><b>numFlotante</b>: ' + numFlotante.toPrecision(7) + '</li>';    //estos cambios son solo visuales internamente sigue siendo el numero original 
    divNumericos.innerHTML += '<li><b>resultado</b>: ' + resultado + '</li>';
    divNumericos.innerHTML += '</ul>';


   /* CONVERSION DE TEXTO A NUMERO */
    document.getElementById('bRestar').onclick = function(ev){
        var num1 = prompt('Operando primero: ');
        var num2 = prompt('Operando segundo: ');

        alert(num1 - num2);   //funciona bien porque la conversion es automatica
    }

    document.getElementById('bConcatenar').onclick = function(ev){
        var num1 = prompt('Operando primero: ');
        var num2 = prompt('Operando segundo: ');

        alert(num1 + num2);         //no funciona bien porque no lo suma lo concatena
    }

    document.getElementById('bSumar').onclick = function(ev){
        var num1 = prompt('Operando primero: ');
        var num2 = prompt('Operando segundo: ');

        alert(Number(num1)+Number(num2));    //convierto las cadenas de texto a numero y ya puedo sumar
    }


    /* PARSE */

    document.getElementById('bSumarHex').onclick = function(ev){
        var num1 = prompt('Operando hexadecimal primero: ');    //aqui son cadenas de texto
        var num2 = prompt('Operando hexadecimal segundo: ');

        num1 = parseInt(num1,16);   //ahora se han convertido en numero binarios
        num2 = parseInt(num2,16);

        alert((num1+num2).toString(16));    //convertimos los numeros binarios a hexadecimal
    }


    /* OBJETOS */
/* OBJETO PROPIO DE JS************************************** */

var conjuntoNombre = new Array();
conjuntoNombre.push('nombre 1');
conjuntoNombre.push('nombre 2');
conjuntoNombre.push('nombre 3');
conjuntoNombre.push('nombre 4');
conjuntoNombre.push('nombre 5');
conjuntoNombre.push('nombre 6');
conjuntoNombre.push('nombre 7');



var div=document.getElementById('objects');
div.innerHTML = '<h3>Objectos de JS</h3><ul>'
for (var i=0;i<conjuntoNombre.length;i++) {
    div.innerHTML += '<li>'+conjuntoNombre[i].toUpperCase()+'</li>'
}
div.innerHTML += '</ul>'


/* objeto del navegador ****************** */
div.style="width: 80%; margin: 20px auto; padding: 5px; border: 1px solid black;"

/* objetos de programador ************ */

var bannerGoogle = new Banner();
bannerYahoo.id = 'bGoogle';
bannerGoogle.image = '/image/google.jpg';
bannerGoogle.url = 'https://google.es';
bannerGoogle.texto = 'Buscador google';
div.innerHTML += bannerGoogle.html();

var bannerYahoo = new Banner();
bannerYahoo.id = 'bYahoo';
bannerYahoo.image = '/image/yahoo.jpg';
bannerYahoo.url = 'https://yahoo.es';
bannerYahoo.texto = 'portal de yahoo';
div.innerHTML += bannerYahoo.html();




}

/* crear la plantilla **************************/

function Banner() {

    /* propiedades  */ 

    this.id='';
    this.images='';
    this.url='/';
    this.texto='';  

/* metodo*** */

    this.html = function() {
        var codHtml = '<a id="'+this.id+'" style="box-sizing:border-box; display: inline-flex;flex-direction: column; justify-content: flex-end; align-items: center; width: 150px;height: 150px; background-image: url('+this.image+'); background-size: cover; background-color: white; border: 1px solid black;" href="'+this.url+'"><span style="background-color: #0008; color: white; padding: 10px;" >'+this.texto+'</span></a>';


        return codHtml;
    };
/* objetos del tipo literal  */ 

var vinculo = {texto:'google',
                url:'https://google.es'};
div.innerHTML += representarVinculo(vinculo);
};

function representarVinculo(miVinculo) {
    return '<a href="'+miVinculo.url+'">'+miVinculo.texto+'</a>';
};


