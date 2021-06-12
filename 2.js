var numero = 5;
console.log("Numero: ",numero)

//Variables de cadena o texto

var cadena = "Hola Mundo";
console.log("Saludo: ",cadena);

//Variables de tipo booleana

var boleana = true;
console.log("Boolean:",boleana);

//Variables de tipo Arreglo

var semana = ["Lunes","Martes","Miercoles","Jueves"];
console.log("Semana:", semana);

//Variables de tipo Objeto

var persona = {edad:"22",
              color:"moreno",
             genero:"Mujer",
          est_civil:"soltero",
          altura:"1.5"
}
console.log("Atributos",persona);
console.log("Genero: ",persona.genero);

// DOM (Document Object Model)

var caja = document.querySelector('#caja');
console.log("Caja: ",caja);

caja.style.width = "200px";
caja.style.height = "200px";
caja.style.background = "magenta";

var cajas = document.querySelectorAll('.cajas');

cajas[0].style.width = "100px";
cajas[0].style.height = "100px";
cajas[0].style.background = "green";