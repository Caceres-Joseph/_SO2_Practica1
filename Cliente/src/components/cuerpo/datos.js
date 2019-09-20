export default function getDefaultData() {
    return {
        isSaving: false,
        items: {
            nombre: "",
            compania: "",
            imagen: "",
            clave: ""
        },
        dialog: false,
        /*
        |------------------ 
        | get idInventario
        |------------------- 
        */
        txtIdInventario: null,


        /*
        |------------------ 
        | Imagen
        |------------------- 
        */

        image: "",
        imageName: "",
        files2: [],
        item: {},
        /*
        |------------------ 
        | Imagen
        |------------------- 
        */
        itemsTotales: [],
        barra: false

    }
}