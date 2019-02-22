<template>
    <div>
    <Navbar></Navbar>
        
        
        <div class="container">
            <router-view></router-view>
        </div><!-- container -->
    </div>
</template>

<script>
import Navbar from './views/layout/Navbar.vue';

export default{
    name: 'app',
    components: {
        Navbar
    }    
}
</script>

<style>
    
</style>