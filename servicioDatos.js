let finDeTransmisionDeDatos = function(id,callback){
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

const promesa = function() {
    return new Promise(function(resolve,reject) {
            resolve("Resultado esperado");
            reject("Resultado no esperado");
    });
}


module.exports.getDatos = obtenDatosDeInternet;