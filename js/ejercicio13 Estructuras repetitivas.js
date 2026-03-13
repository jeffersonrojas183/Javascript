"use strict";

//Uso del for, recuerda que si utiliza el Log, la variale siempre va hacer local

// 1.si i= 0 es par, si i inicializa en 1 se vuelve impar
/* for (let i = 1; i < 10; i+=2) {
    console.log(i);
} */


//2.Con if dentro del for,
//  recuerda que si utiliza el Log, la variale siempre va hacer local, siempre va dentro del ciclo for
/* for (let i = 0; i < 10; i++) {

if (i % 2 != 0) {
        console.log(i);
}else 
    console.log(i);
} */




//3.Uso de while , si se utiliza el log se recuerda que es una variable global

/* let j = 0;
while (j<5) {
    console.log(j);
    j++;
}
console.log(j); */




//4.Uso de do while, si se utiliza el log se recuerda que es una variable global

/* let i = 0;
do{
    console.log(i);
    i++;
    
}while (i<5) ;
console.log(i); */



//Ejercicio 1
/* 
let numero = 4, resultado = 0, i =1

console.log("tabla de multiplicar de " + numero);


while (i<=12) {
    resultado=numero*i
    console.log(resultado);
    i++
} */

    

    
//Ejercicio 2

let numero=0,resultado=0,i=0, sumaTotal=0,promedio=0,cantidad=0;

do {
    numero=parseInt(prompt("Ingrese un numero "));

    if (numero>0) {
      document.writeln(numero+"<br>");
      cantidad++;
      sumaTotal+=numero;
      promedio=sumaTotal/cantidad;
    }

} while (numero!=0); 

document.writeln(`La cantidad de numeros ${cantidad} "<br>" La suma Total de los numero es ${sumaTotal} "<br>" El promedio es de ${promedio}`)
