<template>

   <v-layout row wrap>

      <v-flex sm6>
         <v-avatar
           :size=128
           class="grey lighten-4"
         >
           <img src="~/assets/Sami.jpg" alt="avatar">
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

let pets = {
  components: {
  },
  data() {
    return {
      color: "success",
      name: "Редактировать",
      e1: 'cats',
      items: [
        {
          prop: 'Имя',
          value: 'Белла'
        },
        {
          prop: 'Возраст',
          value: 9/12
        },
        {
          prop: 'Раса',
          value: 'Каджит'
        },
        {
          prop: 'Вес',
          value: 2.5
        }
      ]
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
