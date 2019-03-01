<template>
    <div style = "text-align: center; font-family: 'Fondamento', cursive;">
        <b-button to="/">Back to login</b-button>
        <br />
        <h1 class = "tit">Please enter the following information:</h1>
        <hr />
        <b-form>
            <b-form-group label="USERNAME:">
                <b-input v-model="form.username" class = "nob"></b-input>
            </b-form-group>

            <b-form-group label="PASSWORD">
                <b-input v-model="form.password" class = "nob" type="password"></b-input>
            </b-form-group>

            <b-form-group label="EMAIL">
                <b-input v-model="form.email" class = "nob" type="email"></b-input>
            </b-form-group>

            <b-form-group label="FIRST NAME:">
                <b-input v-model="form.first_name" class = "nob"></b-input>
            </b-form-group>

            <b-form-group label="LAST NAME:">
                <b-input v-model="form.last_name" class = "nob"></b-input>
            </b-form-group>

            <b-form-group label="Are you a Dungeon Master?:">
                <b-checkbox v-model ="form.is_dm" class = "nob"></b-checkbox>
            </b-form-group>

            <b-form-group label="SESSION ID">
                <b-input type = "number" v-model="form.dm_session_id" class = "nob"></b-input>
            </b-form-group>
        </b-form>
        <br>
        <b-button @click="submitForm" class="signUpButton" id="signUpDM">Sign up</b-button>
        <!--<b-button @click="submitForm" class="signUpButton" id="signUpDM">Sign up as dungeon master</b-button>-->
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