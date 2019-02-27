<template>
    <div style = "text-align: center; font-family: 'Fondamento', cursive;">
        <br>
        Character Name: <b-input v-model="form.character_name" class = "nob"></b-input>
        <br>
        Character Health: <b-input v-model="form.character_health" class = "nob"></b-input>
        <br>
        Character Level: <b-input v-model="form.character_level" class = "nob"></b-input>
        <br>
        Character Armor Class: <b-input v-model="form.character_armor_class" class = "nob"></b-input>
        <br>
        Character : <b-input v-model="form.character_initiative" class = "nob"></b-input>
        <br>
        Character Health: <b-input v-model="form.character_health" class = "nob"></b-input>
        <br>
        Character Health: <b-input v-model="form.character_health" class = "nob"></b-input>
        <br>
        <b-button @click="submitForm" id="signUpDM">Submit</b-button>
        <br>
        <br>
        <b-button to = "/signup" id="signUpPC">Log in</b-button>

    </div>
</template>

<script>
    import axios from 'axios';
    import {getAuthorizationToken} from '@/API';
    export default {
        name: "Login",
        data() {
            return {
                form: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            submitForm() {
                getAuthorizationToken(this.form).then(response=>{
                    console.log(response);
                });
            }
        }
    }
</script>

<style scoped>

</style>