<template>
  <div>
    <v-layout class="hero-style" id="reviews" column align-center v-scroll="onScroll">
      <v-flex xs12>
        <img src="/csrlogo1.svg" alt="Cambridge Serviced Rooms" class="mt-5 mb-5 hidden-sm-and-up" style="height:200px;"/>
        <img src="/csrlogo1.svg" alt="Cambridge Serviced Rooms" class="mt-5 mb-5 hidden-xs-only" style="height:400px;"/>
      </v-flex>
    </v-layout>
    <v-container fluid grey lighten-3>
      <v-layout>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2>
          <h1 class="page-header mt-5" :class="[$vuetify.breakpoint.xs ? 'display-3 thin' : 'display-4']">Reviews</h1>
          <h3 class="thin mt-5 mb-5" :class="[$vuetify.breakpoint.xs ? 'display-1' : 'display-2']">Read some of the things our lovely guests have had to say about Cambridge Serviced Rooms.</h3>
          <v-layout row wrap class="mb-5">
            <v-flex xs12 class="mt-5" v-for="review in reviews" :key="review.id">
              <h5 class="headline thin">
                <span><v-icon v-bind="size" class="icon-flipped">format_quote</v-icon></span>
                {{review.text}}
                <span><v-icon v-bind="size">format_quote</v-icon></span>
              </h5>
              <h5 class="headline mt-3">{{review.author}} ({{review.date}})</h5>
              <v-divider></v-divider>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <v-fab-transition>
      <v-btn
        to="/contact"
        fixed
        bottom
        right
        round
        color="camblue"
        v-show="!hidden"
      >
        Contact Us
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'

const client = createClient()

export default {
  data () {
    return {
      offSetTop: 0,
      hidden: true
    }
  },
  async asyncData ({env}) {
    let data = await client.getEntries({
      'content_type': 'review',
      'order': 'fields.id'
    })
    const reviews = []
    data.items.forEach((review) => {
      reviews.push(review.fields)
    })
    return { reviews }
  },
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
    }
  },
  methods: {
    onScroll (e) {
      this.offSetTop = window.pageYOffset || document.documentElement.scrollTop
      if (this.offSetTop > 200) {
        this.hidden = false
      } else {
        this.hidden = true
      }
    }
  },
  head () {
    return {
      title: 'Cambridge Serviced Rooms - Reviews',
      meta: [
        { hid: 'description', name: 'description', content: 'Read reviews from some of the lovely people who have stayed with Cambridge Serviced Rooms.' }
      ]
    }
  }
}
</script>

<style>
  #reviews {
    background-image: url('/lg1.jpg');
  }

  .divider {
    margin-top: 15px;
  }
</style>

loadReviews ({commit}) {
        client.getEntries({
          'content_type': 'review',
          'order': 'fields.id'
        })
          .then((data) => {
            const reviews = []
            data.items.forEach((review) => {
              reviews.push(review.fields)
            })
            commit('setReviews', reviews)
          })
      }