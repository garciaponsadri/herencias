"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.leerTeclado = void 0;
const readline_1 = __importDefault(require("readline"));
let readlineI;
let leelinea = (prompt) => {
    readlineI = readline_1.default.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise((resuelta, rechazada) => {
        readlineI.question(`${prompt}: `, (cadenaEntrada) => {
            resuelta(cadenaEntrada);
        });
    });
};
let leerTeclado = async (prompt) => {
    let entrada = await leelinea(prompt);
    readlineI.close();
    return entrada;
};
exports.leerTeclado = leerTeclado;
