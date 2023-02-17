class Foto {
    fuente = '';
    fecha = null;
    autor = '';
    urlImg ='';
    enlace = '';
    likes = 0;
    comments =0;
    vistas = 0;
    descripcion ='';
    posicion = 0;
    //fotoSrc = '';

    constructor (fuente,posicion,descripcion) {
        this.fuente = fuente;
        this.fecha = new Date();
        //this.enlace = 'esto es enlace' чтобы это вывеси можно писать сюда значение, а можно и в дргуой документ(тареаобхето)
        this.posicion = posicion;   
        this.enlace = this.enlace;
        //this.fotoSrc = this.fotoSrc;

        //this.descripcion = descripcion;     

    }
    get img() {
        return '<img src="'+this.urlImg+'" width="100px" height="70px">';
    }


fichaObjeto() {
    var html = '';
    html += '<div>';
     html += '<h2>' + this.fuente + ' '+ this.posicion + '</h2>' ;
     html += '<ul>';
     html += '<li>' +  this.fecha.getHours() + ':' + this.fecha.getMinutes() + '</li>';
     html += '<li>' +  this.autor + '</li>';
     html += '<li>' +  this.img + '</li>';
     html += '<li>' +  this.enlace + '</li>';
     html += '<li>' +  this.likes + '</li>';
     html += '<li>' +  this.comments + '</li>';
     html += '<li>' +  this.vistas + '</li>';
     html += '</ul>';
     html += '</div>';

     

    
     return html;
};

/* compararUrl(){
    var j=0;
    do {
        if(fotos[i].urlImg==fotos[j].urlImg){
            j=i;
            alert('Este foto ya existe');
        };
        j++
    }
    while(i!==j)  
 
}; */


};



 