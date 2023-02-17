class Usuario{
    /* PROPIEDADES  ********************************************/
    #nick = '';
    #pass = '';
    nombre = '';

    /* CONSTRUCTOR  *******************************************
    constructor(){
        this.nombre = '';
        this.setNick = '';
        this.setPass = '';
    };
    */

    /* GETTER & SETTER ****************************************/
    //para el nick
    set setNick(valor){
        var expReg = /^[a-z]{3,20}$/i;
        if(expReg.test(valor)){
            this.#nick = valor;
        } else {
            throw new Error('Valor no válido');     //generamos un error
        };
    };

    get getNick(){return this.#nick;};    


    //para el pass
    set setPass(valor){
        var expReg1 = /[A-Z]{1,}/;
        var expReg2 = /[a-z]{1,}/;
        var expReg3 = /[0-9]{2,}/;
        var expReg4 = /^[a-z]{1,}/i;        //empieze por letra (i no distingue entre mayus y minus)
        var expReg5 = /^[a-z0-9]{5,15}$/i;

        if(expReg1.test(valor) && expReg2.test(valor) && expReg3.test(valor) && expReg4.test(valor) && expReg5.test(valor)){
            this.#pass = valor;
        } else {
            throw new Error('Valor no válido');     //generamos un error
        };
    };

    get getPass(){return this.#pass;};


    /* METODOS ************************************************/
    valido(){
        return this.nombre.length>0 && this.#pass.length>0 && this.#nick.length>0;
    };














}