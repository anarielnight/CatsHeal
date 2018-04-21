<template>

<v-app>
   <v-content>
       <v-container grid-list-md>
           <v-layout row wrap>
              <v-flex sm6>
                 <v-avatar
                   :size=128
                   class="grey lighten-4"
                 >
                   <img src="~/assets/Bella.jpg" alt="avatar">
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

import Logo from '~/components/AppLogo';

export default {
  components: {
    Logo
  },
  data() {
    return {
      color: "success",
      name: "Редактировать",
      showLogo: true,
      items: [
        {
          prop: 'Имя',
          value: 'Белла'
        },
        {
          prop: 'Возраст',
          value: '9 мес'
        },
        {
          prop: 'Раса',
          value: 'Каджит'
        },
        {
          prop: 'Вес',
          value: 2.5
        }
      ],
        e1: 'recent'
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
</script>

<style>

</style>
