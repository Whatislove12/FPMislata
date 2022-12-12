function actFechaHora(ev) {
  let fechaHora = new Date();
  let valor = '';
  valor = valor + fechaHora.getDate();
  valor = valor + '/';
  valor = valor + (fechaHora.getMonth() + 1);
  valor = valor + '/';
  valor = valor + fechaHora.getFullYear();
  valor = valor + ' ';
  valor = valor + fechaHora.getHours();
  valor = valor + ':';
  valor = valor + fechaHora.getMinutes();
  valor = valor + ':';
  valor = valor + fechaHora.getSeconds();
//   let spanDate = document.getElementById('date');
//   spanDate.innerHTML = valor;
  document.getElementById('date').innerHTML=valor;
}

window.onload = actFechaHora;
document.getElementById('updateDate').onclick = actFechaHora;
document.getElementById('resize').onclick = function(ev) {
    let inputSize = document.getElementById('size');
    let size = inputSize.value;
    let imagen = document.getElementById('logo');
    // imagen.width = size;
    imagen.style = "width: "+size+"px";
};