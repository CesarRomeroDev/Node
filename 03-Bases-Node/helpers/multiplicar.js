//fs es el módulo nativo de Node.js que permite interactuar con los archivos del sistema.
//web donde se encuentra https://nodejs.org/docs/latest-v14.x/api/fs.html#fs_fs_watch_filename_options_listener
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false , rango = 10) => {         //hacemos la funcion en asincrona com async
    try {
    
        let salida = '';
        let consola = '';
    
        for (let i = 1; i <= rango; i++) {
            salida += `${ base } x ${ i } = ${ base * i }\n`;
            consola += `${ base } ${'x'.green} ${ i } ${'='.green} ${ base * i }\n`;
        }
        if (listar === true) {
            console.log(colors.red.underline('==================='));
            console.log(colors.rainbow(`   Tabla del:` ), base);
            console.log(colors.red.underline('==================='));
            console.log(consola);
        }
    
    //* Forma Larga
        // fs.writeFile( `tabla-${ base }.txt`, salida, (err) => {
        //     if (err) throw err;
        //     console.log( `tabla-${ base }.txt creado`);
        // });
    
    //** Forma Corta
    /** Nombre del archivo: tabla-${ base }.txt */
    /** salida: Data */
    
        fs.writeFileSync( `./next/tabla-${ base }.txt`, salida );
        return `tabla-${ base }.txt`;
        
    } catch (err) {
        throw console.log(err);
    }


}

module.exports = {
    crearArchivo: crearArchivo
}