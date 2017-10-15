<template>
  <v-container fluid class="primary-layout">
    <v-layout>
      <v-flex xs12>
        <h1 class="page-header white--text text-xs-center mt-5">Fair Street</h1>
      </v-flex>
    </v-layout>
    <property />
  </v-container>
</template>

<script>
import Property from '~/components/Property.vue'

export default {
  components: {
    Property
  }

}
</script>