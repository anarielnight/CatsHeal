<template>
    <v-layout row wrap>
        <v-flex sm12>
           <v-avatar
             :size=128
             class="grey lighten-4"
           >
             <img src="~/assets/Bella.jpg" alt="avatar">
           </v-avatar>
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

import * as calc from '~/pages/formula';
//import * as pet from '~/pages/profile';


//const calc_function = calc.default.methods.calculate;
//const weight = pet.default.data().items[3].value;
//const age = pet.default.data().items[1].value;
//console.log(age);

export default {

  components: {
  },
  data() {
    return {
      color: "success",
      e1: 'doses',
      items: [
        {
          prop: 'Корм',
          value: 45 //calc.default.methods.calculate(weight, age)
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style>

</style>
