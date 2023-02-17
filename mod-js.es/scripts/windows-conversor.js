const EUROSDOLARES = 1.09;

window.onload = function (ev) {
    document.getElementById('bConvertir').onclick = function(ev) {
        var euros = Number(document.getElementById('euros').value);
        document.getElementById('dolares').value = Math.round(euros*EUROSDOLARES*100)/100
    };

    document.getElementById('bCopiar').onclick = function(ev) {
        opener.document.getElementById('cantidad').value = document.getElementById('dolares').value;
    };

    //Recoger datos de la ventana de padre
    document.getElementById('euros').value = opener.document.getElementById('cantidad').value;

};