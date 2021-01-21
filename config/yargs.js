const opcs = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multipliucar', opcs)
    .command('crear', 'Crea un archivo con las tablas de multiplicar', opcs)
    .help()
    .argv;

module.exports = {
    argv
}