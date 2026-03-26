"use strict";



//ejercicio 19 eventos
const boton = document.querySelector("#calcular");

/* 
const resultado = document.querySelector("#resultado");

const boton2=document.querySelector("#quitar")



boton.addEventListener("click", () => {
    resultado.textContent = "Hola jeff";
    resultado.classList.add("formatoNuevo")


})

boton2.addEventListener("click", () => resultado.classList.remove("formatoNuevo")); */
   





/* boton.addEventListener("click", ()=> resultado.textContent="Hola Jeff") */





/* const padre=document.querySelector("#padre");
 padre.style.border= "2px solid black"
padre.style.fontSize="50px"
 padre.style.color="red";  */


/*const hijos=document.querySelectorAll("#padre li:nth-child(even)"); */
//selecciona todos los hijos
/* hijos.style.color="red"; */

/* 
hijos.forEach(elemento => {
    elemento.style.color="red";
})

const seleccion =hijos[4].parentNode;
seleccion.style.backgroundColor="yellow"
console.log(seleccion);



const hijos2=document.querySelector("#padre").children;

for (let i = 0; i < hijos2.length; i++) {
  hijos2[i].style.color="blue"
    
} */


/* hijos2.forEach(elemento =>  {
    if (elemento.nodeType === 1) {
        
        elemento.style.color="blue";
    }
}); */





//createElement


const nuevo=document.createElement("div");
nuevo.classList.add("formatoNuevo");
nuevo.id="caja";
nuevo.setAttribute=("title","caja de herramientas");
nuevo.textContent="caja de herramientas";
/* padre.appenchild(nuevo); */
padre.insertBefore(nuevo,padre.children[0]);

const body = document.body;

console.log(nuevo);







