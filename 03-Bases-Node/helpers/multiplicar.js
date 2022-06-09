//fs es el módulo nativo de Node.js que permite interactuar con los archivos del sistema.
//web donde se encuentra https://nodejs.org/docs/latest-v14.x/api/fs.html#fs_fs_watch_filename_options_listener
const fs = require('fs');

const crearArchivo = async( base ) => {         //hacemos la funcion en asincrona com async

    try {
        console.log('===================');
        console.log(`   Tabla del:`, base );
        console.log('===================');
    
        let salida = '';
    
        for (let i = 1; i <= 10; i++) {
            salida += `${ base } x ${ i } = ${ base * i }\n`;
        }
        console.log(salida);
    
    //* Forma Larga
        // fs.writeFile( `tabla-${ base }.txt`, salida, (err) => {
        //     if (err) throw err;
        //     console.log( `tabla-${ base }.txt creado`);
        // });
    
    //** Forma Corta
    /** Nombre del archivo: tabla-${ base }.txt */
    /** salida: Data */
    
        fs.writeFileSync( `tabla-${ base }.txt`, salida );
        return `tabla-${ base }.txt`;
        
    } catch (err) {
        throw console.log(err);
    }


}

module.exports = {
    crearArchivo: crearArchivo
}