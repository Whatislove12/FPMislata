

document.getElementById('desplDer').onclick = function(ev) {

    var i = 6;
    var aux = document.getElementById('elem6').src;

    do {
        document.getElementById('elem' + i).src = document.getElementById('elem' + (--i)).src;
    }
    while (i>1) {
        document.getElementById('elem'+ i).src = aux;
    }
};


// tarea numero 2 *****************************************************

document.getElementById('desplIsq').onclick = function(ev) {

    var i = 1;
    var aux = document.getElementById('elem1').src;

    do {
        document.getElementById('elem' + i).src = document.getElementById('elem' + (++i)).src;
    }
    while (i<6) {
        document.getElementById('elem'+ i).src = aux;
    }
};



// tarea numero 3 *****************************************************

document.getElementById('crearPiramide').onclick = function(ev) {
    var deNum = Number(document.getElementById('deNum').value)-1;
    var aNum = Number(document.getElementById('aNum').value);
    var deNum2 = deNum;
    var resultado;
    var texto = document.getElementById('texto');
    var div = document.getElementById('piramide');
    var selda = '<br>';
    
    div.innerHTML = '';

    do {
        resultado = selda + '' + (++deNum);
        selda = resultado;
        div.innerHTML += selda;
    }
    while (deNum<aNum) {
        do {
            selda = selda.replace(aNum, '');
            div.innerHTML += selda;
            --aNum;
        }
        while (aNum>deNum2) {
            texto.innerHTML= '<br>la piramida esta creada';
        }
    }
};

// tarea numero 4 *****************************************************

document.getElementById('clcularPar').onclick = function (ev) {
    var numPar = document.getElementById('numPares');
    var numImp = document.getElementById('numImpares');
    var numEnt = Number(document.getElementById('numEntero').value);
    var nPar = document.getElementById('numTerminosPar');
    var nImp = document.getElementById('numTerminosImp');

    if ((numEnt%2)==0) {
        var a1 = 2;
        var a = (numEnt-a1+2)/2;
        nPar.innerHTML = a;
        numPar.innerHTML = ((a1+numEnt)/2)*a;
    }
    else {
        var a1 = 1;
        var a = (numEnt-a1+2)/2;
        nImp.innerHTML = a;
        numImp.innerHTML = ((a1+numEnt)/2)*a;
    }
};


// tarea numero 5 *****************************************************


document.getElementById('contarNum').onclick = function(ev) {
    var contadorPosit = 0;
    var contadorNegat = 0;
    var entrada;

    do {
        entrada = Number(prompt('introduce un valor numerico'));
        if (entrada>0) contadorPosit++;
        else if (entrada<0) contadorNegat++;
    }
    while (entrada != 0 && !isNaN(entrada)) {
        if (isNaN(entrada)) {
            document.getElementById('textoContador').innerHTML = 'HAY QUE ELIGIR UN NUMERO'
        }

        else {
            document.getElementById('textoContador').innerHTML = '';
            document.getElementById('numPosit').innerHTML = contadorPosit;
            document.getElementById('numNegat').innerHTML = contadorNegat;
        }
    }
};


// tarea numero 6 *****************************************************
// quiero hacer el listado de alumnos mejor. Para qe se ve separacion de posts etc

document.getElementById('crearLista').onclick = function(ev) {
    var nombreAlumno = document.getElementById('nombreAlumno').value;
    var notaAlumno = Number(document.getElementById('notaAlumno').value);
    var alumnoAprob = document.getElementById('alumnoAprob');
    var alumnoSuspend = document.getElementById('alumnoSuspend');


  /*   alumnoAprob = [
        'Vladislav 80',
        'Kasimov 95'
    ]
    
    alumnoSuspend = [
        'Ivanov 80',
        'Evseev 95'
    ]
 */

    if (notaAlumno>50)  {
        alumnoAprob.innerHTML += nombreAlumno +' '+ notaAlumno + '<br>';
    }
        else alumnoSuspend.innerHTML += nombreAlumno +' '+ notaAlumno + '<br>';       
};


