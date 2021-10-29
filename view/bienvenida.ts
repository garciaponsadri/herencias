import { ventilador } from '../classes/ventilador';
import { ventiladorTecho } from '../classes/ventiladorTecho';
import { climatizador } from '../classes/climatizador';

// En este metodo realizaremos los imports y daremos un mensajito de bienvenida
export const inicio = async (ventiladores: Array<ventilador>) => {
  let ventiladorNormal: ventilador;
  let Techo: ventiladorTecho;
  let Climatizador: climatizador;
  // Realizaremos un push al array ventiladores del objeto que justo estemos declarando en esa misma linea.
  ventiladores.push (ventiladorNormal = new ventilador(ventiladores.length, "Sobremesa","obergozo", 50, 15, "azul", true));
  ventiladores.push (ventiladorNormal = new ventilador(ventiladores.length, "Sobremesa","belize", 35, 10, "azul", false));
  ventiladores.push (Techo = new ventiladorTecho(ventiladores.length, "Techo","dyson", 65, 15, "azul", false, "madera")); 
  ventiladores.push (Techo = new ventiladorTecho(ventiladores.length, "Techo","taurus", 40, 15, "azul", false, "madera")); 
  ventiladores.push (Climatizador = new climatizador(ventiladores.length, "Climatizador","belize", 40, 15, "azul", false, 25)); 
  ventiladores.push (Climatizador = new climatizador(ventiladores.length, "Climatizador","rowenta", 40, 15, "azul", false, 40)); 

  console.log ("Bienvenido a Ventiladores Garcia!")
  console.log(" ")
}