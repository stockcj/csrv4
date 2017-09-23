<template>
  <v-app light>
    <v-toolbar :class="[toolbar ? 'toolbar--home' : 'hidden']" fixed>
      <img src="/csrlogo1_icon.svg" alt="Cambridge Serviced Rooms" style="height:48px;"/>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat to="/reviews">Reviews</v-btn>
        <v-btn flat to="/contact">Contact Us</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-parallax src="/backs.jpg" style="height: auto;">
        <v-layout column align-center>
          <v-flex xs12>
            <img src="/csrlogo1.svg" alt="Cambridge Serviced Rooms" class="mt-5 mb-5 hidden-sm-and-up" />
            <img src="/csrlogo1.svg" alt="Cambridge Serviced Rooms" class="mt-5 mb-5 hidden-xs-only" style="height:400px;"/>
          </v-flex>
        </v-layout>
    </v-parallax>
    <main class="home camblue">
      <nuxt />
    </main>
    <v-footer class="grey darken-3">
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        toolbar: false,
        title: 'Cambridge Serviced Rooms'
      }
    },
    mounted () {
      window.addEventListener('scroll', this.onScroll, { passive: true })
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.onScroll, { passive: true })
    },
    methods: {
      onScroll () {
        this.toolbar = window.scrollY > 400
      }
    }
  }
</script>

<style>
  .home {
    padding-top: 0px !important;
  }
  .title-border {
    height: 10px;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    background-color:#476B78;
  }
</style>