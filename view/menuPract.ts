import { leerTeclado } from '../util/leerTeclado'

// Aquí simplemente tenemos el menu y luego mediante leerTeclado leeremos la opcion
// que quiera elegir el usuario y la devolveremos al main.
export const menu = async () => {
console.log ("Que opcion prefieres?")
console.log ("1. Ver ventiladores disponibles")
console.log ("2. Buscar ventilador")
console.log ("3. Eliminar uno de los ventiladores existentes")
console.log ("4. Editar un ventilador")
console.log ("5. Crear tu propio Ventilador")
console.log ("6. Mostrar los campos de cada tipo de Ventilador")
console.log ("7. Insertar nuevos ventiladores aleatorios")
console.log (" ")
let opcion = await leerTeclado(`¿Qué quiere hacer?`)
console.log(" ")
return opcion
}