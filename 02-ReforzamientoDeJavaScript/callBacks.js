//* ¿QUE ES UN CALLBACK? 
//* Es una función que se va a ejecutar despues, en cierto punto del tiempo.
//* Los CALLBACK se mandan como argumento


/**
 * setTimeout(): es una funcion que se ejecuta despues, en cierto punto del tiempo.
 * Este setTimeout(), va a ejecutar esta funcion en un segundo.
 */
// setTimeout( () => {
//     console.log('Hola Mundo');
// },1000);



const getUsuarioById = ( id, callback ) => {

    const user = {
        id,
        nombre: 'Julio'
    }

    setTimeout( () => {                 //* Los CALLBACK se mandan como argumento a otra función.              
        callback(user);
    }, 1500 );
}


getUsuarioById(10, ( usuario ) => {
    console.log( usuario.id );
    console.log( usuario.nombre.toUpperCase() );
}) ;