<template>
  <div>
    <v-layout>
      <v-flex xs12>
        <h2 class="text-xs-center mt-5">Fair Street</h2>
      </v-flex>
    </v-layout>
    <property />
  </div>
</template>

<script>
import Property from '~/components/Property.vue'

export default {
  components: {
    Property
  }

}
</script>