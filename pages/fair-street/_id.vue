<template>
  <room />
</template>

<script>
import Room from '~/components/Room.vue'

export default {
  components: {
    Room
  },
  middleware: 'load-rooms'
}
</script>

<style>

</style>