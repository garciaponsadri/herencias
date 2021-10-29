"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ventilador = void 0;
class ventilador {
    constructor(id, tipo, marca, potencia, peso, color, silenciador) {
        this.id = id;
        this.tipo = tipo;
        this.marca = marca;
        this.potencia = potencia;
        this.peso = peso;
        this.color = color;
        this.silenciador = silenciador;
    }
    setPotencia(potencia) {
        this.potencia = potencia;
    }
    setMarca(marca) {
        this.marca = marca;
    }
    setPeso(peso) {
        this.peso = peso;
    }
    setColor(color) {
        this.color = color;
    }
    setSilenciador(silenciador) {
        this.silenciador = silenciador;
    }
    get potenciaObjeto() {
        return this.potencia;
    }
    get tipoObjeto() {
        return this.tipo;
    }
    get pesoObjeto() {
        return this.peso;
    }
    get marcaObjeto() {
        return this.marca;
    }
    get colorObjeto() {
        return this.color;
    }
    get silenciadorObjeto() {
        return this.silenciador;
    }
    get identificador() {
        return this.id;
    }
    precio() {
        let precio = this.potencia / 5 + this.peso / 10;
        if (this.silenciador == true) {
            precio += 20;
        }
        return precio;
    }
    todo() {
        return `Id: ${this.id}, Tipo: ${this.tipo}, Marca: ${this.marca}, Potencia: ${this.potencia}, Peso: ${this.peso}, Color: ${this.color}, silenciador: ${this.silenciador}`;
    }
    general() {
        return `Id: ${this.id}, Tipo: ${this.tipo}, Marca: ${this.marca}, Potencia: ${this.potencia}`;
    }
}
exports.ventilador = ventilador;
