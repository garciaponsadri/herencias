export class ventilador {
  protected id: number;
  protected tipo: String;
  protected potencia: number; // para acceder en la subclase
  protected peso: number; // para acceder en la subclase
  protected color: String; // para acceder en la subclase
  protected marca: String; // para acceder en la subclase
  protected silenciador: boolean; // para acceder en la subclase
  
  constructor(id: number, tipo: string, marca: string, potencia: number, peso: number, color: string, silenciador: boolean) {
    this.id= id;
    this.tipo = tipo;
    this.marca = marca;
    this.potencia = potencia;
    this.peso = peso;
    this.color = color;
    this.silenciador = silenciador;
  }
  setPotencia(potencia: number) {
    this.potencia=potencia
  }

  setMarca(marca: string) {
    this.marca=marca
  }

  setPeso(peso: number) {
    this.peso=peso
  }

  setColor(color: string) {
    this.color=color
  }

  setSilenciador(silenciador: boolean) {
    this.silenciador=silenciador
  }

  get potenciaObjeto()  {
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
  
  precio(): number {
    let precio = this.potencia/5 + this.peso/10;
    if (this.silenciador == true) {
      precio += 20;
    }
    return precio;
  }
  
  todo() {
    return `Id: ${this.id}, Tipo: ${this.tipo}, Marca: ${this.marca}, Potencia: ${this.potencia}, Peso: ${this.peso}, Color: ${this.color}, silenciador: ${this.silenciador}`
  }
  general() {
    return `Id: ${this.id}, Tipo: ${this.tipo}, Marca: ${this.marca}, Potencia: ${this.potencia}`;
  }
}