// tarea numero 7 *****************************************************

document.getElementById('crearTabla').onclick = function(ev) {
    var numFila = document.getElementById('numFila').value;
    var numColumna = document.getElementById('numColumna').value;
    var tablaCreada = document.getElementById('tablaCreada');

    tablaCreada.innerHTML ='';

    crearTabla(tablaCreada, numFila, numColumna);

    function crearTabla(parent, numFila, numColumna) {
        var table = document.createElement('table');

        for (var i = 1; i<=numFila; i++) {
            var tr = document.createElement('tr');

            for (var j = 1; j<=numColumna; j++) {
                var td = document.createElement('td');
                td.innerHTML = i + '.' + j;
                tr.appendChild(td);
            }

            table.appendChild(tr);
        }

        parent.appendChild(table);
    }
};


// tarea numero 8 *****************************************************

document.getElementById('obtenerNum').onclick = function(ev) {

    var letraNIE = ((document.getElementById('letraNIE').value));
    var numDNI = Number(document.getElementById('numDNI').value);
    var letraObten = document.getElementById('letraObten');
    var error = document.getElementById('errorDNI');




    var letras = ['T','R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'
    ];

    error.innerHTML = ''
    if (numDNI>=10000000) {
    var i = numDNI - (parseInt((numDNI/23))*23)
    letraObten.innerHTML = numDNI + letras[i]
    }
        else {

            if (letraNIE=='X' || letraNIE=='x') letraNIE=0
            else if (letraNIE=='Y' || letraNIE=='y') letraNIE=10000000
            else if (letraNIE=='Z' || letraNIE=='z') letraNIE=20000000
            else error.innerHTML = 'Hay que entroducir: X o x, Y o y, Z o z'

            var numNIE = numDNI + letraNIE;
            var i = numNIE - (parseInt((numNIE/23))*23)

            if (letraNIE==0) {
            letraNIE='X'
            letraObten.innerHTML = letraNIE + numDNI + letras[i]
            }
                else if (letraNIE==10000000) {
                letraNIE='Y'
                letraObten.innerHTML = letraNIE + numDNI + letras[i]
                }
                    else if (letraNIE==20000000) {
                        letraNIE='Z'
                        letraObten.innerHTML = letraNIE + numDNI + letras[i]
                        }
        }
};


// tarea numero 9 *****************************************************

document.getElementById('clcularDiv').onclick = function (ev) {
    var divisible = Number(document.getElementById('numDiv').value);
    var divisores = document.getElementById('divisores');
    var textoDiv = document.getElementById('textoDiv');
    var cantidadDiv = (document.getElementById('cantidadDiv'));
    var a = divisible;
    var j = 0;

  
    divisores.innerHTML = '';
    for (let i = 1; i<=a; i++) {

        if (a % i == 0) {
            j++
            cantidadDiv.innerHTML = j;
            divisores.innerHTML +=i +' ';
        }
    }
    var ejemplo =(12%10);
    console.log(ejemplo)
};


// tarea numero 10 *****************************************************

document.getElementById('numGrafs').style.visibility = "hidden";
document.getElementById('clcularGraf').onclick = function (ev) {

    var numGrafico = Number(document.getElementById('numGrafico').value);
    var a = numGrafico%10;
    var b = parseInt((numGrafico/10)%10)
    var c = parseInt((numGrafico/100)%10)
    var d = parseInt((numGrafico/1000)%10)
    var i = 0;

    do {
    document.getElementById('numGraf' +i).style.visibility = "hidden";
    i++
    }
    while (i<=9) {
    document.getElementById('numGraf' +a).style.visibility = "visible";
    document.getElementById('numGraf' +b).style.visibility = "visible";
    document.getElementById('numGraf' +c).style.visibility = "visible";
    document.getElementById('numGraf' +d).style.visibility = "visible";
    }

};

