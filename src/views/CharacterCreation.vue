<template>
    <div>
        <br>
        <b-form>
            <b-row>
                <b-col md="6">
                    <b-form-group label="Character Name:">
                        <b-input v-model="form.character_name"></b-input>
                    </b-form-group>

                    <b-form-group label="Class:">
                        <b-input v-model="form.class"></b-input>
                    </b-form-group>

                    <b-form-group label="Race:">
                        <b-input v-model="form.race"></b-input>
                    </b-form-group>

                    <b-form-group label="Height:">
                        <b-input v-model="form.height"></b-input>
                    </b-form-group>

                    <b-form-group label="Weight:">
                        <b-input v-model="form.weight"></b-input>
                    </b-form-group>

                    <b-form-group label="Age:">
                        <b-input v-model="form.age" type="number"></b-input>
                    </b-form-group>

                    <b-form-group label="Max Health:">
                        <b-input v-model="form.character_max_health" type="number"></b-input>
                    </b-form-group>

                    <b-form-group label="Level:">
                        <b-input v-model="form.character_level" type="number"></b-input>
                    </b-form-group>

                </b-col>

                <b-col md="6">
                    <b-form-group label="Armor Class:">
                        <b-input v-model="form.character_armor_class" type="number"></b-input>
                    </b-form-group>

                    <b-form-group label="Alignment:">
                        <b-input v-model="form.alignment"></b-input>
                    </b-form-group>

                    <b-form-group label="Speed:">
                        <b-input v-model="form.speed" type="number"></b-input>
                    </b-form-group>

                    <b-form-group label="Strength:">
                        <b-input v-model="form.strength" type="number"></b-input>
                    </b-form-group>

                    <b-form-group label="Dexterity:">
                        <b-input v-model="form.dexterity" type="number"></b-input>
                    </b-form-group>

                    <b-form-group label="Constitution:">
                        <b-input v-model="form.constitution" type="number"></b-input>
                    </b-form-group>

                    <b-form-group label="Intelligence:">
                        <b-input v-model="form.intelligence" type="number"></b-input>
                    </b-form-group>

                    <b-form-group label="Wisdom:">
                        <b-input v-model="form.wisdom" type="number"></b-input>
                    </b-form-group>

                </b-col>
            </b-row>

            <b-form-group label="Charisma">
                <div class="d-flex align-items-center justify-content-center">
                    <b-input v-model="form.charisma" type="number" class="w-50 align-items-center"></b-input>
                </div>
            </b-form-group>
        </b-form>

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