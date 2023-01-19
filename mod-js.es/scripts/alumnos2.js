class Alumno {
    constructor () {
        this.nombre = '';
        this.apellido = '';
        this.nota = 0;
    }

    nombreApellido() {
        return this.nombre + ' ' + this.apellido; 
    }

    apellidoNombre() {
        return this.apellido + ', ' + this.nombre;
    }
}

var alumnos = new Array();
var alumno = new Alumno();

var boton = document.querySelector('form input[type="button"]').onclick = function(ev) {
alumno.nombre = document.getElementById('nombre').value.trim().toUpperCase();
alumno.apellido = document.getElementById('apellido').value.trim().toUpperCase();
alumno.nota = Number(document.getElementById('nota').value);

if (datosValidos(alumno.nombre, alumno.apellido, alumno.nota)) { 
    // buscra al alumno dentro del conjunto
var i=0;
while (i<alumnos.length && alumno.nombreApellido()!=alumnos[i].nombreApellido()) i++;
    // comprobar si el alumno ha sidoo encontrado
    if (i!=alumnos.length) alert('El alumno ya existe en la lista');
        else {
            alumnos.push(alumno);
            alumnos.sort(function (aL1,aL2){
                if (aL1.apellidoNombre()<aL2.apellidoNombre())
                    return -1;
                else if (aL1.apellidoNombre()>aL2.apellidoNombre())
                    return 1;
                else 
                    return 0;
            });
            var codigo = '<ul>';
            for (let i=0;i<alumnos.length; i++)
                codigo += '<li>'+alumnos[i].apellidoNombre()+'('+alumnos[i].nota+') </li>';
                codigo += '</ul>';
                document.querySelector('#alfabetico>div').innerHTML = codigo;

                alumnos.sort(function (aL1,aL2){
                    if (aL1.nota()<aL2.nota())
                        return -1;
                    else if (aL1.nota()>aL2.nota())
                        return 1;
                    else 
                        return 0;
                });
                var codigo = '<ul>';
                for (let i=0;i<alumnos.length; i++)
                    codigo += '<li>'+alumnos[i].apellidoNombre()+'('+alumnos[i].nota+') </li>';
                    codigo += '</ul>';
                    document.querySelector('#puntuacion>div').innerHTML = codigo;
        }
}
else {
    alert('los datos introducidos no son validos')
}


};

function datosValidos(nom, ap, not) {
    var validos = true;
    validos &&= nom.length>=2
    validos = validos && ap.length>=2
    validos &&= !isNaN(not) && not>=0 && not<=10;
    return validos;
}