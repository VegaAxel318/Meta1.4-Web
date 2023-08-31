const servicio = require("./servicioDatos");

//Primera version
// servicio.getDatos(1,3000);
// servicio.getDatos(2,500);
// servicio.getDatos(3,4000);
// servicio.getDatos(4,700);
// servicio.getDatos(5,3500);

//Uso de Callbacks
servicio.getDatos(1,1000, function(){
    servicio.getDatos(2,500,function(){
        servicio.getDatos(3,1500,function(){
            servicio.getDatos(4,700,function(){
                console.log('Programa Terminado');
            })
        })
    })
});