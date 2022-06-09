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

const getSalarios = (id, nombre) => {
    const salario = salarios.find(s => s.id === id)?.nombre;

    return new Promise( (resolve, reject) => {
        ( salario )? resolve( salario ): reject( `No existe el Salario de ${nombre} con el id: ${ id }` )
    })
}


//* Async - Await

const getInfoUsario = async( id ) => {

    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalarios(id);
    
        return `El salario del empleado: ${ empleado } es de ${ salario }`;
        
    } catch (error) {
        throw error;   // throw manda a llamar al reject de la funcion asincrona y entra a la funcion del catch
    }

}

const id = 3;

getInfoUsario( id )
    .then( msg => {
        console.log('TODO BIEN');
        console.log(msg)})
    .catch( err => {
        console.log('TODO MAL');
        console.log(err)});
