"use strict";

const arregloPinturas = ["imagenes/Pintura1min.gif", "imagenes/Pintura2min.gif", "imagenes/Pintura3min.gif", "imagenes/Pintura4min.gif", "imagenes/Pintura5min.gif", "imagenes/Pintura6min.gif", "imagenes/Pintura7min.gif", "imagenes/Pintura8min.gif", "imagenes/Pintura9min.gif", "imagenes/Pintura10min.gif", "imagenes/Pintura11min.gif", "imagenes/Pintura12min.gif"];

const arregloPinturasMax = ["imagenes/Pintura1max.gif", "imagenes/Pintura2max.gif", "imagenes/Pintura3max.gif", "imagenes/Pintura4max.gif", "imagenes/Pintura5max.gif", "imagenes/Pintura6max.gif", "imagenes/Pintura7max.gif", "imagenes/Pintura8max.gif", "imagenes/Pintura9max.gif", "imagenes/Pintura10max.gif", "imagenes/Pintura11max.gif", "imagenes/Pintura12max.gif"]


let contenedor = document.querySelector("#contenedor");

arregloPinturas.forEach((pintura) => {




   /* ***********caja************** */

   //crear el div
   let columna = document.createElement("div");
   columna.classList.add("col-md-4");


   let card = document.createElement("div");
   card.classList.add("card")
   card.classList.add("m-3")

   let cardBody = document.createElement("div");
   cardBody.classList.add("card-body");





   /* ***********titulo************** */
   let titulo = document.createElement("h5");
   titulo.classList.add("card-tittle");
   titulo.classList.add("text-center");
   titulo.textContent = "pintura " + (arregloPinturas.indexOf(pintura) + 1);




   /* ***********imagen************** */
   let imagen = document.createElement("img");
   imagen.src = pintura;
   imagen.classList.add("card-img-top");





   /* ***********boton************** */
   let boton = document.createElement("button");
   boton.setAttribute("data-bs-toggle", "modal");
   boton.setAttribute("data-bs-target", "#exampleModal");
   boton.classList.add("numeroBoton");
   boton.href = "#";
   boton.classList.add("d-block");
   boton.classList.add("m-auto");
   boton.classList.add("btn");
   boton.classList.add("mt-3");
   boton.classList.add("btn-primary");
   boton.textContent = "ver🔎";




   /* ***********invocar************** */
   //los articulos añaden en orden como se veria en la card
   cardBody.appendChild(titulo);
   cardBody.appendChild(imagen);
   cardBody.appendChild(boton);


   card.appendChild(cardBody);

   columna.appendChild(card);

   contenedor.appendChild(columna)


});

let botones = document.querySelectorAll(".numeroBoton");
botones.forEach((boton, i) => {
   boton.addEventListener("click", () => {
      let imagenModal = document.querySelector("#imagenGrande");
      imagenModal.src = arregloPinturasMax[i]
   });
});











