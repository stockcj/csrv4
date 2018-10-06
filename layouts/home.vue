<template>
  <v-app light>
    <v-navigation-drawer app right fixed temporary dark v-model="drawer" class="camblue">
      <v-toolbar flat class="camblue">
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Menu
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-divider></v-divider>

      <v-list>
        <v-list-tile class="nav-tile"
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          >
            <v-list-tile-action>
              <v-icon v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title style="font-size: 20px;" v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

      </v-list>
    </v-navigation-drawer>
    <v-toolbar app color="camblue" :class="[toolbar ? 'toolbar--home' : 'hidden']" fixed>
      <img src="/csrlogo_black.svg" alt="Cambridge Serviced Rooms" style="height:48px;"/>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-menu bottom offset-y>
          <v-btn flat slot="activator">Properties</v-btn>
          <v-list>
            <v-list-tile router :to="'/coronation-street'">
              <v-list-tile-title>Coronation Street</v-list-tile-title>
            </v-list-tile>
            <v-list-tile router :to="'/fair-street'">
              <v-list-tile-title>Fair Street</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-btn flat to="/reviews">Reviews</v-btn>
        <v-btn flat to="/contact">Contact Us</v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <v-parallax src="/backs.jpg" alt="cambridge-backs" style="height: auto;">
        <v-layout column align-center justify-center="">
          <v-flex xs12>
            <img src="/csrlogo1.svg" alt="Cambridge Serviced Rooms" class="mt-5 mb-5 hidden-sm-and-up" style="height:200px;"/>
            <img src="/csrlogo1.svg" alt="Cambridge Serviced Rooms" class="mt-5 mb-5 hidden-xs-only" style="height:400px;"/>
          </v-flex>
          <v-flex class="mb-5">
            <v-menu bottom offset-y>
              <v-btn :small="$vuetify.breakpoint.xs" :large="$vuetify.breakpoint.smAndUp" dark outline slot="activator">Properties</v-btn>
              <v-list>
                <v-list-tile router :to="'/coronation-street'">
                  <v-list-tile-title>Coronation Street</v-list-tile-title>
                </v-list-tile>
                <v-list-tile router :to="'/fair-street'">
                  <v-list-tile-title>Fair Street</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
            <v-btn :small="$vuetify.breakpoint.xs" :large="$vuetify.breakpoint.smAndUp" dark outline to="/reviews">Reviews</v-btn>
            <v-btn :small="$vuetify.breakpoint.xs" :large="$vuetify.breakpoint.smAndUp" dark outline to="/contact">Contact Us</v-btn>
          </v-flex>
        </v-layout>
    </v-parallax>
    <v-content class="home" style="background-color: #eee;">
      <nuxt />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
  import Footer from '~/components/Footer.vue'
  export default {
    data () {
      return {
        drawer: null,
        toolbar: false,
        title: 'Cambridge Serviced Rooms',
        items: [
          { to: '/', title: 'Home', icon: 'home' },
          { to: '/coronation-street', title: 'Coronation Street', icon: 'hotel' },
          { to: '/fair-street', title: 'Fair Street', icon: 'hotel' },
          { to: '/reviews', title: 'Reviews', icon: 'format_quote' },
          { to: '/contact', title: 'Contact Us', icon: 'email' }
        ]
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
    },
    components: {
      Footer
    }
  }
</script>

<style>
  .home {
    padding-top: 0px !important;
  }
  .nav-tile {
    height: 65px;
  }
</style>