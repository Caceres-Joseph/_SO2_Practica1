<template>
<v-app>
    <v-layout
        row
        wrap>
        <v-flex xs12>
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
                                    <v-flex xs12>

                                        <div class="text-xs-center"><span class=" headline">Total de Memoria</span></div>
                                    </v-flex>
                                    <v-flex xs12>

                                        <div class="text-xs-center"><span class=" display-1">{{totalRam}}</span><span class=" subheading" >MB</span></div>

                                    </v-flex>
                                    <v-flex xs12>
                                        <v-divider></v-divider>
                                        <br>
                                        <v-layout
                                            row
                                            wrap>
                                            <v-flex xs12 md6>
                                                <div class="text-xs-center"><span class=" headline">Libre:{{value}}</span><span class=" subheading" >MB</span></div>
                                            </v-flex>
                                            <v-flex xs12 md6>
                                                <div class="text-xs-center"><span class=" headline">Ocupado:{{totalRam-value}}</span><span class=" subheading" >MB</span></div>
                                            </v-flex>
                                        </v-layout>
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
                            <v-card-title class="text-xs-center">
                                <div class="text-xs-center"><span class=" headline">Uso de RAM %</span></div>

                            </v-card-title>
                            <div class="text-xs-center">
                                <v-progress-circular
                                    :rotate="100"
                                    :size="100"
                                    :width="15"
                                    :value="percent"
                                    color="primary">
                                    {{ Math.round(percent) }}%
                                </v-progress-circular>
                            </div>

                        </v-card>

                    </v-card-text>
                </v-flex>
                <v-divider></v-divider>
                <v-flex xs12>
                    <v-card-text>
                        <v-card>

                            <GChart
                                type="LineChart"
                                :data="chartData"
                                :options="chartOptions" />
                        </v-card>
                    </v-card-text>
                </v-flex>

            </v-layout>
        </v-flex>
        <v-flex xs12>

            <v-divider></v-divider>

        </v-flex>
    </v-layout>

</v-app>
</template>

<script src="./ram.js">
</script>
