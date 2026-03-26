"use strict"


//uso del date para obtener la fecha actual
/* const fechaActual = new Date();
console.log(fechaActual); */


//crear una fecha 
/* const fechaEspecifica = new Date(2022, 11, 25)
console.log(fechaEspecifica); */


//importante los meses empiezan desde 0


//obtener componentes dela fecha
/* const fecha = new Date()


//otener el año
console.log("año: ", fecha.getFullYear());

//obtener el mes (0 a 11)
console.log("mes ", fecha.getMonth()+1);

//obtener el dia del mes(1-31)
console.log("dia ", fecha.getDay())

//obtener la hora
console.log("minuto ", fecha.getHours())

//obtener minuto
console.log("segundo ", fecha.getMinutes())


let fecha1 = new Date("2003-09-04")
console.log("la fecha de nacimiento: ", fecha1);

console.log("Mes de nacimiento: ", fecha1.getMonth()+1);
 */




//maneras de dispara una funcion a la página
/* function saludar() {
    alert("hola");
} */


/* window.addEventListener("load", function() {
    alert("hola carambola")
})
 */

/* const saludar =(nombre,edad)=>{
    alert(`hola ${nombre}! tienes ${edad} años. bienvenido a la clase de javascript.`);
}; */
/* saludar("Jeff", 22); */





//uso set timeout para llamar a la funcion despues de 8 segundos
/* setTimeout(saludar, 3000, "Juan", 23); */

let num


for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        num = Math.floor(Math.random() * 10)
        console.log(num);

    }, 2000 * (i + 1));


}







/* function num() {
    for (let i = 0; i < 10; i++) {
        num=Math.floor(Math.random()*10)
       
    }
}
console.log(num); */
