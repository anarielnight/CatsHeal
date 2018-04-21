<template>

<v-app>
   <v-content>
       <v-container grid-list-md>
           <v-layout row wrap>
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

              <v-bottom-nav absolute :value="true" :active.sync="e1" color="transparent">
                  <v-btn flat color="teal" value="cats" href="/profile">
                      <span>Котики</span>
                      <v-icon>pets</v-icon>
                  </v-btn>
                  <v-btn flat color="teal" value="doses" href="/">
                      <span>Дозировки</span>
                      <v-icon>healing</v-icon>
                  </v-btn>
                  <v-btn flat color="teal" value="forms" href="/formula">
                      <span>Препараты</span>
                      <v-icon>event_note</v-icon>
                  </v-btn>
              </v-bottom-nav>

           </v-layout>
      </v-container>

   </v-content>
 </v-app>
</template>

<script>

import items from '~/pages/index';

 const calc = {
  components: {
  },
  data() {
    return {
        e1: 'forms',
        items: [
          {
            prop: 'Котята 2 кг',
            value: '35'
          },
          {
            prop: 'Котята 3 кг',
            value: "50"
          },
          {
            prop: 'Котята 4 кг',
            value: '70'
          },
          {
            prop: 'Котята 5 кг',
            value: 85
          }
        ],
    }
  },
  methods: {
    calculate(weight, age) {
      console.log('age ', parseFloat(age));
      if (parseFloat(age) <= 1) {
          if (weight <= 2) {
              return 35;
          } else if (weight <= 3) {
              return 50;
          } else if (weight <= 4) {
              return 70;
          }
          return 85;
      }
      if (weight <= 3) {
          return 25;
      } else if (weight <= 4) {
          return 40;
      } else if (weight <= 5) {
          return 55;
      }
      return weight * 12;
    }
  }
};

export default calc;
</script>

<style>

</style>
