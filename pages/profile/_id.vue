<template>

   <v-layout row wrap>

      <v-flex sm6>
         <v-avatar
           :size=128
           class="grey lighten-4"
         >
           <img :src="pet.img" alt="avatar">
         </v-avatar>
      </v-flex>

      <v-flex sm6>
         <v-btn @click="onClick" :color="color"> {{this.name}} </v-btn>
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

</template>

<script>

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
    console.log('Id', this.$store.state.pets[this.$route.params.id] );
    const pet = this.$store.state.pets[this.$route.params.id]; //Объект всей хуйни
    const items = Object.keys(pet).map(key => {
      return {prop: fields[key], value: pet[key]}; //Формируем массив объектов формата [{prop: '', value: ''}]
    });

    return {
      color: "success",
      name: "Редактировать",
      e1: 'cats',
      pet,
      items: items.filter(item => item.prop)
    }
  },
  methods: {
    onClick() {
      if (this.color === "success") {
        this.color = "error",
        this.name = "Сохранить"
      } else {
        this.color = "success",
        this.name = "Редактировать"
      }
      this.showLogo = !this.showLogo;
    }
  }
}
export default pets;

//console.log(pets.data, '123');
</script>

<style>

</style>
