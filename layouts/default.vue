<template>
  <v-app light>
    <v-navigation-drawer app right fixed dark temporary v-model="drawer" class="camblue">
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
    <v-toolbar fixed app class="camblue">
      <img src="/csrlogo_black.svg" alt="Cambridge Serviced Rooms" style="height:48px;"/>
      <v-toolbar-title><nuxt-link tag="span" style="cursor: pointer" to="/">{{title}}</nuxt-link></v-toolbar-title>
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
    <v-content>
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
        items: [
          { to: '/', title: 'Home', icon: 'home' },
          { to: '/coronation-street', title: 'Coronation Street', icon: 'hotel' },
          { to: '/fair-street', title: 'Fair Street', icon: 'hotel' },
          { to: '/reviews', title: 'Reviews', icon: 'format_quote' },
          { to: '/contact', title: 'Contact Us', icon: 'email' }
        ],
        title: 'Cambridge Serviced Rooms'
      }
    },
    components: {
      Footer
    }
  }
</script>
<style>
  .nav-tile {
    height: 65px;
  }
</style>

