# Node

## Glosario

    - find(): El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
        ejemplo: 
        const array1 = [5, 12, 8, 130, 44];

        const found = array1.find(element => element > 10);

        console.log(found);
        // expected output: 12

    - then():  El método then() retorna una Promesa. Recibe dos argumentos: funciones callback  para los casos de éxito y fallo de Promise.

    - fs: es el módulo nativo de Node.js que permite interactuar con los archivos del sistema.
        web donde se encuentra https://nodejs.org/docs/latest-v14.x/api/fs.html#fs_fs_watch_filename_options_listener

    - npm init: para crear nuestro package.json, en este archivo se encuentra el script para correr nuestro programa y las dependencias instaladas
      de terceros.
    
    - npm install (nombre del paquete): para instalar paquetes de terceros.
    - npm install (nombre del paquete) --save-dev : El --save-dev indica que se instala como dependencias de desarrollo.
    - npm uninstall (nombre del paquete): para desinstalar el paquete.
    - npm install (nombre del paquete)@1.0.0 : Instalación especifica de una versión de un paquete.
    - npm update: revisa las dependencias.

    - npm i yargs: Yargs lo ayuda a crear herramientas de línea de comandos interactivas mediante el análisis de argumentos y 
      la generación de  una interfaz de usuario elegante.

    - Si eliminamos nuestra carpeta de node_modulo, es muy rapido recuperarla ya que en el package.json indica los paquetes que tenia
      instalado, asi que con un solo comando en consola los puede volver a recontruir : npm i

        Opciones:
            --help     Muestra ayuda                                        [booleano]
            --version  Muestra número de versión                            [booleano]
        -b, --base     Es la base de la tabla de multiplicar      [número] [requerido]
        -h, --hasta    Rango a mostrar                          [número] [defecto: 10]
        -l, --listar   Muestra la tabla en consola         [booleano] [defecto: false]
