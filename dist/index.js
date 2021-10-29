"use strict";
/*
  El archivo index.ts es el articulador de la práctica.
  Será el primero en ejecutarse y será el que gestionará el menú llamando a los métodos que el usuario elija.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const leerTeclado_1 = require("./util/leerTeclado");
const menuPract_1 = require("./view/menuPract");
const bienvenida_1 = require("./view/bienvenida");
const funciones_1 = require("./util/funciones");
const funciones_2 = require("./util/funciones");
const funciones_3 = require("./util/funciones");
const funciones_4 = require("./util/funciones");
const funciones_5 = require("./util/funciones");
const funciones_6 = require("./util/funciones");
const funciones_7 = require("./util/funciones");
// Declaramos un array que contendrá elementos de tipo "ventilador", es decir, un Array de Objetos.
let ventiladores = new Array();
// Aquí iniciamos con la función main al cual llamaremos al final de documento.
let main = async () => {
    // Lo primero será cargar la función Inicio que se encuentra en el archivo "view/bienvenida.ts"
    // Este método lanzará una bienvenida la primera vez que se 
    // ejecute el programa y creará 4 objetos ventiladores.
    await (0, bienvenida_1.inicio)(ventiladores);
    // Aquí haremos un bucle While que se repetirá por siempre.
    while (1) {
        // Lo primero será printear el menu y pedirle al usuario que elija una opción, 
        // todo esto lo realizaremos en el método menu del archivo "view/menuPract.ts"
        let opcion = parseInt(await (0, menuPract_1.menu)());
        // Haremos un Switch a la opción que haya elegido el usuario y 
        // le enviaremos a un método u otro según lo que haya elegido
        switch (opcion) {
            case 1: // Ver la lista de ventiladores
                await (0, funciones_6.listarObj)(ventiladores);
                break;
            case 2: // Buscar ventilador
                await (0, funciones_1.buscarObj)(ventiladores);
                break;
            case 3: // Eliminar un ventilador
                await (0, funciones_2.deleteObj)(ventiladores);
                break;
            case 4: //Editar ventilador
                await (0, funciones_3.actualizarObj)(ventiladores);
                break;
            case 5: // Crear un ventilador
                await (0, funciones_4.nuevoObj)(ventiladores);
                break;
            case 6: // Ver los campos del objeto que queramos (Ventilador normal/Techo/climatizador)
                await (0, funciones_5.verCamposObjetos)(ventiladores);
                break;
            case 7: // Generará objetos con valores aleatorios para poder realizar pruebas, etc.
                await (0, funciones_7.randomGenerater)(ventiladores);
                break;
        }
        // Estas líneas se ejecutarán tras cada función, pedirá que el usuario de al Enter para continuar 
        // de forma que la solución de la función ejecutada será visible hasta que demos Enter
        console.log("");
        console.log(`Pulse enter para continuar`);
        await (0, leerTeclado_1.leerTeclado)('');
        console.log(` `);
    }
};
// Esto está fuera del While, simplemente llamará a la funcion main.
main();
