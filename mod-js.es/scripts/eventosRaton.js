function mostrarInformacion(ev){
    document.getElementById('idOrigen').value = ev.target.id;
    document.getElementById('idActual').value = ev.currentTarget.id;
    document.getElementById('buttons').value = ev.buttons;
    document.getElementById('detail').value = ev.detail;
    document.getElementById('pageX').value = ev.pageX;
    document.getElementById('pageY').value = ev.pageY;
    document.getElementById('layerX').value = ev.layerX;
    document.getElementById('layerY').value = ev.layerY;
    document.getElementById('clientX').value = ev.clientX;
    document.getElementById('clientY').value = ev.clientY;
    document.getElementById('screenX').value = ev.screenX;
    document.getElementById('screenY').value = ev.screenY;


};


function mostrarInformacionScroll(ev) {
    if (ev.type=='scroll')
        document.getElementById('scroll').value = window.scrollY;
    else {    
        document.getElementById('mouseX').value = ev.clientX;
        document.getElementById('mouseY').value = ev.clientY;
    }
    
};

const DISTANCIAUP = 200;
function mostrarBUp(ev) {
    if (window.scrollY>DISTANCIAUP)
    document.getElementById('bSubir').classList.add('visible');
    else 
    document.getElementById('bSubir').classList.remove('visible');


};

document.querySelector('img').addEventListener('mousedown',mostrarInformacion);

//document.querySelector('body').addEventListener('mousedown',mostrarInformacion);
window.addEventListener('mousemove',mostrarInformacionScroll);
window.addEventListener('scroll',mostrarInformacionScroll);
window.addEventListener('scroll',mostrarBUp);


document.getElementById('bBajar').addEventListener('click',function(ev){
   window.scroll({left:0,top:150,behavior:'smooth'});
});

document.getElementById('bSubir').addEventListener('click',function(ev){
    window.scroll({left:0,top:0,behavior:'smooth'});
 });