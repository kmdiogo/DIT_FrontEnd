<template>
    <div>
        <Header></Header>
        <transition name = "fade" mode = "out-in">
            <router-view/>
        </transition>
    </div>
</template>

<style lang="scss">
    @import 'assets/styles/main';

</style>

<script>
    import Header from "./components/Header";
    export default {
        components: {Header}
    }
</script>