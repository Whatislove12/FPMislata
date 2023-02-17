class Libro extends Producto {
    // propiedades
        //clases
            autores = [];
            editoriales = [];
            isbn = '';
            tematica = '';
            __edadMinimaRecomendada = 0;
            fechaPrimeraEdicion = null;

        //miembro

    
    //constructor
        constructor (isbn,nombre,autor,tematica,fecha) {
            super(nombre); //invocando al constructor de la clase padre
            this.isbn = isbn;

            this.tematica = tematica || '';
            this.tematica = this.tematica.trim();
            this.fechaPrimeraEdicion = fecha || null;
           
            autor = autor || '';
            autor = autor.trim();
            if (autor.length>0)
                this.autores.push(autor);
            
            this.iva = 0.04;
        }


    //get/Set
        get getEdadMinima() {
            return this.__edadMinimaRecomendada;
        }
        set setEdadMinima(eda) {
            if (edad>=0)
                this.__edadMinimaRecomendada = parseInt(edad);
        }

    //Metodos
        //clases

        //miembro

// sobre escritura de metodos ********************************************
fichaProducto(etiqueta, tipoLista, clases){
    var html = '';
    tipoLista = tipoLista || 'ul';      //tipoLista es opcional
    clases = clases || '';              //clases es opcional, se puede comprobar si hay clases con .length

    if(this.esValida('tag', etiqueta) && this.esValida('list', tipoLista)){
        //html += '<' + etiqueta + '>';     //puedo dividirla en varias lineas
        html += '<' + etiqueta;     
        if(clases.length > 0 || this.activo || this.seNecesitaStock()){
            let clasesAdd = '';
            clasesAdd += clases.length > 0 ? clases : '';           //si clases.length es mayor que 0 ? (true) devuelve clases : (false) devuelve cadena vacia
            clasesAdd += !this.activo ? ' noActivo' : '';           //si not Activo ? (true) devuelve no Activo : (false)
            clasesAdd += this.seNecesitaStock() ? ' sinStock': '';
            html += ' class="' + clasesAdd.trim() + '"';            //con trim() quitaremos los espacios en blanco que hayan podido quedar
        }    
        html += '>';  
        html += '<h2>' + this.id + ' - ' + this.nombre +' ('+this.isbn+')</h2>';             
        html += '<' + tipoLista + '>';
        html += '<li><b>Tematica: </b>' + this.tematica + '</li>';
        html += '<li><b>Fecha primera edicion: </b>' +(this.fechaPrimeraEdicion!=null?this.fechaPrimeraEdicion.toLocaleDateString():'Desconocida')+ '</li>';          
        html += '<li><b>Total: </b>' + this.precioConIVA() + '</li>';
        html += '<li><b>Stock: </b>' + this.getStock + '</li>';
        html += '<li><b>Stock Mínimo: </b>' + this.getMinStock + '</li>';
        html += '<li><b>Stock Máximo: </b>' + this.getMaxStock + '</li>';
        html += '<li><b>Reponer: </b>' + (this.seNecesitaStock() ? 'SI ('+ this.unidadesASolicitar() +')' : 'NO') + '</li>';
        html += '<li><b>Activo: </b>' + (this.activo ? 'SI' : 'NO') + '</li>';
        html += '<li><b>Descripción: </b>' + this.descripcion + '</li>';
        html += '</' + tipoLista + '>';
        html += '</' + etiqueta + '>';
    };

    return html;
}

}