<template>
  <v-footer app class="grey lighten-2">
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12>
          <div class="mb-3">
            <v-layout align-center justify-center column>
              <img src="/csrlogo_black.svg" alt="Cambridge Serviced Rooms" style="height:96px;"/>
            </v-layout>
          </div>
        </v-flex>
        <v-flex xs12>
          <h5 class="mb-3 title">
            <v-layout align-center justify-center column>
              <span>Cambridge Serviced Rooms</span>
            </v-layout>
          </h5>
        </v-flex>
        <v-flex xs12>
          <h5 class="subheading">
            <v-layout align-center justify-center column>
              <span>&copy; {{ new Date().getFullYear() }}</span>
            </v-layout>
          </h5>
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>
<script>
export default {
  name: 'footer'
}
</script>

