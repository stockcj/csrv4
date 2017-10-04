<template>
  <v-layout>
    <v-flex xs12 sm10 offset-sm1 class="mt-3">
      <v-container grid-list-xl>
        <v-layout row wrap>
          <v-flex xs12 md6 v-for="room in rooms" :key="room.id">
            <v-card>
              <v-card-media :src="room.titleImage" height="300px">
              </v-card-media>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">{{room.name}}</h3>
                  <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat :to="$route.path + '/' + room.id" primary>See inside</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'property',
  computed: {
    rooms () {
      return this.$store.getters.getRooms
    }
  },
  methods: {
    fetchRooms: function () {
      const path = this.$route.path
      const property = path.match(/[^/]+$/g)[0]
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