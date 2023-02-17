
class Producto {
    /* PROPIEDADES **********************************************/
    //Propiedades de clase o estaticas
    static contador = 0;       


    //Propiedades de Instancia
        //creamos los miembros-propiedades necesarios para nuestra clase
    __id = 0;               //id='';
    nombre = '';            //cadena texto vacia, tambien es valido poner nombre = null
                            //para Date o un Array mejor inicializarlo en vacio como null
                            //null es la ausencia de algo, nunca antes ha tenido un valor
    descripcion = "";
        //stock = null;     //stock = 0;
    __stock = 0;       
        //minStock = 0;
    __minStock = 0;         //con doble guion bajo(__) se oculta la variable
        //#minStock = 0;        //en el futuro esta simbolo indicará que la variable esta oculta (esta en modo experimental)
        //maxStock = 0;
    __maxStock = 0;
    precio = null           //precio = 0.0;
    iva = 0.0;
    fechaAlta = null;
    activo = true;

    //todo esto podría formar un array u otro objeto



    /* CONSTRUCTOR **********************************************/
    /* 
    constructor(){
        //this permite acceder a un miembro de la propia clase
        this.id = '';       //se pueden crear nuevos miembros dentro del constructor tambien pero con la palabra this. delante
        this.fechaAlta = new Date();    //esto reescribe la propiedad fechaAlta ya que como propiedad esta null pero le asigno en el constructor el metodo Date
    } 
    */

    /* 
    //CONSTRUCTOR Parametrizado
    //todo metodo admite parametros y le podemos poner los que queramos
    constructor(id, nombre){
        this.id = id;      
        this.nombre = nombre;
        this.fechaAlta = new Date(2023,0,1);
    } 
    */

    /* 
    //CONSTRUCTOR Parametrizado
    //los metodos constructores no pueden tener return porque daran erros nunca retorna nada
    constructor(id, nombre, precio, stock){
        this.id = id;      
        this.nombre = nombre;
        this.precio = precio || 0;
        this.setStock = stock || 0;
        this.fechaAlta = new Date(2023,0,1);
        this.__maxStock = 50;
        this.__minStock = 0;
    } 
    */

    //CONSTRUCTOR Parametrizado
    constructor(nombre, precio, stock){
        this.__id = ++Producto.contador;        //creacion de identificador automatico     
        this.nombre = nombre;
        this.precio = precio || 0;
        this.setStock = stock || 0;
        this.fechaAlta = new Date(2023,0,1);
        this.__maxStock = 50;
        this.__minStock = 0;
    }


    /*GETTERS Y SETTERS (DE INSTANCIA) **********************************************************/
    // GET siempre devuelve algo y no lleva parametros
    // SET siempre lleva un parametro y nunca devuelve nada
    // Se definen como metodos pero se utilizan como variables, de esta forma se protegen desde fuera
    // y por eso cuando ponemos por ejemplo this.getMaxStock no ponemos los parentesis ()

    //ID
    get id(){return String(this.__id).padStart(5,'0'); }      //nos rellenará todos los id para 5 digitos con 0
    


    //MinStock
    get getMinStock(){return this.__minStock;}

    set setMinStock(valor){
        if(valor >= 0 && valor <= this.getMaxStock){
            this.__minStock = valor;
        };
    }


    //MaxStock
    get getMaxStock(){return this.__maxStock;}

    set setMaxStock(valor){
        if(valor >= this.getMinStock){
            this.__maxStock = valor;
        };
    }


    //Stock
    get getStock(){return this.__stock;}

    set setStock(valor){
        if(valor >= this.getMinStock && valor <= this.getMaxStock){
            this.__stock = valor;
        };
    }


    //Podemos transformar el metodo obtenerIVA en un GET
    get obtenerIVA(){
        return Math.round((this.precio*this.iva)*100)/100;
    }



    /*METODOS DE ESTATICOS **********************************************************/
    static masCaro(p1,p2){
        if(p1.precio > p2.precio){
            return p1;
        } else {
            return p2;
        };
    }



    /*METODOS DE INSTANCIA **********************************************************/
    disponible() {
        return this.activo && this.getStock>0; //devolvera true cuando pueda vender el producto o false si no
    }

    //formula para el incremento o decremento comercial ==> precio*(1+porcentaje)
    modificarPrecio(porcentaje){
        porcentaje = porcentaje/100;
        if(porcentaje >= -1){
            this.precio = Math.round((this.precio*(1+porcentaje))*100)/100;
        };
    }

    /* 
    obtenerIVA(){return Math.round((this.precio*this.iva)*100)/100;} 

    precioConIVA(){return this.precio + this.obtenerIVA();}
    */
    
    precioConIVA(){
        return this.precio + this.obtenerIVA;
    }

    seNecesitaStock(){
        return this.activo && this.getStock < this.getMinStock;
    }

    unidadesASolicitar(){
        if(!this.seNecesitaStock()){                //si no necesitas stock
            return 0;                               //me devuelves 0
        } else {                                    //sino
            return this.getMaxStock - this.getStock;      //solicita las unidades necesarias para llegar al maxStock
        };
    }

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
            html += '<h2>' + this.id + ' - ' + this.nombre + '</h2>';             
            html += '<' + tipoLista + '>';
            html += '<li><b>Precio: </b>' + this.precio + '</li>';
            html += '<li><b>IVA: </b>' + this.obtenerIVA + '</li>';            //E:\Curso 2022-23\practicas\mod-js.es\scripts\producto.js
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

    esValida(tipoValidacion, valor){
        var regExp = null;
        switch(tipoValidacion){
            case 'tag':                         //etiqueta
                //creacion literal de una regExp = /patron/indicadores;
                //regExp = /^ $/i; (/empieza por algo(^) y termina por algo($)/i(que no distingue entre mayusc y minusc))
                regExp = /^(section|article|div)$/i;     //la etiqueta puede ser section, article o div
                return regExp.test(valor);      //el return finaliza de forma inmediata la funcion por lo tanto el break nunca se ejecutará
                //break;                        //el break se quita en estos casos, como excepción porque el return hace las funciones del break
            case 'list':                        //lista
                regExp = /^(ul|ol)$/i;
                return regExp.test(valor);
                //break;                        //el break se quita porque el return hace las funciones del break
        };

        return false;
    }

    // sobre - escribir toString();
    toString() {
        var texto = '{';
        texto += 'id: '+this.id+',';
        texto += 'nombre: '+this.nombre+',';
        texto += 'stock: '+this.getStock+',';
        texto += 'minStock: '+this.getMinStock+',';
        texto += 'maxStock: '+getMaxStock+',';
        texto += 'precio: '+this.precio+',';
        texto += 'tipoIVA: '+this.iva+',';
        texto += 'IVA: '+this.obtenerIVA+',';
        texto += 'total: '+this.precioConIVA()+',';
        texto += 'activo: '+this.activo;
        return texto + '}';
    }


}








