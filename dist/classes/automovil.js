"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Automovil = void 0;
class Automovil {
    constructor(precioBase, potenciaMotor) {
        this._precioBase = precioBase;
        this._potenciaMotor = potenciaMotor;
    }
    get precioBase() {
        return this._precioBase;
    }
    get potenciaMotor() {
        return this._potenciaMotor;
    }
    precio() {
        let precio;
        precio = this._precioBase;
        if (this._potenciaMotor > 150) {
            precio += 0.2 * precio;
        }
        return precio;
    }
    todo() {
        return `Precio base: ${this._precioBase}, potencia: ${this._potenciaMotor}`;
    }
}
exports.Automovil = Automovil;
