
const { crearArchivo } = require('./helpers/multiplicar');

console.clear();

/********************************************************************************** */
/********************************************************************************** */
/********************************************************************************** */
//* clase Recibir información desde linea de comandos:
// al ejecutar el console.log(process.argv) muestra esto en consola
/**
[
  'C:\\Program Files\\nodejs\\node.exe',    //el path donde se encuentra nuestro Node de manera global
  'C:\\Users\\JROMERO\\Documents\\NodeJS\\NodeUdemy\\03-Bases-Node\\app.js' //donde se encuentra la aplicacion ejecutada
]
 */
// console.log(process.argv);
/**Y al ejecutar en consola: node .\app.js --base=5 */
/**
   C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\JROMERO\\Documents\\NodeJS\\NodeUdemy\\03-Bases-Node\\app.js',
  '--base=5'
 */
//hay que extraer la base en consola

const [, , arg3 = 'base=5'] = process.argv;
const [ , base = 5] = arg3.split('=')

// console.log( base );


/********************************************************************************** */
/********************************************************************************** */
/********************************************************************************** */
//comentamos la const base, ya que por consola, vamos a registrar el numero de la base
// const base = 5;


crearArchivo( base )
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch( err => console.log(err));
