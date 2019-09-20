<template>
<v-app
    v-if="login"
    id="inspire">
    <v-navigation-drawer
        app
        v-model="drawer"
        clipped
        fixed
        :mini-variant.sync="mini"
        mini>

        <v-toolbar
            flat
            class="transparent">
            <v-list class="pa-0">
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <img src="https://randomuser.me/api/portraits/men/85.jpg">
                    </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>Jhosef Cáceres</v-list-tile-title>
                        </v-list-tile-content>

                        <v-list-tile-action>
                            <v-btn
                                icon
                                @click.stop="mini = !mini">
                                <v-icon>chevron_left</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                </v-list-tile>
            </v-list>

        </v-toolbar>
        <v-list
            class="pt-0"
            dense>
            <v-divider></v-divider>

            <v-list-tile @click="clckHome">
                <v-list-tile-action>
                    <v-icon medium>home</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>Principal</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile @click="clckCpu">
                <v-list-tile-action>
                    <v-icon medium>memory</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>% Cpu</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile @click="clckRam">
                <v-list-tile-action>
                    <v-icon medium>storage</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>% Ram</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

        </v-list>
    </v-navigation-drawer>
    <v-toolbar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        color="blue darken-3"
        dark
        app
        fixed>
        <v-toolbar-title
            style="width: 300px"
            class="ml-0 pl-3">
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <span class="hidden-sm-and-down"><v-icon medium>memory</v-icon>Task Manager</span>
        </v-toolbar-title>
        <!-- <v-text-field
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="search"
            label="Buscar"
            class="hidden-sm-and-down"></v-text-field> -->
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>apps</v-icon>
        </v-btn>
        <v-btn
            @click="salir"
            icon>
            <v-icon>cancel</v-icon>
        </v-btn>
        <v-btn
            icon
            large>
            <v-avatar
                size="32px"
                tile>
                <img
            src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
            alt="Vuetify"
          >
        </v-avatar>
        </v-btn>
    </v-toolbar>
    <v-content>
        <br>
        <div v-if="pagina==1">
            <cuerpo />
        </div>
        <div v-else-if="pagina==2">
            <ram />
        </div>
        <div v-else>
            <home />
        </div>
    </v-content>
    <v-footer class="pa-3 justify-center">
        <div>&copy; Seminario1 Primer Semestre {{ new Date().getFullYear() }} <strong>Jhosef Cáceres - 201513595</strong></div>
    </v-footer>
</v-app>

<v-app
    v-else
    id="inspire2">
    <v-content>
        <v-container
            fluid
            fill-height>
            <v-layout
                align-center
                justify-center>
                <v-flex
                    xs12
                    sm8
                    md4>
                    <v-card class="elevation-12">
                        <v-toolbar
                            dark
                            color="primary">
                            <v-toolbar-title>Login Task Manager</v-toolbar-title>
                            <v-spacer></v-spacer>
                        </v-toolbar>
                        <v-card-text>
                            <v-form>
                                <v-text-field
                                    autofocus
                                    prepend-icon="person"
                                    name="login"
                                    label="Login"
                                    v-model="itLogin.usuario"
                                    type="text"></v-text-field>
                                <v-text-field
                                    id="password"
                                    prepend-icon="lock"
                                    name="password"
                                    label="Password"
                                    v-model="itLogin.password"
                                    type="password"></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                @click="clckLogin"
                                color="primary">Login</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</v-app>
</template>

<script>
import cuerpo from './cpu/cpu.vue'
import ram from './ram/ram.vue'
import home from './home/home.vue'
export default {
    components: {
        cuerpo,
        ram,
        home
    },
    data: () => ({
        itLogin: {
            usuario: "",
            password: ""
        },
        drawer2: null,
        drawer: true,
        items: [{
                title: 'Inicio',
                icon: 'dashboard'
            },
            {
                title: 'Acerca de',
                icon: 'question_answer'
            }
        ],
        mini: true,
        right: null,

        pagina: 1,
        login: false
    }),
    created() {
        this.pagina = 0;
    },
    methods: {

        clckHome() {
            this.pagina = 0;
        },
        clckCpu() {
            this.pagina = 1;
        },
        clckRam() {
            this.pagina = 2;
        },

        clckLogin() {
            console.log(this.itLogin);
            if ((this.itLogin.usuario == this.itLogin.password) && (this.itLogin.usuario == "admin")) {

                this.login = true;
            } else {
                console.log("no logueado");
                this.login = false;
            }

        },
        salir() {
            this.login = false;
            this.itLogin = {
                usuario: "",
                password: ""
            };
        }
    },
    props: {
        source: String
    }
}
</script>

<style>
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
}
</style>
