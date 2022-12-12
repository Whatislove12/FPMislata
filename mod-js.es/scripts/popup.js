/* document.getElementById('abrirPopup').onclick =function(ev){
    document.getElementById('popUp').style = "visibility: visible; opacity:1";
}

document.getElementById('cerrarPopup').onclick =function(ev){
    document.getElementById('popUp').style = "visibility: hidden; opacity:0";
} */

document.getElementById('abrirPopup').onclick =function(ev){
    document.getElementById('popUp').classList.toggle('visible');
}

document.getElementById('cerrarPopup').onclick =function(ev){
    document.getElementById('popUp').classList.toggle('visible');
}


