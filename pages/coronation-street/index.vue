<template>
  <div>
    <v-layout>
      <v-flex xs12>
        <h1 class="page-header white--text text-xs-center mt-5">Coronation Street</h1>
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
