<template>
  <v-app light>
    <v-toolbar :class="[toolbar ? 'toolbar--home' : 'hidden']" fixed>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <main class="home">
      <v-container fluid class="primary-layout">
        <nuxt />
      </v-container>
    </main>
    <v-footer>
      <span>&copy; 2017</span>
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
        this.toolbar = window.scrollY > 100
      }
    }
  }
</script>

<style>
  .home {
    padding-top: 0px !important;
  }
</style>