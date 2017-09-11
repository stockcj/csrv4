<template>
  <div>
    <p class="headline">Coronation Street - {{ room }}</p>
  </div>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    room ($route) {
      const par = $route.params.id
      return par
      // return this.$store.getters.getRoom(params.id)
    }
  }
}
</script>

<style>

</style>