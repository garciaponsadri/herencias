# Adrià García Pons : Práctica Typescript
_Fecha: 08/10/2021_

### Información General 📋
* Primera práctica Typescript
* Las explicaciones del código están documentadas en el mismo código pero también las encontraremos dentro del PDF 📖   
* Las capturas de cada función (desde la vista del usuario que las usa), están también en el PDF.

### Advertencia ⚠️
* En esta práctica habrá cosas que demos por hecho de las explicadas en la anterior práctica [Anterior Práctica](https://github.com/garciaponsadri/PrimerProyecto)

### Estructura de archivos 🛠️:

     -> doc:
           > documentación.pdf

         -> util                    // Este directorio contiene los archivos typescript que forman el proyecto excepto el index.
              > funciones.ts        // Este archivo contiene las funciones que serán llamadas por el index y que cada una representa una función de la práctica
              > metodos.ts          // Aquí tenemos los métodos que serán llamados por las funciones y desarrollarán funciones concretas.
              > entradaTeclado.ts   // Este archivo contiene la función de "leerTeclado" que utilizamos a lo largo de todo el proyecto.
             
          > index.ts                // Este archivo Typescript es el principal ya que su código será lo que primero se inicie al ejecutar el proyecto (Una vez esté compilado a .js).
         
         -> classes                 
              > ventilador.ts       // Este archivo pertenece al objeto principal ventilador
              > ventiladorTecho.ts  // Este archivo pertenece a la herencia del objeto ventilador; ventiladorTecho
              > climatizador.ts     // Este archivo pertenece a la herencia del objeto ventilador; climatizador
              
        -> view                  
              > menuPract.ts        // Este archivo contiene el menu de la practica y se ejecutará cada vez que acabemos una función
              > bienvenida.ts       // Este archivo se ejecutará solo al iniciar la práctica y realizará unos imports.
             
             
      > .gitignore                  // Archivo que permite que se ignoren los directorios/archivos que estén escritos en él al subirse el repositorio.
      > package-lock.json           // Registro de la fuente y versión de cada uno de los paquetes instalados con npm.
      > package.json                // Archivo utilizado para definir los paquetes que forman las dependencias del proyecto. 
      > tsconfig.json               // Archivo de configuración de Typescript.
      
      x Node-Modules                // Este directorio no ha sido subido por estar incluido en el .gitignore.
      x dist                        // Este directorio no ha sido subido por estar incluido en el .gitignore.
          
      > README.md
