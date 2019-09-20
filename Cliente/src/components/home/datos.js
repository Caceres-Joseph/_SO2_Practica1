export default function getDefaultData() {
    return { 
        /*
        |------------------ 
        | get idInventario
        |------------------- 
        */
        txtIdInventario: null, 

        headers: [
            {
              text: 'PID',
              align: 'right', 
              value: 'pid'
            },
            {
              text: 'Nombre',
              align: 'left', 
              value: 'nombre'
            },
            {
              text: 'Memoria',
              align: 'center', 
              value: 'memoria'
            },
            {
              text: 'Estado',
              align: 'left', 
              value: 'estado'
            },
            {

                text: "Acciones",
                sortable: false,
                align: 'center'
            }
        ],
        desserts: [], 
        totales: {
            totalDetenido: 0,
            totalEjecutados: 0,
            totalRegistros: 0,
            totalSuspendidos: 0,
            totalZombies:0
        }, 
        search:""
    }
}