<template>
    <div>
        <Header></Header>
        <transition name = "fade" mode = "out-in">
            <router-view class="wrapper d-flex flex-column align-items-center p-2"/>
        </transition>
    </div>
</template>

<script>
    import Header from "./components/Header";
    export default {
        components: {Header}
    }
</script>

<style lang="scss">
    @import 'assets/styles/main';
    .wrapper {
        font-family: 'Fondamento', cursive;
        text-align: center;
    }
</style>