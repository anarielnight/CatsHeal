<template>
    <v-app>
        <v-content>
            <v-container grid-list-md>
                <v-layout row wrap>

                    <nuxt/>

                    <v-bottom-nav absolute :value="true" :active.sync="e1" color="transparent">
                        <v-btn flat color="teal" value="cats" href="/petlist">
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
    const pages = {
        'petlist': 'cats',
        'profile-id': 'cats',
        'index':'doses',
        'formula':'forms'
    }

    export default {
      data() {
        return {
          e1: pages[this.$route.name]
        }
      }
    }
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #98FF98;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
