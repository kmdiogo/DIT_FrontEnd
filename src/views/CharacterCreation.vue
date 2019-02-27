<template>
    <div>
        <br>
        <b-row>
            <b-col md="6">
                Character Name:<b-input v-model="form.character_name" class = "nob"></b-input>
                <br>
                Class:<b-input v-model="form.class" class = "nob"></b-input>
                <br>
                Race:<b-input v-model="form.race" class = "nob"></b-input>
                <br>
                Height:<b-input v-model="form.height" class = "nob"></b-input>
                <br>
                Weight:<b-input v-model="form.weight" class = "nob"></b-input>
                <br>
                Age:<b-input v-model="form.age" class = "nob"></b-input>
                <br>
                Max Health:<b-input v-model="form.character_max_health" class = "nob"></b-input>
                <br>
                Level:<b-input v-model="form.character_level" class = "nob"></b-input>
                <br>


            </b-col>

            <b-col md="6">
                Armor Class:<b-input v-model="form.character_armor_class" class = "nob"></b-input>
                <br>
                Alignment:<b-input v-model="form.alignment" class = "nob"></b-input>
                <br>
                Speed:<b-input v-model="form.speed" class = "nob"></b-input>
                <br>
                Strength:<b-input v-model="form.strength" class = "nob"></b-input>
                <br>
                Dexterity:<b-input v-model="form.dexterity" class = "nob"></b-input>
                <br>
                Constitution:<b-input v-model="form.constitution" class = "nob"></b-input>
                <br>
                Intelligence:<b-input v-model="form.intelligence" class = "nob"></b-input>
                <br>
                Wisdom:<b-input v-model="form.wisdom" class = "nob"></b-input>
                <br>

            </b-col>
        </b-row>
        Charisma:<b-input v-model="form.charisma" class = "nob"></b-input>
        <br>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "CharacterCreation",
        data() {
            return {
                form: {
                    character_name: '',
                    class:'',
                    race:'',
                    character_max_health: '',
                    character_level: '',
                    character_armor_class: '',
                    alignment:'',
                    speed:'',
                    strength:'',
                    dexterity:'',
                    constitution:'',
                    intelligence:'',
                    wisdom:'',
                    charisma:'',
                    height:'',
                    age:'',
                    weight:'',
                }
            }
        }
    }
</script>

<style scoped>

</style>