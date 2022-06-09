const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    // edad: 50,
    getNombre(){
        return `${ this.nombre } ${this.apellido} ${this.poder}`
    }
}
//* DESESTRUCTURACIÓN TEMPLATE STRING
// console.log(deadpool.getNombre());

//* DESESTRUCTURACIÓN EN VARIABLES
// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

//* DESESTRUCTURACION EN UNA FUNCION EN ARGUMENTOS

function imprimeHeroe({ nombre, apellido, poder, edad = 0 }) {
    nombre = 'Julio'
    console.log(nombre, apellido, poder, edad);
}

imprimeHeroe(deadpool);


//* DESESTRUCTURACIÓN EN OBJETOS
// const { nombre, apellido, poder, edad = 0 } = deadpool;
// console.log(nombre, apellido, poder, edad);

//* DESESTRUCTURACION DE ARREGLO
const heroes = ['Deadpool', 'Superman', 'Batman'];

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

const [ , , h3] = heroes           //desestructuración de un arreglo, solo se tienen que dejar las comas en su lugar determinado

console.log(h3);