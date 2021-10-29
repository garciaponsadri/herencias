import { ventilador } from './ventilador';
export class climatizador extends ventilador {
  protected capacidadAgua: number;
  constructor(id: number, tipo: string, marca: string, potencia: number, peso: number, color: string, silenciador: boolean, capacidadAgua: number) {
    super(id, tipo, marca, potencia, peso, color, silenciador);
    this.capacidadAgua = capacidadAgua;
  }
  
  get capacidadAguaGet() {
    return this.capacidadAgua;
  }

  setcapacidadAgua(capacidadAgua: number) {
    this.capacidadAgua=capacidadAgua
  }

  // sobre escribimos el método
  precio(): number {
    let precio: number;
    precio = super.precio()
    precio += this.capacidadAgua * 1.25    
    return precio;
  }

  todo(){
    let resultado: string
    resultado = `${super.todo()}, Capacidad de Agua: ${this.capacidadAgua}, precio: ${this.precio()}`
    return resultado
  }
}
