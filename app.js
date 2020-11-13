const argv = require('./config/yargs');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors');
let comando = argv.argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.argv.base, argv.argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.argv.base, argv.argv.limite)
            .then(msg => {
                console.log(msg);
            })
            .catch(err => {
                console.log('Error detectado: ', err);
            });
        break;
    default:
        console.log('Comando no reconocido');
        break;
}