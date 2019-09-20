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

            let uri = "http://52.15.87.95:3000/tasks";
 
            this.axios
                .get(uri)
                .then((response) => {
                    this.println(response.data);
                    this.itemsTotales = response.data;
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


            if (this.items.nombre == "" || this.items.compania == "" || !this.files2.length || this.items.clave == "") {
                this.println("Hay que llenar todos los campos");
                return;
            }

            this.barra = true;
            this.subirImag(this.files2[0]); //con est estoy subiendo la imagen al servidor 

        },


        /* 
        |--------------------------------------------------------------------------
        | GUARDAR EN BASE
        |--------------------------------------------------------------------------
        */

        registroDB(nombreImagen) {
            this.items.imagen = nombreImagen;

            let uri = "http://52.15.87.95:3000/tasks";
 
            this.axios
                .post(uri, this.items)
                .then((response) => {
                    this.println(response.data);

                    setTimeout(() => {
                        Object.assign(this.$data, getDefaultData());
                        this.inicializar();
                    }, 1000);
                })
                .catch((e) => {
                    this.println("falló");
                    //this.$log.info("FAILURE!!");
                });
        },

        limpiarCampos() {

        },



        /* 
        |--------------------------------------------------------------------------
        | IMAGEN
        |--------------------------------------------------------------------------
        */

        subirImag(file) {
            let formData = new FormData();
            let uri = "http://52.15.87.95:3000/upload";
            formData.append("file", file);

            this.axios
                .post(uri, formData)
                .then((response) => {
                    //this.$log.info("SUCCESS!!");
                    //this.println("archivo:" + response.data);
                    this.registroDB(response.data);
                })
                .catch(function () {
                    this.println("falló");
                    //this.$log.info("FAILURE!!");
                });
        },
        sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        },
        subirImagen() {
            if (!this.files2.length) return;
            this.subirImag(this.files2[0]);
        },
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            this.files2 = e.target.files || e.dataTransfer.files;
            this.imageName = files[0].name;
            if (!files.length) return;
            this.createImage(files[0]);
        },
        createImage(file) {
            var image = new Image();
            var reader = new FileReader();
            var vm = this;

            reader.onload = e => {
                vm.image = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        removeImage: function (e) {
            this.image = "";
            this.files2 = [];
        },

        filesChange(p1, p2) {
            //this.println(p1);
            //this.println(p2);
            //this.println(p2[0].name);
            this.items.imagen = p2[0].name;
        },
        /* 
        |--------------------------------------------------------------------------
        | CONSOLA
        |--------------------------------------------------------------------------
        */

        println(mensaje) {

            /* eslint-disable no-console */
            console.log(mensaje);
            /* eslint-enable no-console */
        },
    }
};