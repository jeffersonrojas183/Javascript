"use strict";

/* let frase= 'Hola ';
//let frase=promp("Introduce una frase");
console.log(frase); */


//console.log(frase.slice(0,-4); //muestra la ultima palabra sin los ultimas 5 letras, se lee de derecha a izquierda


//console.log(frase.toUpperCase()); //convierte la frase en mayusculas


//console.log(frase.toLowerCase()); //convierte toda la frase en minuscula


//console.log(frase.trim()); //para quitar los espacios en la cadena 


//console.log(frase.replace("Hola", "Adios")); //remplaza texto por columna


//console.log(frase.includes("mundo")); //sirve para ver si en el texto incluye la palabra solicitada


//console.log(frase.indexOf("m")); //devuelve la posicion de la letra 


//console.log(frase.charAt(5)); //devuelve lo que hay en una posicion de la cadena


//console.log(frase.split(" ")); //divide el string con una coma y un espacio 





//ejercicio de invertir 



//manera simple

/* let frase = "hola";

let resultado = frase.split("").reverse().join("");

console.log(resultado); */

/* let frase='Reconocer', frase2="";

frase=frase.split("");

for (let i =  frase.length -1; i >= 0; i--){
    
    frase2=frase2.concat(frase[i]);
    
}
let 


console.log(frase2); */



let frase='Reconocer', frase2="reconocer";
let inicio=0
let fin=frase2.length -1; 



function palidromo() {
    
    while (palabra[inicio]<=palabra[fin]) {
        if (palabra[inicio]!==palabra[fin]) {
         console.log("no es polindromo");
            return;
        }
        ++inicio
        --fin
    }
    console.log("es un palindromo");
    
}




/* for (let i =  frase.length -1; i >= 0; i--){
    
    console.log(frase[i]);
    for (let j = 0; j < frase2.length; j++) {
        const element = frase2[j];

        
    }
    
}
 */


//console.log(frase2);
