<template>
  <div>
    <p class="headline">Coronation Street</p>
    <div v-for="room in rooms" :key="room.id">
      <v-btn :to="'/properties/coronation-street/' + room.id">{{room.name}}</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    rooms () {
      return this.$store.getters.getRooms
    }
  },
  methods: {
    fetchRooms: function () {
      this.$store.dispatch('loadRooms', 'cs')
    }
  },
  created () {
    this.fetchRooms()
  }
}
</script>

<style>

</style>