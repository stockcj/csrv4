<template>
  <div>
    <div v-for="room in rooms" :key="room.id">
      <v-btn :to="$route.path + '/' + room.id">{{room.name}}</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'property',
  computed: {
    rooms () {
      return this.$store.getters.getRooms
    }
  },
  methods: {
    fetchRooms: function () {
      const path = this.$route.path
      const property = path.match(/[^/]+$/g)[0]
      this.$store.dispatch('loadRooms', property)
    }
  },
  created () {
    this.fetchRooms()
  }
}
</script>

<style>

</style>