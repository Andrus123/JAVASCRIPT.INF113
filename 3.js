//FUNCIONES SIN PARAMETROS

function saludo(){
    console.log("Hola Mundoooo crj¡¡¡");
}
saludo();

//FUNCIONES CON PARAMETROS
 function operacion(num1, num2){
    var suma = num1 + num2;
    console.log("Suma: ",suma);
 }
 operacion(12,7);

//FUNCION CON RETORNO SIN PARAMETROS
function retorno1(){
    var numero = 10;
    return numero;
}
console.log(retorno1());

//FUNCION CON RETORNO CON PARAMETROS
function retorno2(num1){
    return num1;
}
console.log(retorno2(7));