"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nuevoObj = async (ventiladores) => {
    let buena = -1;
    for (let i = 0; i < ventiladores.length + 1 && buena < i; i++) {
        console.log("Vuelta " + i);
        if (ventiladores[i] != null) {
            console.log(i + " existe");
        }
        else {
            console.log(i + " no existe");
        }
    }
};
//console.log(`Se le ha autogenerado el ID numero ${buena}`
