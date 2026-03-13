"use strict";

/* //Uso de Operadores aritmeticos

let a = 9;
let b = 2;

console.log("suma: " + (a + b));
console.log("resta: " + (a - b));
console.log("multiplicacion: " + (a * b));
console.log("division: " + (a % b)); //el residuo es 1
console.log("Exponente: " + (a ** b));

// Operadores de Asignacion

let c = 5;

c += 3;
console.log("Asignacion Suma: " + c);
c -= 2;
console.log("Asignacion resta: " + c);
c *= 4;
console.log("Asignacion Multiplicacion: " + c);
c /= 2;
console.log("Asignacion Division: " + c);
c **= 2;
console.log("Asignacion Exponente: " + c); */



//Operadores de comparacion 

/* let d = 10;
let e = "10";
console.log("igualdad: " + (d == e)); //true
console.log("identidad: " + (d === e)); //false
console.log("Diferente: " + (d != e)); //false
console.log("Mayor  que: " + (d > e)); //true
console.log("Menor  que: " + (d < e)); //true 
console.log("Mayor o igual que: " + (d >= e)); //true
console.log("Menor o igual que: " + (d <= e)); //true */



//Uso del y(&&), o(||), no(!)


/* let f =true;
let g =false;

console.log("And (y): " + (f && g));
console.log("OR (o): " + (f || g));
console.log("Not (no): " + (!f)); */

//ejercicio 1  

let trabajador = 0

let horasExtra = 0
let total = 0
let x
let horas=50

if (horas >= 40) {
    horasExtra=horas-40;
    x=horasExtra;
    horasExtra*=5000*1.5;
}

horas-=x;
total=horas*5000+horasExtra;

console.log(total);


//ejercicio 2


let celsius=25, fahrenheit=0

console.log(celsius);

fahrenheit=celsius*9/5+32;

console.log(fahrenheit);

