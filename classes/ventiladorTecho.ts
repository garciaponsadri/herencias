import { ventilador } from './ventilador';
export class ventiladorTecho extends ventilador {
  protected aspas: string;
  constructor(id: number, tipo: string, marca: string, potencia: number, peso: number, color: string, silenciador: boolean, aspas: string) {
    super(id, tipo, marca, potencia, peso, color, silenciador);
    this.aspas = aspas;
  }
  get aspasGet() {
    return this.aspas;
  }

  setAspas(aspas: string) {
    this.aspas=aspas
  }

  // sobre escribimos el método precio
  precio(): number {
    let precio: number;
    precio = super.precio()
    interface AspasList {
      [key: string]: number;
    }
    let foo:AspasList = {};
    foo['madera'] = 15;
    foo['acero'] = 25;
    foo['plastico'] = 5;
    if(this.aspas=="madera" || this.aspas=="acero" || this.aspas=="plastico") {
      precio += foo[this.aspas];
    }
    return precio;
  }

  todo(){
    let resultado: string
    resultado = `${super.todo()}, aspas: ${this.aspas}, precio: ${this.precio()}`
    return resultado
  }
}
