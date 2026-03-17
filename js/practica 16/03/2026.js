"use strict";

let vector = [10, 3, 5, 6, 7, 8, 42]




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

const resultado1 = vector.filter(num=>num%2===0);
const resultado = vector.filter(num=>num%2===1);
    
console.log(resultado); 
console.log(resultado1); 


 



