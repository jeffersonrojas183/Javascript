"use strict";

//sintaxis funcion tradicional

//funcion anonima
/* const sumar=function(num1=0, num2=0){
    console.log(num1+num2);
    
}
sumar(10,30) */

//Manera 1

/* function sumar(num1, num2) {
    console.log(num1+num2);
}
sumar(20,20)//se llama la funcion */



//Manera 2
/* let sumar=(num1=0, num2=0)=>{
    console.log(num1+num2);
}
sumar(20,20) */




//Manera 3
/* let sumar=(num1=0, num2=0)=>{
    return(num1+num2);
}
let resultado=sumar(10,20);
console.log(resultado); */





//Funcion flecha con expresion
/* const sumar=function(num1=0,num2=0){
    console.log(num1+num2);
}
sumar(20,20) */



//cuando tienen en el cuerpo en una sola linea se omite las llaves
/* const sumar=(num1=0,num2=0)=>console.log(num1+num2);

sumar(20,30)
sumar(200,300) */