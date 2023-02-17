//Conjunto de productos
var productos = [];

function generarDatosPrueba(){
    var producto = null;
    for(let i=1; i<=20; i++){
         producto = new Libro('Camiseta manga corta Mislata Center', 10.99);
        producto.descripcion = 'Camiseta de algodon corte unisex en varios colores de manga corta con el logotipo del centro';
        producto.setMinStock = 10;
        producto.setStock = 30;
        producto.iva = 0.21;
        producto.modificarPrecio(-10);
        producto.stock = Math.floor(Math.random()*20);    
        if(i%2==0){
            producto.precio*=10;
        };
        productos.push(producto);
    };
}

/* 
window.onload = function(ev){
    
    var producto = new Producto();      //creamos un objeto con el metodo new + nombreClase y con los parenteis llama al metodo constructor de la clase 
                                        //los parentesis son un operador que ejecutan algo                                   //en el momento que tenemos un producto podemos acceder a cualquiera de sus miembros con .miembro
    producto.nombre = 'Camiseta manga corta Mislata Center';
    producto.descripcion = 'Camiseta de algodon corte unisex en varios colores de manga corta con el logotipo del centro';
    producto.minStock = 5;
    producto.precio = 10.99;
    producto.iva = 0.21;
    producto.id = 'CMC001';
    //producto.fechaAlta = new Date();  //si lo pongo en el constructor ya no necesito ponerlo aqui
    console.log(producto);
    productos.push(producto);           //agrega elemento por el final
  
    //Parametrizado
    var producto = new Producto('CMC001','Camiseta manga corta Mislata Center');
    producto.descripcion = 'Camiseta de algodon corte unisex en varios colores de manga corta con el logotipo del centro';
    producto.minStock = 5;
    producto.precio = 10.99;
    producto.iva = 0.21;
    console.log(producto);
    productos.push(producto);
 
    //Parametrizado
    var producto = null;
    for(let i=1; i<=20; i++){
        //var producto = new Producto('CMC001','Camiseta manga corta Mislata Center', 10.99);
        //var producto = new Producto('CMC0'+String(i).padStart(2,'0'),'Camiseta manga corta Mislata Center', 10.99);
        var producto = new Producto('Camiseta manga corta Mislata Center', 10.99);
    
        producto.descripcion = 'Camiseta de algodon corte unisex en varios colores de manga corta con el logotipo del centro';
        producto.setMinStock = 10;
        producto.setStock = 30;
        producto.iva = 0.21;
        producto.modificarPrecio(-10);
        producto.stock = Math.floor(Math.random()*20);   
        //funcion para generar datos  
        if(i%2==0){
            producto.precio*=10;
        };
        productos.push(producto);
    };

    for(producto of productos){
        document.getElementById('lista').innerHTML += producto.fichaProducto('article', 'ol', 'flexColumn');
    };
    
    for(let i=0; i<productos.length; i++){
        document.getElementById('lista').innerHTML += productos[i].fichaProducto('div');
    };
}; */

window.onload = function(ev){
    var producto = null;
    
    generarDatosPrueba();

    for(let i=0; i<productos.length; i++){
        document.getElementById('lista').innerHTML += productos[i].fichaProducto('div');
    };

    //console.log(Producto.masCaro(productos[0], productos[1]));
    producto = Producto.masCaro(productos[0], productos[1]);
    document.getElementById('resultado').innerHTML +=  + producto.fichaProducto() + '<hr>';

};