<template>
  <v-layout>
    <v-flex xs12>
      <h4 class="page-header white--text text-xs-center mt-5">{{ room.houseName }}</h4>
      <h1 class="page-header white--text text-xs-center">{{ room.name }}</h1>
      <v-container grid-list-xl class="mt-5">
        <v-layout row wrap>
          <v-flex xs12 lg6>
            <v-carousel hide-controls :class="[$vuetify.breakpoint.xs ? 'carousel--small' : '']">
              <v-carousel-item v-for="(img,i) in room.images" v-bind:src="img" :key="i"></v-carousel-item>
            </v-carousel>
          </v-flex>
          <v-flex xs12 lg6>
            <v-card>
              <v-card-text>
                <div class="pa-3">
                  <p class="headline">{{room.description}}</p>
                  <p class="title mt-5">From £{{room.cost}} per week</p>
                </div>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'room',
  computed: {
    room () {
      return this.$store.getters.getRoom(this.$route.params.id)
    }
  }
}
</script>

<style>
  .carousel--small {
    height: 250px;
  }
</style>