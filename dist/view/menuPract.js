"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menu = void 0;
const leerTeclado_1 = require("../util/leerTeclado");
// Aquí simplemente tenemos el menu y luego mediante leerTeclado leeremos la opcion
// que quiera elegir el usuario y la devolveremos al main.
const menu = async () => {
    console.log("Que opcion prefieres?");
    console.log("1. Ver ventiladores disponibles");
    console.log("2. Buscar ventilador");
    console.log("3. Eliminar uno de los ventiladores existentes");
    console.log("4. Editar un ventilador");
    console.log("5. Crear tu propio Ventilador");
    console.log("6. Mostrar los campos de cada tipo de Ventilador");
    console.log("7. Insertar nuevos ventiladores aleatorios");
    console.log(" ");
    let opcion = await (0, leerTeclado_1.leerTeclado)(`¿Qué quiere hacer?`);
    console.log(" ");
    return opcion;
};
exports.menu = menu;
