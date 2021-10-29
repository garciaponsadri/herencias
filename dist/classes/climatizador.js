"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.climatizador = void 0;
const ventilador_1 = require("./ventilador");
class climatizador extends ventilador_1.ventilador {
    constructor(id, tipo, marca, potencia, peso, color, silenciador, capacidadAgua) {
        super(id, tipo, marca, potencia, peso, color, silenciador);
        this.capacidadAgua = capacidadAgua;
    }
    get capacidadAguaGet() {
        return this.capacidadAgua;
    }
    setcapacidadAgua(capacidadAgua) {
        this.capacidadAgua = capacidadAgua;
    }
    // sobre escribimos el método
    precio() {
        let precio;
        precio = super.precio();
        precio += this.capacidadAgua * 1.25;
        return precio;
    }
    todo() {
        let resultado;
        resultado = `${super.todo()}, Capacidad de Agua: ${this.capacidadAgua}, precio: ${this.precio()}`;
        return resultado;
    }
}
exports.climatizador = climatizador;
