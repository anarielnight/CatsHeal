<template>
    <div>
        <v-flex sm6>
            <v-avatar
                :size=128
                class="grey lighten-4"
            >
                <img :src="pet.img" alt="avatar">
            </v-avatar>
        </v-flex>

        <v-flex sm6>
            <v-btn @click="onClickSave" fab color="teal">
                <v-icon>save</v-icon>
            </v-btn>
            <v-btn @click="onClickCancel" fab color="teal">
                <v-icon>clear</v-icon>
            </v-btn>
        </v-flex>

        <v-form>
            <v-text-field
                name="name"
                label="Имя"
                id="name"
                v-model="name"
            ></v-text-field>
            <v-text-field
                name="age"
                label="Возраст"
                id="age"
                v-model="age"
            ></v-text-field>
            <v-text-field
                name="weight"
                label="Вес"
                id="weight"
                v-model="weight"
            ></v-text-field>
            <v-select
                :items="race"
                label="Раса"
                v-model="race"
            ></v-select>
        </v-form>
    </div>
</template>

<script>

    import {RACES} from '~/store/index';

    export default {
        props: {
            pet: {
                type: Object,
                required: true
            }
        },
        data() {
            const pet = this.pet;
            return {
                name: pet.name,
                age: pet.age,
                weight: pet.weight,
                race: Object.values(RACES)
            }
        },
        methods: {
            onClickSave() {
                this.$emit('save', {
                    name: this.name,
                    age: this.age,
                    weight: this.weight,
                    race: this.race
                });
            },
            onClickCancel() {
                this.$emit('cancel');
            }
        }
    }

</script>

<style>

</style>
