export default function getDefaultData() {
    return { 
        /*
        |------------------ 
        | get idInventario
        |------------------- 
        */
        txtIdInventario: null,

        statusProgress: 0,

        chartOptions: {
            chart: {
                title: 'Porcentaje de uso del cpu',
                subtitle: '--, --, --',
            }, 
            legend: { position: 'bottom' }
            , height: 500,
            vAxis: {
                maxValue: 100,
                minValue: 0
            },
            hAxis: { textPosition: 'none' },
            /* hAxis: { maxValue: 7 },
              
            lineWidth: 10 */
        },

        chartData: [
            ['% de uso', 'Uso del cpu(%) ' ], 
        ],

        contador: 1, 

        //la grafica circular

        interval: {},
        value: 0, 

    }
}