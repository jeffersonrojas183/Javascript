"use strict"


const relojDigital = document.querySelector("#reloj");
relojDigital.classList.add("#contador");

function iniciarReloj() {
    const fecha = new Date();
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();
    relojDigital.textContent = `${hora}:${minutos}:${segundos}`;
    setInterval(iniciarReloj, 1000)
};




















