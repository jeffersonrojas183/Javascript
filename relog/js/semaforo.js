"use strict"
const rojo=document.querySelector("#luzrojo")
const amarillo=document.querySelector("#luzamarillo")
const verde=document.querySelector("#luzverde")


function semaforo() {


    setTimeout(() => {
        rojo.style.backgroundColor = "red"
    }, 1000);

    setTimeout(() => {
        rojo.style.backgroundColor = ""
    }, 6000);


    setTimeout(() => {
        amarillo.style.backgroundColor = "yellow"
    }, 6000);

    setTimeout(() => {
        amarillo.style.backgroundColor = ""
    }, 9000);


    setTimeout(() => {
        verde.style.backgroundColor = "green"
    }, 9000);

    setTimeout(() => {
        verde.style.backgroundColor = ""
    }, 16000);

    setTimeout(() => {
        amarillo.style.backgroundColor = "yellow"
    }, 16000);

    setTimeout(() => {
        amarillo.style.backgroundColor = ""
    }, 19000);
    

    setTimeout(semaforo, 18000)
}



/* let estado = "rojo"

function semaforo() {

    
    rojo.style.backgroundColor = ""
    amarillo.style.backgroundColor = ""
    verde.style.backgroundColor = ""

    if (estado === "rojo") {
        rojo.style.backgroundColor = "red"
        estado = "verde"

    } else if (estado === "verde") {
        verde.style.backgroundColor = "green"
        estado = "amarillo"

    } else if (estado === "amarillo") {
        amarillo.style.backgroundColor = "yellow"
        estado = "rojo"
    }
}


setInterval(semaforo, 2000) */