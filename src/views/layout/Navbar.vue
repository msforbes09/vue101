<template>
    <nav class="navbar is-fixed-top is-light" id="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
            </a>

            <a role="button" class="navbar-burger burger" :class="{ 'is-active': active }" @click="toggleMe" aria-label="menu" aria-expanded="false" data-target="navbarContent">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a><!-- burger -->
        </div><!-- navbar-brand -->

        <div id="navbarContent" class="navbar-menu" :class="{ 'is-active': active }">
            <div class="navbar-end">
                <router-link class="navbar-item is-active" to="/" exact>Home</router-link>

                <router-link class="navbar-item" to="/basic">Basic</router-link>
            </div><!-- navbar-start -->
        </div><!-- navbar-menu -->
    </nav><!-- navbar -->
</template>

<script>
export default {
    name: 'Navbar',

    data(){
        return {
            active: false,
        }
    },

    methods: {
        toggleMe() {
            this.active = ! this.active
        }
    }
}
    
</script>

<style>
    
</style>