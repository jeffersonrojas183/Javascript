/* EJERCICIO 1: VARIABLE */
"use strict";

// DECLARACION DE VARIABLE 3 FORMAS

// "var" que ya no se usa, con let y const 

let nombre = "Juan"; // Forma actual

if (true) {
    let nombre = "Pedro";
    console.log(nombre);
}


console.log(nombre);


class Usuario {
    constructor(nombre, apellido){

        this.nombre = nombre;
        this.apellido = apellido;
    }

}

// crear objeto p1 con nombre kevin y apellido Rojas

let p1 = new Usuario("Kevin", "Rojas");
let p1 = new Usuario("Maria", "Gomez");

console.log(p1.apellido);