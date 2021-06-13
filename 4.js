var caja = document.querySelector("#caja"); 

function cambiarColor(){
  caja.style.background = "green";
}

var boton = document.querySelector("#boton");

boton.addEventListener("click",moverCaja);

function moverCaja(){
  caja.style.width = "400px"; 
  caja.style.height = "400px";
  caja.style.background="green";
  caja.style.transition="4s";
}