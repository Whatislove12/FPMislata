var productos = [];

    window.onload = function(ev) {
        var producto = new Producto('CMC001','Camiseta manga corta Mislata Center',10.99);

        producto.discripcion = 'Camiseta de algodon corte unisex en varios colores de manga corta con el logotipa del centro';
        producto.minStock = 5;
        producto.iva = 0.21;
        producto.modificarPrecio(-10)
        producto.stock = 3;

        console.log(producto);
        productos.push(producto);
    }