<template>
  <scroll-container @change="updateScrollState">
    <v-container fluid style="min-height: 900px;">
      <v-layout column>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2>
          <v-layout row wrap>
            <v-flex xs12 class="mb-5">
              <h1 class="page-header text-xs-center site-title" :class="[$vuetify.breakpoint.xs ? 'display-3 thin' : 'display-4']">Cambridge Serviced Rooms</h1>
              <h3 class="mt-5 text-xs-center" :class="[$vuetify.breakpoint.xs ? 'display-1' : 'display-2']"><span class="thin">We offer</span> fully serviced, centrally located, luxury accommodation<span class="thin"> in the city of Cambridge.</span></h3>
            </v-flex>
            <div id="services" class="mb-5">
              <scroll-item id="9" class="mb-5">
                <div :class="`services-title ${state['9'] && state['9'].isBelowViewport ? 'hidden' : ''}`">
                  <h2 class="mt-5 mb-5" :class="[$vuetify.breakpoint.xs ? 'display-2' : 'display-3']">What you can expect...</h2>
                </div>
              </scroll-item>
              <scroll-item v-for="(item, i) in items" :id="i" :key="i">
                <v-flex xs12 class="mb-5 mt-5">
                  <v-layout row wrap>
                    <v-flex lg2 class="hidden-md-and-down">
                      <v-layout :class="`home-icon ${state[i] && state[i].isBelowViewport ? 'hidden' : ''}`" style="height: 100%; width: 100%;">
                        <i :class="`${item.icon} fa-fw fa-10x`" style="margin: auto; max-width: 100%; max-height: 100%; padding-right: 25px"></i>
                      </v-layout>
                    </v-flex>
                    <v-flex xs12 lg10>
                      <div :class="`boxy ${state[i] && state[i].isBelowViewport ? 'hidden-left' : ''}`" >
                        <div :class="[$vuetify.breakpoint.xs ? 'ht-cont small' : 'ht-cont']" >
                          <div :class="`home-text ${state[i] && state[i].isBelowViewport ? 'hidden' : ''}`">
                            <i :class="`hidden-lg-and-up ${item.icon} fa-fw fa-10x`" style="position: absolute; right: 0; bottom: 0; opacity: 0.15;"></i>
                            <h3 :class="[$vuetify.breakpoint.xs ? 'display-1' : 'display-2']">{{item.title}}</h3>
                            <h5 class="headline thin mt-2">{{item.text}}</h5>
                          </div>
                        </div>
                      </div>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </scroll-item>
            </div>
          </v-layout>
        </v-flex>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2>
          <v-layout row wrap>
            <v-flex xs12>
              <scroll-item id="10">
                <div :class="`properties-section ${state['10'] && state['10'].isBelowViewport ? 'hidden' : ''}`">
                  <h2 class="mb-5" :class="[$vuetify.breakpoint.xs ? 'display-2' : 'display-3']">Our Properties</h2>
                </div>
              </scroll-item>
              <div :class="`properties-section ${state['10'] && state['10'].isBelowViewport ? 'hidden' : ''}`">
                <v-flex xs12>
                  <div id="properties" class="mb-5">
                    <v-layout row wrap>
                      <v-flex xs12 xl6>
                        <router-link :to="'coronation-street'">
                          <div class="prop-card-container">
                            <v-card flat class="prop-card">
                              <v-card-media src="https://images.ctfassets.net/kgtv9xl00xvv/2jcquMwaj6ggWI0cqyEsii/b203c8db31d0f38507e527effc249e52/ext2.jpg" :height="height"></v-card-media>
                            </v-card>
                            <v-layout class="card-overlay">
                              <v-flex :class="[$vuetify.breakpoint.xs ? 'overlay-text small' : 'overlay-text']">
                                <h1 class="thick" :class="[$vuetify.breakpoint.smAndDown ? 'display-3 thin' : 'display-4']">Coronation Street</h1>
                                <h5 class="hidden-xs-only display-1 mt-5">6 Bedrooms, close to the station.</h5>
                              </v-flex>
                            </v-layout>
                            <v-layout row wrap class="card-underlay">
                              <v-flex :class="[$vuetify.breakpoint.xs ? 'underlay-text small' : 'underlay-text']">
                                <h1 class="thick page-header" :class="[$vuetify.breakpoint.smAndDown ? 'display-2 thin' : 'display-3']">Coronation Street</h1>
                              </v-flex>
                            </v-layout>
                          </div>
                        </router-link>
                      </v-flex>
                      <v-flex xs12 xl6>
                        <router-link :to="'fair-street'">
                          <div class="prop-card-container">
                            <v-card flat class="prop-card">
                              <v-card-media src="https://images.ctfassets.net/kgtv9xl00xvv/159gtnrRHgcYKWs8YYeQiG/3722b316144b5733de5b760c17e34b41/one.jpg" :height="height"></v-card-media>
                            </v-card>
                            <v-layout row wrap class="card-overlay">
                              <v-flex :class="[$vuetify.breakpoint.xs ? 'overlay-text small' : 'overlay-text']">
                                <h1 class="thick" :class="[$vuetify.breakpoint.smAndDown ? 'display-3 thin' : 'display-4']">Fair Street</h1>
                                <h5 class="hidden-xs-only display-1 mt-5">6 Bedrooms, near the city centre.</h5>
                              </v-flex>
                            </v-layout>
                            <v-layout row wrap class="card-underlay">
                              <v-flex :class="[$vuetify.breakpoint.xs ? 'underlay-text small' : 'underlay-text']">
                                <h1 class="thick page-header" :class="[$vuetify.breakpoint.smAndDown ? 'display-2 thin' : 'display-3']">Fair Street</h1>
                              </v-flex>
                            </v-layout>
                          </div>
                        </router-link>
                      </v-flex>
                    </v-layout>
                  </div>
                </v-flex>
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </scroll-container>
</template>

<script>
  export default {
    layout: 'home',
    data () {
      return {
        items: [
          {
            icon: 'far fa-heart',
            title: 'Fully Serviced',
            text: 'We offer fully serviced accommodation, perfect for visiting academics, and those who require a high quality, peaceful environment.'
          },
          {
            icon: 'fas fa-map-pin',
            title: 'Centrally Located',
            text: 'Our properties are located on quiet residential side streets in Cambridge, and both are just minutes from the historic City Centre. Supermarkets are a couple of minutes walk from the properties.'
          },
          {
            icon: 'fas fa-pound-sign',
            title: 'Excellent Value',
            text: 'Our fees are completely inclusive, there are no additional costs or surcharges, making budgeting for a stay with us very straight forward.'
          },
          {
            icon: 'far fa-lightbulb',
            title: 'Exceptional Facilities',
            text: 'Each property provides guests with super-fast unlimited cable broadband, lovely fully equipped kitchens and dining rooms for self-catering, with individual fridge & food storage space. The utility area is equipped with a washing machine and tumble dryer, and the very private courtyard gardens have space for bicycle storage.'
          }
        ],
        state: {}
      }
    },
    computed: {
      height () {
        if (this.$vuetify.breakpoint.xl) {
          return (600)
        } else if (this.$vuetify.breakpoint.lg) {
          return (600)
        } else if (this.$vuetify.breakpoint.md) {
          return (600)
        } else if (this.$vuetify.breakpoint.sm) {
          return (400)
        } else {
          return (300)
        }
      }
    },
    methods: {
      updateScrollState (state) {
        this.state = state
      }
    }
  }
</script>
<style>
  .site-title {
    margin-top: -40px;
  }
</style>

