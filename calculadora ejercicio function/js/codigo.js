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

 /* const agregar=(valor)=>{
    document.getElementById("resultado").value += valor;

}  */
/*  const limpiar=()=> document.getElementById("resultado").value = " "; 
     

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
} */

/* ***********************Tercera practica*********************************** */

/* function agregar(valor) {
    resultado.value += valor;

}
botones.forEach(boton => {
    boton.addEventListener("click", () =>{
        agregar(boton.textContend);
    })
})
 */

const botonesVariables = document.querySelectorAll(".botonesVariables")

botonesVariables.forEach((boton) => {
    boton.addEventListener("click", () =>{
        document.getElementById("display").value += boton.textContent;
    });
}); 



const resultado = document.querySelector("#resultado")
const limpiar = document.querySelector("#limpiar")
limpiar.addEventListener("click", () => resultado.value="");

const calculo = document.querySelector("#calculo")
const expresion = document.querySelector("#resultado")
calculo.addEventListener("click", () => resultado.value = eval(expresion.value));

const borrar = document.querySelector("#borrar")
borrar.addEventListener("click", () => resultado.value = resultado.value.slice(0, -1));

const raiz = document.querySelector("#raiz")
raiz.addEventListener("click", () => resultado.value = resultado.value = Math.sqrt(resultado.value));


const exponente = document.querySelector("#exponente")
exponente.addEventListener("click", () => resultado.value = expresion.value**2); 

const divideUno = document.querySelector("#divideUno")
divideUno.addEventListener("click", ()=> resultado.value = 1/resultado.value);










