<template>
<div>
    <!-- Image and text -->
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <img class="logo" src="../assets/logo-dummis.jpg" alt="">
            <span class="navbar-brand mr-auto nombreLogo"> MicroFrontend </span>

            <div class="">
                <ul class="nav pull-right navbar-collapse collapse dual-collapse profileDiv">
                    <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hola,{{this.userInfo.username}} <b class="caret"></b></a>
                        <ul class="dropdown-menu dropdown-menu-right alinearDropDown">
                            <div class="profile">
                                <div class="image">
                                    <div class="circle-1"></div>
                                    <div class="circle-2"></div>
                                    <img src="../assets/avatar.png" width="70" npm run height="70" title="">
                                </div>

                                <div class="name">{{this.userInfo.nombre}}</div>
                                <div class="job">{{this.userInfo.mail}}</div>

                                <div class="actions">
                                    <button class="btn"><i class="fa fa-cog" aria-hidden="true"></i> Editar Perfil</button>
                                    <button class="btn"><i class="fa fa-envelope" aria-hidden="true"></i> Contact Support</button>

                                </div>
                                <li class="divider"></li>
                                <li @click="logout()"><a class="dropdown-item cerrarSesion"><i class="fa fa-sign-out" aria-hidden="true"></i> Cerrar Sesión</a></li>
                            </div>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</div>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            ged: this.customProps.globalEventDistributor,
            constants: this.customProps.constants,
            userInfo: null,
        }
    },
    props: ['customProps'],
    created() {
        const authStore = this.ged.stores.find(x => x.name === this.constants.STORE_AUTH);
        console.log(authStore);
        console.log(authStore.getState());
        this.userInfo = authStore.getState().user;
    },
    methods: {
        logout() {
            this.ged.dispatch({
                type: this.constants.LOGOUT
            });
            delete localStorage['user'];
            this.navigateTo('/login');
        },
        navigateTo(url) {
            window.history.replaceState(null, null, url);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

  
<style lang="scss">
@import "NavBar.scss";
</style>
