<template>
  <v-layout>
    <v-flex xs12>
      <h4 class="page-header white--text text-xs-center mt-5">{{ room.houseName }}</h4>
      <h1 class="page-header white--text text-xs-center">{{ room.name }}</h1>
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

</style>