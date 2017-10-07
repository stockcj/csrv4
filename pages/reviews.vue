<template>
  <div>
    <v-layout>
      <v-flex xs12 sm10 offset-sm1>
        <h2 class="text-xs-center mt-5">Reviews</h2>
        <h3 class="text-xs-center thin mt-5">Read some of the things our lovely guests have had to say about Cambridge Serviced Rooms.</h3>
        <v-container class="mt-5" grid-list-xl>
          <v-layout row wrap>
            <v-flex xs12 v-for="review in reviews" :key="review.id">
              <v-card>
                <v-card-text class="headline p3">
                  <v-layout>
                    <v-flex xs1>
                      <v-icon class="icon-flipped">format_quote</v-icon>
                    </v-flex>
                    <v-flex xs10>
                      {{review.text}}
                    </v-flex>
                    <v-flex xs1>
                      <v-icon x-large>format_quote</v-icon>
                    </v-flex>
                  </v-layout>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <p class="headline">- {{review.author}} ({{review.date}})</p>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      size: 'large'
    }
  },
  computed: {
    reviews () {
      return this.$store.getters.getReviews
    }
  },
  methods: {
    fetchReviews: function () {
      this.$store.dispatch('loadReviews')
    }
  },
  created () {
    this.fetchReviews()
  }
}
</script>