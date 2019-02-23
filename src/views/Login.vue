<template>
    <div>
        Username <b-input v-model="form.username"></b-input>
        Password <b-input v-model="form.password"></b-input>
        <b-button @click="submitForm">Submit</b-button>
    </div>
</template>

<script>
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
                alert("User submitted form");
            }
        }
    }
</script>

<style scoped>

</style>