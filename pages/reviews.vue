<template>
  <div>
    <v-layout class="hero-style" column align-center>
        <v-flex xs12>
          <img src="/csrlogo1.svg" alt="Cambridge Serviced Rooms" class="mt-5 mb-5 hidden-sm-and-up" style="height:200px;"/>
          <img src="/csrlogo1.svg" alt="Cambridge Serviced Rooms" class="mt-5 mb-5 hidden-xs-only" style="height:400px;"/>
        </v-flex>
      </v-layout>
    <v-container fluid class="camblue">
      <v-layout>
        <v-flex xs12 lg8 offset-lg2>
          <h1 class="page-header white--text text-xs-center mt-5">Reviews</h1>
          <h3 class="white--text text-xs-center thin mt-5">Read some of the things our lovely guests have had to say about Cambridge Serviced Rooms.</h3>
          <v-container class="mt-5" grid-list-xl>
            <v-layout row wrap>
              <v-flex xs12 v-for="review in reviews" :key="review.id">
                <v-layout>
                  <v-flex xs12 lg8 offset-lg2 class="mt-3">
                    <h5 class="white--text thin">
                      <span><v-icon v-bind="size" class="icon-flipped">format_quote</v-icon></span>
                      {{review.text}}
                      <span><v-icon v-bind="size">format_quote</v-icon></span>
                    </h5>
                    <h5 class="white--text">{{review.author}} ({{review.date}})</h5>
                    <v-divider dark></v-divider>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    size () {
      if (this.$vuetify.breakpoint.lgAndUp) {
        return ({'x-large': true})
      } else if (this.$vuetify.breakpoint.md) {
        return ({'large': true})
      } else if (this.$vuetify.breakpoint.sm) {
        return ({'medium': true})
      } else {
        return ({'small': true})
      }
    },
    reviews () {
      return this.$store.getters.getReviews
    }
  },
  middleware: 'load-reviews'
}
</script>