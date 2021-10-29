"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menu = void 0;
const leerTeclado_1 = require("./leerTeclado");
const menu = async () => {
    console.log("Que opcion prefieres?");
    console.log("1. Ver ventiladores disponibles");
    console.log("2. Buscar ventilador");
    console.log("3. Eliminar uno de los ventiladores existentes");
    console.log("4. Editar un ventilador");
    console.log("5. Crear tu propio Ventilador");
    console.log("6. Salir");
    let opcion = await (0, leerTeclado_1.leerTeclado)(`¿Qué quiere hacer?`);
    console.log(" ");
    return opcion;
};
exports.menu = menu;
