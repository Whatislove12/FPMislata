var productos = [];

    window.onload = function(ev) {
        var producto = null; /* new Producto('CMC001','Camiseta manga corta Mislata Center',10.99); */


        for (let i=0;i<=20;i++) {
        producto = new Producto('CMC0', + String(i).padStart(2,'0') +1, 'Camiseta manga corta Mislata Center',10.99);
        producto.descripcion = 'Camiseta de algodon corte unisex en varios colores de manga corta con el logotipa del centro';
        producto.setMinStock = 5;
        producto.iva = 0.21;
        producto.modificarPrecio(-10)
        producto.stock = Math.floor(Math.random()*20);
        productos.push(producto);
    };
        for (let i=0;i<productos.length;i++) {
            document.getElementById('lista').innerHTML += productos[i].fichaProducto('div');
        }
    };