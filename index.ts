/*
  El archivo index.ts es el articulador de la práctica.
  Será el primero en ejecutarse y será el que gestionará el menú llamando a los métodos que el usuario elija.
*/

// Comenzaremos realizando los import tanto a métodos como a objetos.
import { ventilador } from './classes/ventilador';
import {leerTeclado} from './util/leerTeclado'
import {menu} from './view/menuPract'
import {inicio} from './view/bienvenida'
import { buscarObj } from './util/funciones'
import { deleteObj } from './util/funciones'
import { actualizarObj } from './util/funciones'
import { nuevoObj } from './util/funciones'
import { verCamposObjetos } from './util/funciones'
import { listarObj } from './util/funciones'
import { randomGenerater } from './util/funciones'

// Declaramos un array que contendrá elementos de tipo "ventilador", es decir, un Array de Objetos.
let ventiladores: Array<ventilador> = new Array<ventilador>();

// Aquí iniciamos con la función main al cual llamaremos al final de documento.
let main = async () => {
  // Lo primero será cargar la función Inicio que se encuentra en el archivo "view/bienvenida.ts"
  // Este método lanzará una bienvenida la primera vez que se 
  // ejecute el programa y creará 4 objetos ventiladores.
  await inicio(ventiladores)

  // Aquí haremos un bucle While que se repetirá por siempre.
  while(1) {
  // Lo primero será printear el menu y pedirle al usuario que elija una opción, 
  // todo esto lo realizaremos en el método menu del archivo "view/menuPract.ts"
  let opcion = parseInt(await menu())
  // Haremos un Switch a la opción que haya elegido el usuario y 
  // le enviaremos a un método u otro según lo que haya elegido
  switch (opcion) {
    case 1: // Ver la lista de ventiladores
      await listarObj(ventiladores)
    break;

    case 2: // Buscar ventilador
      await buscarObj(ventiladores)
    break;

    case 3: // Eliminar un ventilador
      await deleteObj(ventiladores)
    break;

    case 4: //Editar ventilador
      await actualizarObj(ventiladores)
    break;

    case 5: // Crear un ventilador
      await nuevoObj(ventiladores)
    break;
    
    case 6: // Ver los campos del objeto que queramos (Ventilador normal/Techo/climatizador)
      await verCamposObjetos(ventiladores)
    break;

    case 7: // Generará objetos con valores aleatorios para poder realizar pruebas, etc.
      await randomGenerater(ventiladores)
    break;
  }

  // Estas líneas se ejecutarán tras cada función, pedirá que el usuario de al Enter para continuar 
  // de forma que la solución de la función ejecutada será visible hasta que demos Enter
  console.log("")
  console.log(`Pulse enter para continuar`)
  await leerTeclado ('')
  console.log(` `)
  }
}

// Esto está fuera del While, simplemente llamará a la funcion main.
main()