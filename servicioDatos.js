let finDeTransmisionDeDatos = function(id){
    return new Promise((resolve) => {
        console.log('Transferencia',id,'terminada');
        resolve();
    });
};

let obtenDatosDeInternet = function(id, duracion) {
    return new Promise((resolve) => {
        console.log('Proceso', id, 'obteniendo datos de Internet');
        setTimeout(() => {
            finDeTransmisionDeDatos(id).then(() => {
                resolve();
            });
        }, duracion);
    });
};

module.exports.getDatos = obtenDatosDeInternet;