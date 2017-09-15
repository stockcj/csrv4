<template>
  <div>
    <p class="headline">Fair Street - {{ room.name }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    room () {
      return this.$store.getters.getRoom(this.$route.params.id)
    }
  },
  methods: {
    fetchRooms: function () {
      this.$store.dispatch('loadRooms', 'fs')
    }
  },
  created () {
    this.fetchRooms()
  }
}
</script>

<style>

</style>