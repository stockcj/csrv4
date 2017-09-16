<template>
  <div>
    <p class="headline">{{ room.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'room',
  computed: {
    room () {
      return this.$store.getters.getRoom(this.$route.params.id)
    }
  },
  methods: {
    fetchRooms: function () {
      const path = this.$route.path
      const property = path.split('/')[2]
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