//* El infirno de los call backs


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

/** 
 *  find()
 *  devuelve el valor del primer elemento del arreglo que cumple la función de prueba proporcionada.
 */

/**Empleados */
const getEmpleado = (id, callback) => {
    const empleado = empleados.find( e => e.id === id ); 
    if( empleado ){
        callback( null, empleado.nombre);
    }else{
        callback(`El empleado con id: ${id} no existe`);
    }
}

/**Salario */
const getSalario = (id, callback) => {
    const salario = salarios.find( s => s.id === id );
    if( salario ){
        callback( null, salario.nombre);
    }else{
        callback(`No existe el salario para el id: ${id} `);
    }
}

const id = 3;

//Empleado
getEmpleado(id, (err, empleado) => {
    if (err) {
        console.log('ERROR!');
        return console.log(err);
    }

    //Salario
    getSalario(id, (err, salario) => {
        if (err){
            return console.log(err);
        }
        console.log('El emplado: ', empleado, 'Tiene un salario de: ', salario)
    })
});