"use strict";

/* let vector = [10, 3, 5, 6, 7, 8, 42]
 */

/* let vector = [100,200,300] */

/* ********* primera manera *********** */
/*for (let i = 0; i < vector.length; i++) {
    if (vector[i] % 2 == 0) {
        console.log(vector[i]);

    } else {

        if (vector[i] % 2 == 1)
           console.log(vector[i]);
    }
}  */


/* ************ segunda manera ************* */

/* const resultado1 = vector.filter(num=>num%2===0);
const resultado = vector.filter(num=>num%2===1);
    
console.log(resultado); 
console.log(resultado1);  */





/* ******************* tercera manera ************* */


/* const resultado=vector.map(num=>num%2===0);
console.log(resultado);
*/








//Segundo ejercicio 


/* const vector=[100,200,300];

const resultado=vector.map(num => num*0.13+num);
console.log(resultado);
*/





//tercer ejercicio

/* const vector=["kevin", "esmeralda", "yerika", "jesus"]

const may=vector.map(nombre => nombre.toUpperCase());
console.log(may);
*/




//cuarto ejercicio


/* const frutas=["manzana", "pera","uva"]
const verificar=frutas.includes("pera")
console.log(`Pera=${verificar}`); */


//quinto ejercicio

for (let i = 0; i < 4; i++) {
    nombre=prompt("Escriba su nombre");
    numero=parseInt(prompt("Ingrese su salario"));
}



