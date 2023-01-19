class Alumno {
    constructor () {
        this.nombre = '';
        this.apellidos = '';
        this.nota = 0;
    }

    nombreApellidos() {
        return this.nombre + ' ' + this.apellidos;
    }

    apellidosNombre() {
        return this.apellidos + ', ' + this.nombre;
    }

}

var alumnos = new Array();


document.querySelector('form input[type="button"]').onclick = function(ev) {
    var alumno = new Alumno();

    alumno.nombre = document.getElementById('nombre').value.trim().toUpperCase();
    alumno.apellidos = document.getElementById('apellidos').value.trim().toUpperCase();
    alumno.nota = Number(document.getElementById('nota').value);

    if (datosValidos(alumno.nombre,alumno.apellidos,alumno.nota)) {
        //Buscar al alumno dentro del conjunto
        var i=0;
        while (i<alumnos.length && alumno.nombreApellidos()!=alumnos[i].nombreApellidos()) i++;

        //Comprobar si el alumno ha sido encontrado
        if (i!=alumnos.length) 
            alert('El alumno ya existe en la lista');
        else {
            //Debemos agregar el alumno a la lista
            alumnos.push(alumno);

            alumnos.sort(function (al1,al2){
                if (al1.apellidosNombre()<al2.apellidosNombre())
                    return -1;
                else if (al1.apellidosNombre()>al2.apellidosNombre())
                    return 1;
                else
                    return 0;
            });
            var codigo = '<ul>';
            for (let i=0;i<alumnos.length;i++)
                codigo += '<li>'+alumnos[i].apellidosNombre()+ ' ('+alumnos[i].nota+') </li>';
            codigo +='</ul>';
            document.querySelector('#alfabetico>div').innerHTML = codigo;

            alumnos.sort(function (al1,al2){
                // if (al1.nota>al2.nota)
                //     return -1;
                // else if (al1.nota<al2.nota)
                //     return 1;
                // else
                //     return 0;
                return al1.nota-al2.nota;
            });
            var codigo = '<ul>';
            for (let i=0;i<alumnos.length;i++)
                codigo += '<li>'+alumnos[i].apellidosNombre()+ ' ('+alumnos[i].nota+') </li>';
            codigo +='</ul>';
            document.querySelector('#puntuacion>div').innerHTML = codigo;
            
        }

    } else {
        alert('Los datos introducidos no son válidos');
    }
}

function datosValidos(nom,ap,not) {
    var validos = true;
    validos &&= nom.length>=2;
    validos &&= ap.length>=2;
    validos &&= !isNaN(not) && not>=0 && not<=10;
    return validos;
}