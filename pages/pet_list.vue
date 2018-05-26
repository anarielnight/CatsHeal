<template>
    <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
            <v-card>

                <v-list two-line>
                    <template v-for="(item, index) in items">

                        <v-divider v-if="item.divider" :inset="item.inset" :key="index"></v-divider>

                        <v-list-tile avatar v-else :key="item.title" :href="`/profile/${index}`">
                            <v-list-tile-avatar>
                                <img :src= "item.img" >
                            </v-list-tile-avatar>

                            <v-list-tile-content>
                                <v-list-tile-title v-html="item.name"></v-list-tile-title>
                                <v-list-tile-sub-title v-html="item.race"></v-list-tile-sub-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-divider v-if="index + 1 < items.length" :key="`divider-${index}`"></v-divider>
                    </template>
                </v-list>

                <v-btn
                    absolute
                    dark
                    small
                    fab
                    bottom
                    right
                    color="teal"
                >
                <v-icon>add</v-icon>
                </v-btn>
            </v-card>
        </v-flex>
    </v-layout>
</template>
<!--
  <ul>
    <li v-for="item in items" :key="item.name">
      {{item.name}}
    </li>
  </ul> -->


<script>
export default {
  components: {

  },

  computed: {

      items() {
        return this.$store.state.pets
      },
      index() {
      //  console.log(this.items.index);
        return index;
      }

  },

  methods: {
  }
}
</script>

<style>

</style>
