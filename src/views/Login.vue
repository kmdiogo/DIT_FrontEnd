<template>
    <div>
        <b-form style="width: 20rem">
            <b-form-group label="Username:">
                <b-input></b-input>
            </b-form-group>
            <b-form-group label="Password:">
                <b-input type="password"></b-input>
            </b-form-group>
        </b-form>
        <b-button @click="submitForm" id="signUpDM">Submit</b-button>
        <br>
        <br>
        <p>Don't have an account?</p>
        <b-button to = "/signup" id="signUpPC">Sign Up</b-button>

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