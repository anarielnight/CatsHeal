<template>

    <v-layout row wrap v-if="!editMode">
         <v-flex sm6>
            <v-avatar
               :size=128
               class="grey lighten-4"
            >
                <img :src="pet.img" alt="avatar">
            </v-avatar>
        </v-flex>

        <v-flex sm6>
            <v-btn @click="onClick" fab color="teal">
                <v-icon>create</v-icon>
            </v-btn>
            <v-btn @click="onClick" fab color="teal">
                <v-icon>clear</v-icon>
            </v-btn>
        </v-flex>

        <v-flex sm12>
            <v-data-table
                :items="items"
                hide-actions
                hide-headers
                class="elevation-1"
            >
                <template slot="items" slot-scope="props">
                   <td class="text-xs-right">{{ props.item.prop }}</td>
                   <td class="text-xs-right">{{ props.item.value }}</td>
                </template>
            </v-data-table>
        </v-flex>
    </v-layout>

    <v-layout row wrap v-else>
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
            <v-btn @click="onClick" fab color="teal">
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
    </v-layout>

</template>

<script>

import {RACES} from '~/store/index';

const fields = {
    name: 'Имя',
    age: 'Возраст',
    weight: 'Вес',
    race: 'Раса'
}

let pets = {
    components: {
    },
    computed: {
        pet() {
            return this.$store.state.pets[this.petId]
        },
        items() {
            return Object.keys(this.pet).map(key => {
                return {prop: fields[key], value: this.pet[key]}; //Формируем массив объектов формата [{prop: '', value: ''}]
            }).filter(item => item.prop);
        }
    },
    data() {
        const petId = this.$route.params.id;
        const pet = this.$store.state.pets[petId];

        return {
            e1: 'cats',
            name: pet.name,
            age: pet.age,
            weight: pet.weight,
            petId,
            race: Object.values(RACES),
            editMode: true,
        }
    },
    methods: {
        onClick() {
            this.editMode = !this.editMode;
        },
        onClickSave() {
            console.log(this.name);
            this.editMode = !this.editMode;
            this.$store.dispatch('updatePet', {
                id: this.petId,
                name: this.name,
                age: this.age,
                weight: this.weight,
                race: this.race
            });
            console.log(this.pet);
        }
    },
    mounted() {
        localStorage.setItem('myCat', 'Tom');
        console.log(window.localStorage);
    }
}
export default pets;

//console.log(pets.data, '123');
</script>

<style>

</style>
