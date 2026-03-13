/* var total = 100;

function calcular() {
    console.log(total);
  
    
}

calcular(); */

let vocal = prompt("Escriba una vocal(a,e,i,o,u):");

/* switch (vocal) {
  case a:
    console.log("Es una vocal abierta");
    break;
  case e:
    console.log("Es una vocal abierta");
    break;
  case i:
    console.log("Es una vocal cerrada");
    break;
  case o:
    console.log("Es una vocal cerrada");
    break;
  case u:
    console.log("Es una vocal abierta");
    break;
  default:
    console.log("letra  no válida");
} */
switch (vocal) {
    case "a":
    case "e":
    case "o":
        alert("Es una vocal abierta");
        break;

    case "i":
    case "u":
        alert("Es una vocal cerrada");
        break;

    default:
        alert("letra  no válida");
}