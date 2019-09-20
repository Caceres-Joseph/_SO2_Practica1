<template>
<v-app>
    <v-layout
        row
        wrap>

        <v-flex
            xs12
            md6>
            <v-card-text>
                <v-card height="200">
                    <v-card-title primary-title>
                        <v-layout
                            row
                            wrap>
                            <br>
                            <v-flex xs12>

                                <div class="text-xs-center"><span class=" headline">Total de Procesos</span></div>
                            </v-flex>
                            <v-flex xs12>
                                <br>
                                <v-divider></v-divider>
                                <br>
                                </v-flex>
                                <v-flex xs12>

                                    <div class="text-xs-center"><span class=" display-1">{{desserts.length}}</span><span class=" subheading" ></span></div>

                                </v-flex>
                        </v-layout>
                    </v-card-title>
                </v-card>
            </v-card-text>
        </v-flex>

        <v-flex
            xs12
            md6>
            <v-card-text>
                <v-card height="200">
                    <v-card-title primary-title>
                        <v-layout
                            row
                            wrap>
                            <v-flex xs12>
                                <br>
                                <v-layout
                                    row
                                    wrap>
                                    <v-flex
                                        xs12
                                        md6>
                                        <div class="text-xs-center"><span class=" subheading" >Suspendidos: </span><span class=" headline">{{totales.totalSuspendidos}}</span></div>
                                    </v-flex>
                                    <v-flex
                                        xs12
                                        md6>
                                        <div class="text-xs-center"><span class=" subheading" >En ejecución: </span><span class=" headline">{{totales.totalEjecutados}}</span><span class=" subheading" ></span></div>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                            <v-flex xs12>
                                <v-divider></v-divider>
                                <br>
                                <v-layout
                                    row
                                    wrap>
                                    <v-flex
                                        xs12
                                        md6>
                                        <div class="text-xs-center"><span class=" subheading" >Zombies: </span><span class=" headline">{{totales.totalZombies}}</span><span class=" subheading" ></span></div>
                                    </v-flex>
                                    <v-flex
                                        xs12
                                        md6>
                                        <div class="text-xs-center"><span class=" subheading" >Detenidos: </span><span class=" headline">{{totales.totalDetenido}}</span><span class=" subheading" ></span></div>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                        </v-layout>
                    </v-card-title>
                </v-card>
            </v-card-text>
        </v-flex>
        <v-flex xs12>

            <v-flex xs12>

                <!-- <v-btn
                    flat
                    small
                    color="primary"
                    @click="clckAceptar">Aceptar</v-btn> -->
            </v-flex>

            <!-- Buscar -->
            <v-card-title>
                <v-divider></v-divider>
                <v-text-field
                    append-icon="search"
                    flat
                    hide-details
                    label="Buscar"
                    single-line
                    solo-inverted
                    v-model="search"></v-text-field>
            </v-card-title>

            <v-card-text>

                <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :search="search"
                    class="elevation-1">
                    <template v-slot:items="props">
                        <td class="text-xs-right">{{ props.item.pid }}</td>
                        <td class="text-xs-left">{{ props.item.nombre }}</td>
                        <td class="text-xs-center">{{ props.item.memoria }}</td>
                        <td class="text-xs-left">{{ props.item.estado }}</td>
                        <td class="justify-center layout px-0"> 
                            <v-icon
                                medium
                                @click="deleteItem(props.item)">
                                delete
                            </v-icon>
                        </td>

                    </template>
                </v-data-table>

            </v-card-text>
        </v-flex>
    </v-layout>

</v-app>
</template>

<script src="./home.js">
</script>
