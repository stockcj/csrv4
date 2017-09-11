<template>
  <div>
    <p class="headline">Coronation Street - {{ room }}</p>
  </div>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    room () {
      return this.$store.getters.getRoom(this.$route.params.id)
    }
  }
}
</script>

<style>

</style>