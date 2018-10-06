<template>
  <div>
    <v-layout :style="[heroStyle, {backgroundImage: 'url(' + room.titleImage + ')'}]" column align-center v-scroll="onScroll">
      <v-flex xs12>
        <img src="/csrlogo1.svg" alt="Cambridge Serviced Rooms" class="mt-5 mb-5 hidden-sm-and-up" style="height:200px;"/>
        <img src="/csrlogo1.svg" alt="Cambridge Serviced Rooms" class="mt-5 mb-5 hidden-xs-only" style="height:400px;"/>
      </v-flex>
    </v-layout>
    <v-container fluid grey lighten-3>
      <v-layout row wrap align-center justify-center>
        <v-flex xs12 sm10 md8>
          <h1 class="page-header" :class="[$vuetify.breakpoint.xs ? 'display-3 thin' : 'display-4 mt-5']">{{ room.name }}</h1>
          <router-link class="room-title" :to="{ path: '/' + room.houseRoute + '#stunningRooms' }">
            <h4 class="display-1 page-header mt-2 mb-5">{{ room.houseName }}</h4>
          </router-link>
          <div class="mt-3">
            <h5 class="headline thin">{{room.description}}</h5>
            <h5 class="headline text-xs-right mt-4">From £{{room.cost}} per week</h5>
          </div>
          <div class="text-xs-center mt-5 mb-5">
            <v-chip v-for="(feature, index) in room.features" :key="index" class="camblue">
              {{feature}}
            </v-chip>
          </div>
        </v-flex>
        <v-flex xs12 sm10 md8 class="mb-5">
          <v-carousel class="prop-carousel" hide-delimiters :class="[$vuetify.breakpoint.xs ? 'carousel--small' : '']">
            <v-carousel-item v-for="(img,i) in room.images" v-bind:src="img" :key="i"></v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-fab-transition>
      <v-btn
        to="/contact"
        fixed
        bottom
        right
        round
        color="camblue"
        v-show="!hidden"
      >
        Contact Us
      </v-btn>
    </v-fab-transition>
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
      },
      offSetTop: 0,
      hidden: true
    }
  },
  name: 'room',
  props: ['room'],
  methods: {
    onScroll (e) {
      this.offSetTop = window.pageYOffset || document.documentElement.scrollTop
      if (this.offSetTop > 200) {
        this.hidden = false
      } else {
        this.hidden = true
      }
    }
  }
}
</script>

<style>
  .carousel {
    max-width: 900px;
  }
  .carousel--small {
    height: 300px;
  }
  .room-title {
    text-decoration: none;
  }
  .room-title h4 {
    padding-left: 5px;
  }
</style>