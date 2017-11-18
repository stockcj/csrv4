<template>
  <v-layout>
    <v-flex xs12 sm10 offset-sm1 md8 offset-md2 class="mt-5 mb-5">
      <v-container grid-list-xl>
        <v-layout row wrap>
          <v-flex xs12 lg6 v-for="room in rooms" :key="room.id">
            <v-card raised>
              <v-card-media :src="room.titleImage" :height="height">
              </v-card-media>
              <v-card-title primary-title>
                <div>
                  <h4 class="display-1">{{room.name}}</h4>
                  <div class="mt-2">
                    <v-chip v-for="(feature, index) in room.features" :key="index" class="camblue">
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
    },
    height () {
      if (this.$vuetify.breakpoint.xl) {
        return (400)
      } else if (this.$vuetify.breakpoint.lg) {
        return (300)
      } else if (this.$vuetify.breakpoint.md) {
        return (400)
      } else if (this.$vuetify.breakpoint.sm) {
        return (400)
      } else {
        return (300)
      }
    }
  }
}
</script>

<style>

</style>