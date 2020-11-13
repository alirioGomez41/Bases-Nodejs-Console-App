const fs = require('fs');
const colors = require('colors');

function listarTabla(base, limite = 10) {

    console.log(`==========Tabla del ${base}============`.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} x ${i} = ${base * i}`);
    }
}

function crearArchivo(base, limite = 10) {
    return new Promise((resolve, reject) => {
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base * i}\n`;
        }
        if (!Number(base)) {
            reject(`El valor introducido "${base}" no es un numero`);
            return;
        }
        fs.writeFile(`./tablas/tabla-${base}.txt`, data, err => {
            if (err) {
                reject(err)
            } else {
                resolve(`El archivo tabla-${base}-al-${limite}.txt ha sido creado exitosamente`);
            }

        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
};