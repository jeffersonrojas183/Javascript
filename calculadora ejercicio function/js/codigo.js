"use strict"

/*  function agregar(valor) {
    document.getElementById("resultado").value += valor;

}

function limpiar() {
   document.getElementById("resultado").value += valor;
}

function calculo() {
    let expresion = document.getElementById("resultado").value;
    document.getElementById("resultado").value = eval(expresion);
} 

function borrar() {
    let valor = document.getElementById("resultado").value;
    document.getElementById("resultado").value = valor.slice(0, -1);
}

function raiz() {
    let expresion = document.getElementById("resultado").value;
    document.getElementById("resultado").value = Math.sqrt(expresion);

}

function exponente() {
    let expresion = document.getElementById("resultado").value;
    document.getElementById("resultado").value = expresion ** 2;

}

function divideUno() {
    let valor = document.getElementById("resultado").value;
    let calculo = 1 / valor;
    document.getElementById("resultado").value = calculo.toFixed(2);

} */

/* ************************* Segunda Practica ***************************** */

const agregar=(valor)=>{
    document.getElementById("resultado").value += valor;
}

const limpiar=()=> document.getElementById("resultado").value = " ";
     

const calculo=()=>{
    let expresion = document.getElementById("resultado").value;
    document.getElementById("resultado").value = eval(expresion);
}

const borrar=()=>{
    let valor = document.getElementById("resultado").value;
    document.getElementById("resultado").value = valor.slice(0, -1);
}

const raiz=()=>{
   let expresion = document.getElementById("resultado").value;
    document.getElementById("resultado").value = Math.sqrt(expresion);
}

const exponente=()=>{
      let expresion = document.getElementById("resultado").value;
    document.getElementById("resultado").value = expresion ** 2;
}

const divideUno=()=>{
    let valor = document.getElementById("resultado").value;
    let calculo = 1 / valor;
    document.getElementById("resultado").value = calculo.toFixed(2);
}