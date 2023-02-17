window.onload = function (ev) { 
    var titulosH2 = document.querySelectorAll('h2');
    for (let i=0;i<titulosH2.length;i++) {
        //titulosH2[i].style.setProperty('color','red');
        //titulosH2[i].style.color = 'red'; 
        titulosH2[i].style.cssText = 'color:red'; 
        titulosH2[i].style.fontFamily = 'Courier New, monospace'; 
    }

    var selector = '';
    for (let i=1;i<=6;i++) selector += 'h'+i+',';
    selector = selector.substring(0,selector.length-1);
     
    var titulos = document.querySelectorAll(selector);
    for (let i=0;i<titulos.length;i++)
    titulos[i].style.textAlign ='center';


    document.getElementById('bRed').onclick =function(ev) {
        var divs = document.querySelectorAll('body>div');
        for (let div of divs)
        div.style.backgroundColor = '#f00'
    };
    document.getElementById('bYellow').onclick =function(ev) {
        var divs = document.querySelectorAll('body>div');
        for (let div of divs)
        div.style.backgroundColor = '#ff0'
    };
    document.getElementById('bGreen').onclick =function(ev) {
        var divs = document.querySelectorAll('body>div');
        for (let div of divs)
        div.style.backgroundColor = '#0f0'
    };




/*пример замены цвета фона и цвета текста 
    document.getElementById('bAplicarColor').onclick = function(ev) {
        var color = document.getElementById('color').value;
        var property = document.getElementById('propiedad').value;
        var divs = document.querySelectorAll('body>div');

        for (let div of divs)
            div.style.setProperty(property,color);
            //if (property=='color')
              //  div.style.color = color;
            //else 
              //  div.style.backgroundColor = color;
    }; */
    
// Примера замены цвета фона и текста с помощью темпорисадора 

    document.getElementById('bAplicarColor').onclick = function(ev) {
        if (temporizador == null) {
            color = document.getElementById('color').value;
            property = document.getElementById('propiedad').value;
            divs = document.querySelectorAll('body>div');
            i=0;
            temporizador = setTimeout(cambiarColor, 1);
        };
    };
    document.getElementById('menuLateral').className ='divRectangular divTextoGrande';
    document.getElementById('bVideoInverso').onclick = function(ev) {
        document-getElementById('menuLateral').classList.toggle('videoInverso');
    };

    document.getElementById('gota').onclick = function(ev) {
        document.querySelector('section.cardLateral').classList.toggle('visible');
    };

};


var color = '';
var property ='';
var divs = [];
var i = 0;
var temporizador = null;
function cambiarColor(){
    if (i<divs.length) {
        divs[i].style.setProperty(property,color);
        i++;
        temporizador=setTimeout(cambiarColor,2000);
    } else 
        temporizador = null;
};