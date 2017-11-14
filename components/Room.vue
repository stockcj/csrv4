<template>
  <div>
    <v-layout :style="[heroStyle, {backgroundImage: 'url(' + room.titleImage + ')'}]" column align-center>
      <v-flex xs12>
        <img src="/csrlogo1.svg" alt="Cambridge Serviced Rooms" class="mt-5 mb-5 hidden-sm-and-up" style="height:200px;"/>
        <img src="/csrlogo1.svg" alt="Cambridge Serviced Rooms" class="mt-5 mb-5 hidden-xs-only" style="height:400px;"/>
      </v-flex>
    </v-layout>
    <v-container fluid grid-list-xl class="camblue">
      <v-layout column class="mt-3">
        <v-flex xs12 lg6 offset-lg3>
          <h1 class="display-4 page-header white--text text-xs-center">{{ room.name }}</h1>
          <h4 class="display-1 page-header white--text text-xs-center">{{ room.houseName }}</h4>
          <div class="pa-3 mt-3 white--text text-xs-center">
            <h5 class="headline thin">{{room.description}}</h5>
            <h5 class="headline mt-4">From £{{room.cost}} per week</h5>
          </div>
          <div class="mt-2 text-xs-center">
            <v-chip v-for="(feature, index) in room.features" :key="index" outline class="white white--text">
              {{feature}}
            </v-chip>
          </div>
        </v-flex>
        <v-flex xs12 lg6 offset-lg3 class="mt-3">
          <v-carousel hide-controls :class="[$vuetify.breakpoint.xs ? 'carousel--small' : '']">
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
    height: 250px;
  }
</style>