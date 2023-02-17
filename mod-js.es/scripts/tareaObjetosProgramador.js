var fotos = [];
var i=0;
var nomFuente = '';
var nomAutor = '';
var urlFoto = '';





 document.getElementById('bElimUlt').onclick = function(ev) {
    fotos.pop();
    document.getElementById('result').innerHTML = '';
    for (let i=0;i<fotos.length;i++) document.getElementById('result').innerHTML += fotos[i].fichaObjeto('div');
    if (i>0) i--;
};  


document.getElementById('bElimTodo').onclick=function(ev) {
    i=0;
    fotos = [];
    document.getElementById('result').innerHTML = '';
};


document.getElementById('bAdd').onclick = function(ev) {
    urlFoto=document.getElementById('urlFoto').value;
    generarFotos();

    if(i>0) {
        var siExiste = false;
        for(let j=0;j<=(i-1);j++){
            if(fotos[i].urlImg==fotos[j].urlImg){
                alert('Este foto ya existe');
                siExiste=true;
                fotos.pop();
            }
        }
        if(siExiste==false) {
            document.getElementById('result').innerHTML += fotos[i].fichaObjeto('div');
            i++;
        }
    }
    else  {document.getElementById('result').innerHTML += fotos[i].fichaObjeto('div');
    i++}
};


function generarFotos() {
    var foto = null;
    nomFuente=document.getElementById('nomFuente').value;
    nomAutor=document.getElementById('nomAutor').value;


        foto = new Foto();
        foto.posicion =i+1;
        foto.fuente = nomFuente;
        foto.autor = nomAutor;
        foto.urlImg = urlFoto;
        //foto.img = '<img src="'+urlFoto+'" width="100px" height="70px">';
        foto.enlace = 'url del foto: '+urlFoto.substring(8,urlFoto.indexOf('/',8));
        foto.likes = parseInt(Math.random()*100) + '🖤';
        foto.comments = parseInt(Math.random()*100);
        foto.vistas = parseInt(Math.random()*100);
        foto.descripcion = ' descripcion';
        fotos.push(foto);
    

};





//fotos[0].urlImg





















// el codigo para añadir foto https://ru.stackoverflow.com/questions/708673/%D0%92%D0%BE%D0%B7%D0%BC%D0%BE%D0%B6%D0%BD%D0%BE-%D0%BB%D0%B8-%D0%BF%D0%BE%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D1%8C-%D0%B7%D0%B0%D0%B3%D1%80%D1%83%D0%B6%D0%B5%D0%BD%D0%BD%D0%BE%D0%B5-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D1%87%D0%B5%D1%80%D0%B5%D0%B7-js