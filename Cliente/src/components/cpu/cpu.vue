<template>
<v-app>
    <v-layout
        row
        wrap>

        <!-- {{statusProgress}}
        <v-btn
            @click="clckAceptar()"
            color="success">Aceptar</v-btn> -->

        <v-flex
            xs12
            >
            <v-card-text>

                <v-card height="200">

                    <div class="text-xs-center"><span class=" headline">Uso del cpu %</span></div>

                    <div class="text-xs-center">
                        <v-progress-circular
                            :rotate="100"
                            :size="100"
                            :width="15"
                            :value="value"
                            color="primary">
                            {{ Math.round(value) }}%
                        </v-progress-circular>
                    </div>
                </v-card>

            </v-card-text>
        </v-flex>

        <v-flex xs12>
            <v-card-title primary-title>

                <v-flex xs12>
                    <v-card>

                        <GChart
                            type="LineChart"
                            :data="chartData"
                            :options="chartOptions" />

                    </v-card>
                </v-flex>
            </v-card-title>
        </v-flex>

    </v-layout>

</v-app>
</template>

<script src="./cpu.js">
</script>
