<template>
<v-app>
    <v-layout
        row
        wrap>
        <v-flex
            xs6
            md3
            :key="it2.id"
            v-for="it2 in itemsTotales">
            <v-card flat>
                <v-card-text>

                    <v-hover>
                        <v-card
                            slot-scope="{ hover }"
                            class="mx-auto"
                            color="grey lighten-4"
                            max-width="600">
                            <v-img
                                :aspect-ratio="16/9"
                                :src="'https://s3.amazonaws.com/'+ it2.imagen">
                                <v-expand-transition>
                                    <div
                                        v-if="hover"
                                        class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                                        style="height: 100%;">
                                        {{it2.nombre}}
                                    </div>
                                </v-expand-transition>
                            </v-img>
                            <v-card-text
                                class="pt-4"
                                style="position: relative;">

                                <v-btn
                                    absolute
                                    color="orange"
                                    class="white--text"
                                    fab
                                    medium 
                                    right
                                    top>
                                    <v-icon>add_shopping_cart</v-icon>
                                </v-btn>
                                <div class="font-weight-light grey--text subheading mb-2">{{new Date(it2.created_at).toLocaleString()}}</div>
                                <h3 class="display-1 font-weight-light orange--text mb-2">{{it2.nombre}}</h3>
                                <div class="font-weight-light title mb-2">
                                    {{it2.clave}}
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-hover>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>

    <!-- DIALOGO -->
    <v-dialog
        v-model="dialog"
        width="800px">
        <v-card>
            <v-progress-linear v-if="barra" :indeterminate="true"></v-progress-linear>
            <v-card-title class="grey lighten-4 py-4 title">
                Insertar nuevo juego
            </v-card-title>
            <v-container
                grid-list-sm
                class="pa-4">
                <v-layout
                    row
                    wrap>
                    <v-flex
                        xs6
                        align-center
                        justify-space-between>
                        <v-layout align-center>
                            <v-avatar
                                size="40px"
                                class="mr-3">
                                <img
                    src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                    alt=""
                  >
                </v-avatar>
                                <v-text-field
                                    v-model="items.nombre"
                                    placeholder="Nombre"></v-text-field>
                        </v-layout>
                    </v-flex>
                    <v-flex xs6>
                        <v-text-field
                            v-model="items.compania"
                            prepend-icon="business"
                            placeholder="Compañía"></v-text-field>
                    </v-flex>
                    <v-flex xs6>
                        <v-text-field
                            v-model="items.clave"
                            prepend-icon="notes"
                            placeholder="Palabras claves"></v-text-field>
                    </v-flex>
                    <!-- Imagen -->
                    <v-flex xs12>
                        <div v-if="!image">
                            <v-flex
                                xs12
                                sm6>
                                <v-subheader v-text="'Seleccione una imagen'"></v-subheader>
                            </v-flex>
                            <input type="file" @change="onFileChange">
                            </div>

                            <div v-else>
                                <v-card>
                                    <v-img
                                        :src="image"
                                        height="200px">
                                    </v-img>
                                    <v-card-actions>
                                        <v-btn
                                            flat
                                            color="red"
                                            @click.native="removeImage">Eliminar Imagen</v-btn>
                                    </v-card-actions>
                                </v-card>
                                <div>

                                </div>
                            </div>
                    </v-flex>
                </v-layout>
            </v-container>
            <v-card-actions>
                <v-btn
                    flat
                    color="primary"
                    @click="dialog = false">Cancelar</v-btn>
                <v-btn
                    flat
                    @click="clckAceptar()">Guardar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <v-btn
        fab
        bottom
        right
        color="deep-orange darken-4"
        dark
        fixed
        @click="dialog = !dialog">
        <v-icon>add</v-icon>
    </v-btn>
</v-app>
</template>

<script src="./cuerpo.js">
</script>
