const servicio = require("./servicioDatos");

//Primera version
// servicio.getDatos(1,3000);
// servicio.getDatos(2,500);
// servicio.getDatos(3,4000);
// servicio.getDatos(4,700);
// servicio.getDatos(5,3500);

//Uso de Callbacks
// servicio.getDatos(1,1000, function(){
//     servicio.getDatos(2,500,function(){
//         servicio.getDatos(3,1500,function(){
//             servicio.getDatos(4,700,function(){
//                 console.log('Programa Terminado');
//             })
//         })
//     })
// });

async function obtenerDatos() {
    try {
        await servicio.getDatos(1, 1000);
        await servicio.getDatos(2, 500);
        await servicio.getDatos(3, 1500);
        await servicio.getDatos(4, 700);
        console.log('Programa Terminado');
    } catch(error) {
        console.log(error);
    }
}

obtenerDatos();