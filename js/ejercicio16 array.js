"use strict";

const tecnologias = ["HTML", "REACT", "CSS", "BOOTSTRAP", "ANGULAR", "VUE"];
const numero = [20, 10, 30, 15];

console.log(typeof numero); //devuelve object 

//Propiedades de array
console.log(tecnologias.length);
console.log(numero.length);

console.log(tecnologias[3]);






//*********metodos más utilizados con array**************




//*******************Filter en automatico rcoore el array filtramos y sacamos Html****************

/* const nuevoArray = tecnologias.filter(function (tech) {
    if (tech !== "HTML" && tech !== "CSS") {
        return tech
    }
});
console.log(nuevoArray); */





//**********************Muestra tecnologias*******************

/* const nuevoArray2 = tecnologias.filter((tech)=>console.log(tech)); */






// ***************Muestra las tecnologias menos HTML****************

/* const nuevoArray2=tecnologias.filter((tech)=> tech !== "HTML");
console.log(nuevoArray2);
*/




/* *****************observa que num no va en parentesis y no hay necesidad de poner return***************  */
/* const resultado2=numero.filter(num => num !== 10);
console.log(resultado2); */




//*********include verifics di existe el elemento me duevuelve true********

/* verifica si el arreglo 'numero' contiene el valor de 10.
include() revisa si un elemento existe dentro de un arreglo
y devuelve un booleano
-true -> si el elemento existe
-false -> si el elemento no existe */


/* const verificar=numero.includes(10)
console.log(verificar); */


/* ****************** some nos dice si almenos uno cumple la condicion****************** */
// .some()
// Recorre un arreglo y verifica si algún elemento cumple una condición.
// - Devuelve true si al menos uno la cumple
// - Devuelve false si ninguno la cumple
// - Se detiene cuando encuentra el primero que cumple

/* const verificar=numero.some(num => num >= 15);
console.log(verificar);
if (verificar) {
    console.log("Hay elementos"); //devuelve true
}else{
    console.log("No hay elementos"); //devuelve false
} */



/* ********** find encontrar el primer elemento que cumple con la condicion***********  */

// Recorre un arreglo y devuelve el PRIMER elemento que cumple la condición.
// Si ningún elemento cumple, devuelve undefined.
// Se detiene cuando encuentra el primero.

/* const resultado3 = numero.find(num => num>=15);
console.log(resultado3); //devuelve 20 */




/* ************ Every nos dice si todos cumple la condicion************ */
// - Devuelve true si todos cumplen
// - Devuelve false si al menos uno no cumple
// - Se detiene cuando encuentra el primero que no cumple

/*  const verificar=numero.every(num => num >= 15);
console.log(verificar);
if (verificar) {
    console.log("cumple la condicion"); //devuelve true
}else{
    console.log("No cumple la condicion"); //devuelve false, no cumple por que existe antes del 15 hay un 10
}  */





/* *************reduce tiene dos parametros, retorna un acumulado del total********** */
// Recorre un arreglo y acumula los valores en uno solo.
// Usa un acumulador (acc) que guarda el resultado en cada iteración.
// Muy usado para sumar, multiplicar, contar o transformar datos.

//metodo corto
/* const acumulado=numero.reduce((total, num)=>total+num, 0); // <---inicia en 0
console.log(`El acumulado es ${acumulado}`); */ //devuelve el acumulado

const acumulado=numero.reduce((total, numero)=>{
    console.log(total);
    console.log(numero);
    
    return total+numero;
})
console.log(`El acumulado es ${acumulado}`);

