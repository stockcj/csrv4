<template>
  <v-app light>
    <v-navigation-drawer
      right
      temporary
      v-model="drawer"
      enable-resize-watcher
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          >
            <v-list-tile-action>
              <v-icon v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar :class="[toolbar ? 'toolbar--home' : 'hidden']" fixed>
      <img src="/csrlogo1_icon.svg" alt="Cambridge Serviced Rooms" style="height:48px;"/>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-menu open-on-hover bottom offset-y>
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
      <v-content>
        <nuxt />
      </v-content>
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
        drawer: false,
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