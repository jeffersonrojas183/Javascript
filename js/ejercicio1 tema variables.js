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


class persona {
    constructor(nombre, apellido){

        this.nombre = nombre;
        this.apellido = apellido;
    }
    saludar(){
        console.log("hola me llamo : " + this.nombre + " " + this.apellido);
        
    }
}

// crear objeto p1 con nombre kevin y apellido Rojas

let p1 = new persona("Kevin", "Rojas");
let p2 = new persona("Maria", "Gomez");
let p3 = new persona("Martha", "Sanchez");

console.log(p1.apellido);
console.log(p2.nombre);
console.log(p3.nombre, p3.apellido);

p3.saludar();
