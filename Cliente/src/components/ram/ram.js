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
            //this.valoresIniciales();


        },


        actualizarCpu() {
            //console.log("Actualizando");
            setTimeout(() => {
                this.clckAceptar();
                this.actualizarCpu();
            }, 2000);
        },
        valoresIniciales() {


            let uri = "http://35.236.64.173:3000/totalRam";

            this.axios
                .get(uri)
                .then((response) => {
                    this.totalRam = response.data;

                })
                .catch((e) => {
                    this.println("falló");
                    //this.$log.info("FAILURE!!");
                });
        },

        /* 
        |--------------------------------------------------------------------------
        | CLICK
        |--------------------------------------------------------------------------
        */


        clckAceptar() {

            let uri = "http://35.236.64.173:3000/ramPercent";

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

            this.totalRam = Math.round(ejeY.totalMemMb);
            this.value =  Math.round(ejeY.freeMemMb);
            this.percent = Math.round(100-ejeY.freeMemPercentage);

            var nuevoPunto = [this.contador,this.totalRam-this.value];
            this.chartData.push(nuevoPunto);
            this.contador++;


            /* if (this.chartData.length>20) {
                this.chartData.splice(this.contador-19, 1);
            }   */
        }
    }
};