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
  }

}
</script>

<style>

</style>