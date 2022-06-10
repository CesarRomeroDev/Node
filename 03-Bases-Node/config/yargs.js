const argv = require('yargs')
                .options('b', {     //comando de opcion
                   alias: 'base',   //comando alias completo
                   type: 'number',  //comando numero
                   demandOption: true,   //si ejecuta comando no completo, manda las opciones
                   describe: 'Es la base de la tabla de multiplicar'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    description: 'Rango a mostrar'
                })
                .option('l', {      //* Bandera de listar tabla
                  alias: 'listar',
                  type: 'boolean',
                  default: false,
                  describe: 'Muestra la tabla en consola'
                })
                .check((argv, option) => {
                  if ( isNaN( argv.b )) {
                    throw 'La base tiene que ser un numero'
                  }
                  return true;
                })
                .argv;

module.exports = argv;