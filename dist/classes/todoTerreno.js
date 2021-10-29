"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoTerreno = void 0;
const automovil_1 = require("./automovil");
class TodoTerreno extends automovil_1.Automovil {
    constructor(precioBase, potenciaMotor, traccion) {
        super(precioBase, potenciaMotor);
        this._traccion = traccion;
    }
    get traccion() {
        return this._traccion;
    }
    get prueba() {
        return this._precioBase; // solo accedo si es protected
    }
    // sobre escribimos el método
    precio() {
        let precio;
        precio = super.precio();
        if (this._traccion == '4x4') {
            precio += 0.1 * precio;
        }
        return precio;
    }
    todo() {
        let resultado;
        resultado = `${super.todo()}, tracción: ${this._traccion}`;
        return resultado;
    }
}
exports.TodoTerreno = TodoTerreno;
// Todoterreno (Pikachu)
// Tracción del TodoTerreno Pikachu = Traccion que le pongas
