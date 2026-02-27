// cree una clase llamada vehiculo con 3 propiedades
"use strict"



//una clase que lleva dentro 3 propiedades 
class vehiculos{
    constructor(modelo, marca, color){
        this.modelo = modelo;
        this.marca = marca;
        this.color = color;
        this.velocidad =0;
    }
    acelerar(){
        this.velocidad += 10;
    }
    desacelerar(){
        this.velocidad -= 10;
    }

}


//creamos el objetoa autoPepe
let  autoPepe = new vehiculos("TOYOTA", "RAV4", "AZUL");
console.log(autoPepe);
autoPepe.acelerar();
console.log(autoPepe);
