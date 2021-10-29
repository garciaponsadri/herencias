"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inicio = void 0;
const ventilador_1 = require("../classes/ventilador");
const ventiladorTecho_1 = require("../classes/ventiladorTecho");
const inicio = async (ventiladores) => {
    let ventiladorNormal;
    let Techo;
    ventiladores.push(ventiladorNormal = new ventilador_1.ventilador(ventiladores.length, "Sobremesa", "nike", 50, 15, "azul", true));
    ventiladores.push(ventiladorNormal = new ventilador_1.ventilador(ventiladores.length, "Sobremesa", "belize", 35, 10, "azul", false));
    ventiladores.push(Techo = new ventiladorTecho_1.ventiladorTecho(ventiladores.length, "Techo", "Aurea", 65, 15, "azul", false, "madera"));
    ventiladores.push(Techo = new ventiladorTecho_1.ventiladorTecho(ventiladores.length, "Techo", "belize", 40, 15, "azul", false, "madera"));
    console.log("Bienvenido a Ventiladores Garcia!");
    console.log(" ");
};
exports.inicio = inicio;
