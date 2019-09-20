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

            this.clckAceptar(); 
            this.actualizarCpu();


        },

        

        actualizarCpu() {
            //console.log("Actualizando");

            
            setTimeout(() => {
                this.clckAceptar();
                this.actualizarCpu();
            }, 3000);
        },
        /* 
        |--------------------------------------------------------------------------
        | CLICK
        |--------------------------------------------------------------------------
        */


        clckAceptar() {

            let uri = "http://35.236.64.173:3000/getProcess";

            this.axios
                .get(uri)
                .then((response) => {
                    //this.println(response.data);
                    this.desserts = response.data.procesos;
                    this.totales = response.data.totales;

                })
                .catch((e) => {
                    this.println("falló"); 
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
        deleteItem(e) {
            this.println(e);

            let uri = "http://35.236.64.173:3000/killProcess";

            
            this.axios
                .post(uri, e )
                .then((response) => { 
                    this.println(response.data);
                })
                .catch((e) => {
                    this.println("falló"); 
                });


       } 
    }
};