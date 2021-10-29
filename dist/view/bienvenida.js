"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inicio = void 0;
const ventilador_1 = require("../classes/ventilador");
const ventiladorTecho_1 = require("../classes/ventiladorTecho");
const climatizador_1 = require("../classes/climatizador");
// En este metodo realizaremos los imports y daremos un mensajito de bienvenida
const inicio = async (ventiladores) => {
    let ventiladorNormal;
    let Techo;
    let Climatizador;
    // Realizaremos un push al array ventiladores del objeto que justo estemos declarando en esa misma linea.
    ventiladores.push(ventiladorNormal = new ventilador_1.ventilador(ventiladores.length, "Sobremesa", "obergozo", 50, 15, "azul", true));
    ventiladores.push(ventiladorNormal = new ventilador_1.ventilador(ventiladores.length, "Sobremesa", "belize", 35, 10, "azul", false));
    ventiladores.push(Techo = new ventiladorTecho_1.ventiladorTecho(ventiladores.length, "Techo", "dyson", 65, 15, "azul", false, "madera"));
    ventiladores.push(Techo = new ventiladorTecho_1.ventiladorTecho(ventiladores.length, "Techo", "taurus", 40, 15, "azul", false, "madera"));
    ventiladores.push(Climatizador = new climatizador_1.climatizador(ventiladores.length, "Climatizador", "belize", 40, 15, "azul", false, 25));
    ventiladores.push(Climatizador = new climatizador_1.climatizador(ventiladores.length, "Climatizador", "rowenta", 40, 15, "azul", false, 40));
    console.log("Bienvenido a Ventiladores Garcia!");
    console.log(" ");
};
exports.inicio = inicio;
