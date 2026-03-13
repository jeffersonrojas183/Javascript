
"use strict";

/* let numero = prompt("Hola \n Alumnos")  // se utiliza \n para salto en linea 
*/





//Ejemplo de if

/* let edad = 20;

if (edad >= 18) {
    console.log("Eres mayor de edad");

} else {
    console.log("Eres menor de edad");

}; */






//ejemplo de rango de edades

/* let edad2 = 25;
if (edad2 >= 0 && edad2 <= 12) {
    console.log("Eres un niño");

} else if (edad2 > 12 && edad2 <= 19) {
    console.log("Eres un adolocente");

} else if (edad2 > 19 && edad2 <= 64) {
    console.log("Eres un adulto");

} else if (edad2 > 64) {
    console.log("Eres un adulto mayor");

} else {
    console.log("Edad invalida");

} */








//Ejemplo de Operador Ternario

/* let numero = 10;
let  resultado = (numero % 2 == 0) ? "El numero es par" : "El numero es impar"
console.log(resultado); */






//Ejercicio de Ternario 

let edad2 = 25;

let resultado =
    (edad2 >= 0 && edad2 <= 12) ? "Eres un niño" :
        (edad2 > 12 && edad2 <= 19) ? "Eres un adolocente" :
            (edad2 > 19 && edad2 <= 64) ? "Eres un adulto" :
                (edad2 > 64) ? "Eres un adulto mayor" : "Edad invalida";
console.log(resultado);



//Ejemplo de switch precios de compustible

let combustible = "Diesel";
let precio = 0;

switch (combustible) {
    case "Gasolina":
        precio = 700;
        break;
    case "Diesel":
        precio = 600;
        break;
    case "GLP":
        precio = 400;
        break;



    default:
       console.log( "No es un hidrocarburo");
        
        break;
}

console.log(precio);
if (precio > 0) {
    console.log(`EL PRECIO DEL ${combustible} es ${precio}`);
}








let nota =80;
switch (true) {
    case (nota>=0 && nota<=50):
        console.log("Reprobado");
        break;

    case (nota>50 && nota<=70):
        console.log("Regular");  
        break;

    case (nota>70 && nota<=100):
        console.log("Bueno");
        break;

    default:
        console.log("Nota invalida");
        
        break;
}