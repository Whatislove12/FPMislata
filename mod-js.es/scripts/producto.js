class Producto {

// Propiedades 
    __id = 0;
    nombre = '';
    descripcion = '';
    stock = null;
    __stock = 0;
    __minStock = 0;
    get getMinStock(){}
    set setMinStock(valor) {}
    __maxStock = 0;
    precio = null;
    iva = 0.0;
    activo = true;
    fechaAlta = null;


    // metodo constructor 
    constructor(nombre,precio,stock) {
        this.__id = ++Producto.contador;
        this.nombre = nombre;
        this.precio = precio || 0.0;
        this.setStock = stock || 0;
        this.fechaAlta = new Date();
        this.__maxStock = 50;
        this.__minStock = 0;

    }

    
    get getMinStock() {
        return this.__minStock;
    }
    
    set setMinStock(valor){
        if (valor>=0 && valor<=this.getMaxStock)
        this.__minStock=valor;
    }
    
    get getMaxStock() {
        return this.__maxStock;
    }
    
    set setMaxStock(valor) {
        if (valor>=this.getMinStock)
        this.__maxStock=valor;
    }
    
    get getStock() {
        return this.__stock ;
    }
    
    set setStock(valor) {
        if (valor>=this.getMinStock && valor<=this.getMaxStock)
        this.__stock=valor;
    }
    

    // METODOS 
    disponible() {
        return this.activo && this.getStock>0;
    }

    modificarPrecio(porcentaje) {
        porcentaje = porcentaje/100;
        if (porcentaje>=-1)
            this.precio = Math.round((this.precio*(1+porcentaje))*100)/100;
    }

    obtenerIVA() {
        return Math.round((this.precio*this.obtenerIVA)*100)/100;

    }

    precioConIva() {
        return this.precio + this.obtenerIVA;
    }

    seNecesitaStock() {
        return this.activo && this.getStock<this.getMinStock
    }

    unidadesASolitades() {
        if (!this.seNecesitaStock()) return 0;
        else return this.getMaxStock - this.getStock;
    }

    fichaProducto(etiqueta,tipoLista,clases){
        var html='';
        tipoLista = tipoLista || 'ul';
        clases = clases || '';
        if (this.esValida('tag',etiqueta) && this.esValida('list',tipoLista)) {
            html += '<' +etiqueta;
            if (clases.length>0 || this.activo || this.seNecesitaStock()) {
                let clasesAdd = '';
                clasesAdd += clases.length>0?clases:'';
                clasesAdd += !this.activo?' noActivo':'';
                clasesAdd += this.seNecesitaStock()?' sinStock':'';
                html += ' class="' +clasesAdd.trim()+'"';
            }
            html +='>';

            html += '<h2>'+this.id+' - '+this.nombre+'</h2>'
            html += '<'+tipoLista+'>';
            html += '<li><b>Precio:</b>'+this.precio+'</li>';
            html += '<li><b>IVA:</b>'+this.obtenetIVA+'</li>';
            html += '<li><b>Total:</b>'+this.precioConIva()+'</li>';
            html += '<li><b>Stock:</b>'+this.getStock+'</li>';
            html += '<li><b>Stock:</b>'+this.getMinStock+'</li>';
            html += '<li><b>Stock:</b>'+this.getMaxStock+'</li>';

            html += '<li><b>Activo:</b>'+this.activo+'</li>';

            html += '<li><b>Reponer:</b>'+(this.seNecesitaStock()?'SI('+this.unidadesASolitades()+')':'NO')+'</li>';


            html += '<li><b>Descripcion:</b>'+this.descripcion+'</li>';
            html += '<'+tipoLista+'>';
            html += '</' +etiqueta+'>';

        }

        return html;
    }

    esValida(tipoValidacion,valor) {
        return true;
    }
}