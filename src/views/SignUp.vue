<template>
    <div style = "text-align: center; font-family: 'Fondamento', cursive;">
        <br>
        <h1 class = "tit">Please enter a Username and Password:</h1>
        <br>
        USERNAME: <b-input v-model="form.username" class = "nob"></b-input>
        <br>
        PASSWORD: <b-input v-model="form.password" class = "nob"></b-input>
        <br>
        <b-button @click="submitForm" style="padding: 10px 25px;">Submit</b-button>
        <br>


    </div>

</template>

<script>
    export default {
        name: "SignUp",
        data(){
            return{
                form:{
                    username:'',
                    password:''

                }
            }
        }
    }
</script>

<style scoped>

</style>