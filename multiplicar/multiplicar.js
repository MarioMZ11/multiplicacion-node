//requires
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        } else {

            console.log('=============='.green);
            console.log(`tabla del ${base}`.green);
            console.log('=============='.green);
            data = '';
            for (let i = 1; i <= limite; i++) {
                let multiplicacion = base * i;
                resolve(data += `${base} * ${i} = ${multiplicacion} \n`);
            }

        }
    });
}



let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido  ${base} no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido  ${limite} no es un numero`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            let multiplicacion = base * i;
            data += `${base} * ${i} = ${multiplicacion} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`Tabla del ${base} al ${limite}.txt`);

        });
    })

}

module.exports = {
    crearArchivo,
    listarTabla
}