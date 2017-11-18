<template>
  <div>
    <v-layout :style="[heroStyle, {backgroundImage: 'url(' + room.titleImage + ')'}]" column align-center>
      <v-flex xs12>
        <img src="/csrlogo1.svg" alt="Cambridge Serviced Rooms" class="mt-5 mb-5 hidden-sm-and-up" style="height:200px;"/>
        <img src="/csrlogo1.svg" alt="Cambridge Serviced Rooms" class="mt-5 mb-5 hidden-xs-only" style="height:400px;"/>
      </v-flex>
    </v-layout>
    <v-container fluid grey lighten-3>
      <v-layout row wrap>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2>
          <h1 class="display-4 page-header mt-5">{{ room.name }}</h1>
          <h4 class="display-1 page-header mt-2 mb-5">{{ room.houseName }}</h4>
          <div class="mt-3">
            <h5 class="headline thin">{{room.description}}</h5>
            <h5 class="headline text-xs-right mt-2">From £{{room.cost}} per week</h5>
          </div>
          <div class="text-xs-center mt-5 mb-5">
            <v-chip v-for="(feature, index) in room.features" :key="index" class="camblue">
              {{feature}}
            </v-chip>
          </div>
        </v-flex>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2 class="mb-5">
          <v-carousel hide-delimiters :class="[$vuetify.breakpoint.xs ? 'carousel--small' : '']">
            <v-carousel-item v-for="(img,i) in room.images" v-bind:src="img" :key="i"></v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      heroStyle: {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: 'auto',
        width: 'auto',
        maxWidth: '100%'
      }
    }
  },
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
    height: 300px;
  }
</style>