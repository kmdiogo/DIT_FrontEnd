<template>
    <div style = "text-align: center; font-family: 'Fondamento', cursive;">
        <br>
        <h1 class = "tit">Please enter a Username and Password:</h1>
        <br>
        USERNAME: <b-input v-model="form.username" class = "nob"></b-input>
        <br>
        PASSWORD: <b-input v-model="form.password" class = "nob"></b-input>
        <br>
        EMAIL: <b-input v-model="form.email" class = "nob"></b-input>
        <br>
        FIRST NAME: <b-input v-model="form.first_name" class = "nob"></b-input>
        <br>
        LAST NAME: <b-input v-model="form.last_name" class = "nob"></b-input>
        <br>
        DM: <b-checkbox v-model ="form.is_dm" class = "nob"></b-checkbox>
        <br>
        Session ID <b-input type = "number" v-model="form.dm_session_id" class = "nob"></b-input>
        <br>
        <b-button @click="submitForm" class="signUpButton" id="signUpPC">Sign up as player character</b-button>
        <b-button @click="submitForm" class="signUpButton" id="signUpDM">Sign up as dungeon master</b-button>
        <br>
    <router-view></router-view>

    </div>

</template>

<script>
    import axios from 'axios';
    export default {
        name: "SignUp",
        data(){
            return{
                form:{
                    username:'',
                    password:'',
                    email:'',
                    first_name:'',
                    last_name:'',
                    is_dm: false,
                    dm_session_id: ''
                }
            }
        },
        methods: {
            submitForm() {
                axios.post('http://localhost:8000/register', this.form).then(response=>{
                    console.log(response);
                });
            }
        }
    }
</script>

<style scoped>

</style>