//* const
const nombre = 'Julio';       // const ambito scop
if ( true ) {                 //scop
    const nombre = 'Magneto';
    
}
console.log(nombre);


//* let
let apellido = 'romero';    //let ambito scop
if ( true ) {
    let apellido = 'Perez';
}

console.log(apellido);


//* var 
var anos = 32;              //var se crea en un ambito global
if (true) {
    var anos = 40;
}

console.log(anos);