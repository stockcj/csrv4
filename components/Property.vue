<template>
  <v-layout>
    <v-flex xs12 sm10 offset-sm1 class="mt-3">
      <v-container grid-list-xl>
        <v-layout row wrap>
          <v-flex xs12 md6 v-for="room in rooms" :key="room.id">
            <v-card>
              <v-card-media :src="room.titleImage" height="300">
              </v-card-media>
              <v-card-title primary-title>
                <div>
                  <h4>{{room.name}}</h4>
                  <div class="mt-2">
                    <v-chip v-for="(feature, index) in room.features" :key="index" class="blue white--text">
                      {{feature}}
                    </v-chip>
                  </div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat large :to="$route.path + '/' + room.id" accent>See inside</v-btn>
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
      const path = this.$route.path
      const property = path.match(/[^/]+$/g)[0]
      return this.$store.getters.getHouseRooms(property)
    }
  }
}
</script>

<style>

</style>