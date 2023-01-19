class Producto {

// Propiedades 
    id = '';
    nombre = '';
    discripcion = '';
    stock = null;
    minStock = 0;
    maxStock = 0;
    precio = null;
    iva = 0.0;
    fechaAlta = null;
    activo = true;

    // metodo constructor 
    constructor(id,nombre,precio,stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio || 0.0;
        this.stock = stock || 0;
        this.fechaAlta = new Date();
        this.maxStock = 50;

    }

    // METODOS 
    disponible() {
        return this.activo && this.stock>0;
    }

    modificarPrecio(porcentaje) {
        porcentaje = porcentaje/100;
        if (porcentaje>=-1)
            this.precio = Math.round((this.precio*(1+porcentaje))*100)/100;
    }

    precioConIva() {
        return Math.round((this.precio*(1+this.iva))*100)/100;
    }

    seNecesitaStock() {
        return this.activo && this.stock<this.minStock
    }

    unidadesASolitades() {
        if (!this.seNecesitaStock()) return 0;
        else return this.maxStock - this.stock;
    }
}