<template>
  <div>
    <p class="headline">{{room.houseName}} - {{ room.name }}</p>
  </div>
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