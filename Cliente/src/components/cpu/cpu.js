import getDefaultData from "./datos.js";
export default {
    /*
    |--------------------------------------------------------------------------
    | Data
    |--------------------------------------------------------------------------
    */

    data: getDefaultData,

    created() {
        this.inicializar();

    },
    /*
    |--------------------------------------------------------------------------
    | Metodos
    |--------------------------------------------------------------------------
    */
    
    methods: {
        inicializar() {

 
            this.actualizarCpu();


        },

        

        actualizarCpu() {
            //console.log("Actualizando");

            
            setTimeout(() => {
                this.clckAceptar();
                this.actualizarCpu();
            }, 2000);
        },

        /* 
        |--------------------------------------------------------------------------
        | CLICK
        |--------------------------------------------------------------------------
        */


        clckAceptar() {

            let uri = "http://35.236.64.173:3000/cpuPercent";

            this.axios
                .get(uri)
                .then((response) => { 
                    this.insertarNuevoPunto(response.data);

                })
                .catch((e) => {
                    this.println("falló");
                    //this.$log.info("FAILURE!!");
                });
        },

        println(mensaje) {

            /* eslint-disable no-console */
            console.log(mensaje);
            /* eslint-enable no-console */
        },
        /* 
        |--------------------------------------------------------------------------
        | FUNCIONES
        |--------------------------------------------------------------------------
        */
       
        insertarNuevoPunto(ejeY) {
            
        
            this.value = ejeY;

            var nuevoPunto = [this.contador,Math.round(ejeY)];
            this.chartData.push(nuevoPunto); 
            this.contador++;


            /* if (this.chartData.length>20) {
                this.chartData.splice(this.contador-19, 1);
            }   */
        }
    }
};