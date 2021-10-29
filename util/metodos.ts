import { ventilador } from '../classes/ventilador';
import { ventiladorTecho } from '../classes/ventiladorTecho';
import { leerTeclado } from './leerTeclado'

/* MÉTODOS LLAMADOS UNICAMENTE POR OTROS MÉTODOS */

// Este primer método nos permite ver 1 o varios objetos que cumplan con el requisito que le enviemos.
// Recibirá como parámetro el Array (ventiladores), 
// el tipo de información a buscar (Tipo de ventilador, Id de ventilador o Marca de Ventilador) 
// y por último la información a buscar 
export const verObjId = async (myArray: Array<ventilador>, identify: number | string, tipoBusqueda: string) => {
  // Lo primero será recorrer el Array de Ventiladores, en caso de que el objeto 
  // no sea Undefined comenzaremos con el proceso
  for (let a of myArray) {
    if (typeof a === 'undefined') {
      console.log("Elemento nulo")
    } else {
      // Realizaremos un Switch para realizar una pequeña función distinta según el tipo de información a buscar.
      switch (tipoBusqueda) {
        // En caso de Id veremos que el campo Id del objeto coincide con la introducida y mostraremos el objeto.
        case "Id":
          if (a.identificador == identify) {
            console.log(`${a.todo()}`)
          }
          break;
        // En caso de buscar por marca iremos imprimiento todo objeto que coincida.
        case "Marca":
          if (a.marcaObjeto == identify) {
            console.log(`${a.todo()}`)
          }
          break;
        // En caso de tipo imprimiremos todo objeto que sea del tipo introducido.
        case "Tipo":
          if (a.tipoObjeto == identify) {
            console.log(`${a.todo()}`)
          }
          break;
      }
    }
  }
}

// Este segundo método nos sirve para generar un nuevo Id.
// Imaginemos que tenemos el siguiente Array: [0-> Verde, 1-> Azul, 3-> Rojo]
// En caso de generar un nuevo elemento probablemente nos elegiría el Id 4 aunque el Id 2 esté vacío.
// Con el método getNewId comprobaremos las Id's que no están siendo ocupadas 
// y serán asignadas a los nuevos objetos. Esto en caso de eliminar un objeto permitirá crear uno nuevo con su Id.
export const getNewId = async (myArray: Array<ventilador>) => {

  // Lo primero, asignaremos a la variable Identify myArray.length, valor el cual en caso de estar llena la array,
  // es decir, no tener id's sin usar, será la Id que le asignaremos.
  let identify = myArray.length;

  // Ahora recorreremos el Array, comprobaremos que el objeto no sea undefined para operar.
  for (let a of myArray) {
    if (typeof a !== 'undefined') {

      // En caso de que el Id del objeto sea superior al Id de su posición en el array
      // y que la posición del objeto en el array sea menor que el índice que de momento tenemos seleccionado.
      if (a.identificador > myArray.indexOf(a) && myArray.indexOf(a) < identify) {
        // En caso de que las condiciones se cumplan asignaremos a Identify el siguiente valor:
        identify = a.identificador - (a.identificador - myArray.indexOf(a))
      }
    } else {
      // En caso de error, es decir, de que un objeto sea undefined avisaremos 
      // y le asignaremos al nuevo objeto un indice de emergencia.
      console.log("Se ha encontrado un elemento corrupto, por favor, pongase en contacto con el equipo informático, se le asignará como emergencia la Id actual " + myArray.indexOf(a))
      identify = myArray.indexOf(a)+1
    }
  }
  // Aquí informaremos del índice elegido y se lo mandaremos de vuelta al método que haya llamado.
  console.log("Se le ha seleccionado el Id: " + identify)
  return identify
}

// Este método lo llamaremos cada vez que creemos un nuevo objeto para ordenar el Array.
// Cuando realizamos un push a un array el elemento está en ultimo lugar, para evitar
// problemas y que sea lo más funcional posible la práctica los objetos se ordenarán según
// su Id de forma automática.

export const ordenarArray = async (myArray: Array<ventilador>) => {
  // En la variable n guardaremos el tamaño del array
  let n = myArray.length

  // Haremos un doble bucle for que para cada elemento del array recorreremos todos los elementos del array
  for (let i = 0; i < n; i++) {
    for (let a of myArray) {

      // Dentro del doble bucle for invertiremos de lugar a los elementos en caso de que el elemento
      // que esté en una posición más grande tenga un Id más pequeño que el objeto en una posición más pequeña.
      if (myArray.indexOf(a) > i) {
        if (a.identificador < myArray[i].identificador) {
          let pos = myArray.indexOf(a)
          let aux = myArray[i]
          myArray[i] = myArray[pos]
          myArray[pos] = aux
        }
      }
    }
  }
  return myArray
}
