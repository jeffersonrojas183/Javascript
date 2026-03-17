"use strict";



//hace un calculo y dentro de la funcion.
/* const sumar=(num1=0, num2=0)=>{
    num1 + num2 ;
    console.log(num1+num2);
}
sumar(2,3); */


//Funcion que retorna valores, se puede usar el calculo en otras operaciones.
/*  function sumar(num1=0, num2=0) {
    return num1+num2;
} 
const resultado=sumar(2,10);
console.log(resultado); */



//diferentes maneras de hacerlo
/* const sumar=function(num1 = 0, num2 = 0) {
    return num1 + num2;
}
const resultado = sumar(2, 10);
console.log(resultado);

const restar=function(num1 = 0, num2 = 0) {
    return num1 + num2;
} */

//No hay necesidad de poner return si es una sola linea
const sumar=(num1=0, num2=0)=> {
    return num1+num2;
}

const resultado=sumar(10,2);
console.log(resultado);

    
