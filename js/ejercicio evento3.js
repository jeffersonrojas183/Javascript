"use strict";

const padre=document.querySelector("#padre")
const boton=document.querySelector("#boton")
const nuevo=document.createElement("img")

nuevo.classList.add("img");
nuevo.setAttribute("title","dino");
nuevo.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvConqDKIIcAVfm29dFIXaGZAevo0MxbLV8g&s");

boton.addEventListener("click", () => padre.appendChild(nuevo));
