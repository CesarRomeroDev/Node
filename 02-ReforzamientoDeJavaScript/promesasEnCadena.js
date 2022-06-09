const empleados = [
    {
        id: 1,
        nombre: 'Julio'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];

const salarios = [
    {
        id: 1,
        nombre: 1000
    },
    {
        id: 2,
        nombre: 1500
    }
];

/**Empleados */

//* resolve: es un callback que vamos a llamar si se hace todo correctamente
//* reject: Se ejecuta si sale algun error

const getEmpleado = (id) => {
    const empleado = empleados.find( e => e.id === id )?.nombre;
    
    return new Promise( (resolve, reject) => {
        ( empleado )? resolve( empleado ):  reject( `No existe empleado con id: ${ id }` ) //operador ternario 'El empleado existe? si existe resolve, no existe reject'
    });
}

const getSalarios = (id) => {
    const salario = salarios.find(s => s.id === id)?.nombre;

    return new Promise( (resolve, reject) => {
        ( salario )? resolve( salario ): reject( `No existe el Salario ${nombre} con el id: ${ id }` )
    })
}

const id = 1;

let nombre;

//* PROMESA EN CADENA.
getEmpleado(id)
    .then( empleado => {
        nombre = empleado;
        return getSalarios(id)})
    .then( salario => console.log('El emplead: ', nombre, 'Tiene un Salario de: ', salario))
    .catch( err => console.log(err));