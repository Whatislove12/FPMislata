/* function alinearCEntro() {
    document.querySelector('h2').style.textAlign='center'
}

function alinearIsquerda() {
    document.querySelector('h2').style.textAlign='left'
}

function recuperarColor() {
    let titulosH2 = document.querySelectorAll('h2');
    for(let i =0;i<titulosH2.length;i++)
    titulosH2[i].style.color='';
}

function alinear(titulosH2,tipoAlineacion) {
    titulosH2.style.textAlign=tipoAlineacion;
}


// *****************Propiedades JS **********************
function presionarLetra(){
    document.getElementById('palabra').value += this.innerHTML;
    console.log(this.innerHTML);    
}

function borrarPalabra(){
    document.getElementById('palabra').value='';


}


function init (){
    let= abc= 'ABCDEFGHJKLMNÑOPRST';
    let div = document.getElementById('abecedario');
    let html = '';
    for (let i=0; i<abc.length;i++) {
        html += '<button type="button">'+abc.charAt(i)+'</button>';
    }
    div.innerHTML = html;

    let buttons=document.querySelectorAll('#abecedario button');
    for (let i =0;i<buttons.length;i++) {
        buttons[i].onclick = presionarLetra;
    }
    document.querySelector('#bReset').onclick=borrarPalabra;
}

window.onload = init; */


function alinearCEntro() {
    document.querySelector('h2').style.textAlign='center'
}

function alinearIsquerda() {
    document.querySelector('h2').style.textAlign='left'
}

function recuperarColor() {
    let titulosH2 = document.querySelectorAll('h2');
    for(let i =0;i<titulosH2.length;i++)
    titulosH2[i].style.color='';
}

function alinear(titulosH2,tipoAlineacion) {
    titulosH2.style.textAlign=tipoAlineacion;
}


// *****************Propiedades JS **********************







/* window.onload = function (){
    let titulosH2 = document.querySelectorAll('h2');
    for(let i=0;i<titulosH2.length;i++) {
        titulosH2[i].onclick=function(){
            this.style.color='red';
        };
        titulosH2[i].onmouseenter=function(){
            this.style.textAlign='center';

        };
        titulosH2[i].onmouseleave=function(){
            this.style.textAlign='left';

        };

    }


    let= abc= 'ABCDEFGHJKLMNÑOPRST';
    let div = document.getElementById('abecedario');
    let html = '';
    for (let i=0; i<abc.length;i++) {
        html += '<button type="button">'+abc.charAt(i)+'</button>';
    }
    div.innerHTML = html;

    let buttons=document.querySelectorAll('#abecedario button');
    for (let i =0;i<buttons.length;i++) {
        buttons[i].onclick = function (){
            document.getElementById('palabra').value += this.innerHTML;
            console.log(this.innerHTML);    
        };
    }
    document.querySelector('#bReset').onclick = function (){
        document.getElementById('palabra').value='';
    
    
    };
}; */


// refObjeto.addEventListener('nombreEvento',function);

window.addEventListener('load',function (){
    let titulosH2 = document.querySelectorAll('h2');
    for(let i=0;i<titulosH2.length;i++) {

        titulosH2[i].addEventListener('click',function(){
            this.style.color='red'});

        titulosH2[i].addEventListener('mouseenter', function(){
            this.style.textAlign='center'});

        titulosH2[i].addEventListener('mouseleave',function(){
            this.style.textAlign='left'});

    }


    let= abc= 'ABCDEFGHJKLMNÑOPRST';
    let div = document.getElementById('abecedario');
    let html = '';
    for (let i=0; i<abc.length;i++) {
        html += '<button type="button">'+abc.charAt(i)+'</button>';
    }
    div.innerHTML = html;

    let buttons=document.querySelectorAll('#abecedario button');
    for (let i =0;i<buttons.length;i++) {
        buttons[i].addEventListener('click', function (){
            console.log(this.innerHTML);    
            document.getElementById('palabra').value += this.innerHTML });
    }
    document.querySelector('#bReset').onclick = function (){
        document.getElementById('palabra').value='';
    
    
    };
/*     document.querySelector('#bReset').addEventListener('click', botonReset);
    document.querySelector('#bReset').addEventListener('dbclick', botonReset);
    document.querySelector('body').addEventListener('dbclick', botonReset); */

    document.querySelector('#eventosTeclado').onkeypress = function(ev){
        console.log('mayusculs: ' + ev.shiftKey);
        console.log('clase de la tecla ' + ev.key);
        console.log('Codigo numerico ' + ev.code);
        console.log('Valor unicode ' + ev.charCode);
        if(ev.code == 'f4'){
            alert('tecla f4 presionada')
        }
        if(ev.code == 'KeyA'){
            ev.preventDefault();
            ev.target.value += '_';
        }
    } 

});

function botonReset(ev) {
    document.querySelector('#palabra').value='';
/*     switch(ev.button) {
    case 0:
        console.log('button primario');
    case 1:
        console.log('button central');
    case 2:
        console.log('button secundario');
    };
    console.log(ev.type);
    console.log('Actual' + ev.currentTarget.id);
    console.log('Original' + ev.target.id); */




};
