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
         <v-btn @click="onClick" color="success">Редактировать</v-btn>
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
      <v-btn @click="onClick" color="error">Отменить</v-btn>
    </v-flex>

    <v-form>
      <v-text-field
          name="name"
          label="Имя"
          id="name"
          :value="pet.name"
      ></v-text-field>
      <v-text-field
          name="age"
          label="Возраст"
          id="age"
          :value="pet.age"
      ></v-text-field>
      <v-text-field
          name="weight"
          label="Вес"
          id="weight"
          :value="pet.weight"
      ></v-text-field>
      <v-select
          :items="race"
          label="Раса"
          :value="pet.race"
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

  data() {

    const pet = this.$store.state.pets[this.$route.params.id]; //Объект всей хуйни
    const items = Object.keys(pet).map(key => {
      return {prop: fields[key], value: pet[key]}; //Формируем массив объектов формата [{prop: '', value: ''}]
    });

    return {
      e1: 'cats',
      pet,
      race: Object.values(RACES),
      editMode: true,
      items: items.filter(item => item.prop)
    }
  },
  methods: {
    onClick() {
        this.editMode = !this.editMode;
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
