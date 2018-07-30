<template>
  <scroll-container @change="updateScrollState">
    <v-container fluid style="min-height: 900px;">
      <v-layout column>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2>
          <v-layout row wrap>
            <v-flex xs12 class="mb-5">
              <h1 class="display-4 page-header">Cambridge Serviced Rooms</h1>
              <h3 class="display-2 mt-5"><span class="thin">We offer</span> fully serviced, centrally located, luxury accommodation<span class="thin"> in the city of Cambridge.</span></h3>
            </v-flex>
            <div id="services" class="mb-5">
              <scroll-item id="9" class="mb-5">
                <div :class="`services-title ${state['9'] && state['9'].isBelowViewport ? 'hidden' : ''}`">
                  <h2 class="display-3 mt-5 mb-5">What you can expect...</h2>
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
                      <div :class="`boxy ${state[i] && state[i].isBelowViewport ? 'hidden-left' : ''}`">
                        <div :class="`home-text ${state[i] && state[i].isBelowViewport ? 'hidden' : ''}`">
                          <i :class="`hidden-lg-and-up ${item.icon} fa-fw fa-10x`" style="position: absolute; right: 0; bottom: 0; opacity: 0.15;"></i>
                          <h3 class="display-2">{{item.title}}</h3>
                          <h5 class="headline thin mt-2">{{item.text}}</h5>
                        </div>
                      </div>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </scroll-item>
            </div>
          </v-layout>
        </v-flex>
        <scroll-item id="10">
          <div :class="`properties-section ${state['10'] && state['10'].isBelowViewport ? 'hidden' : ''}`">
            <v-flex xs12 sm10 offset-sm1 md8 offset-md2>
              <h2 class="display-3 mb-5">Our Properties</h2>
            </v-flex>
          </div>
        </scroll-item>
        <div :class="`properties-section ${state['10'] && state['10'].isBelowViewport ? 'hidden' : ''}`">
          <v-flex xs12>
            <div id="properties" class="mb-5">
              <v-layout row wrap>
                <v-flex xs12 lg6>
                  <div class="prop-card-container">
                    <v-card flat class="prop-card">
                      <v-card-media src="http://images.ctfassets.net/kgtv9xl00xvv/2jcquMwaj6ggWI0cqyEsii/b203c8db31d0f38507e527effc249e52/ext2.jpg" :height="height"></v-card-media>
                      <v-card-title>Coronation Street</v-card-title>
                    </v-card>
                    <div class="card-overlay">
                      <div class="overlay-text">
                        <h1 class="display-4 thick">Coronation Street</h1>
                        <h5 class="display-1 mt-5">6 Bedrooms, close to the station.</h5>
                      </div>
                    </div>
                  </div>
                </v-flex>
                <v-flex xs12 lg6>
                  <div class="prop-card-container">
                    <v-card flat class="prop-card">
                      <v-card-media src="http://images.ctfassets.net/kgtv9xl00xvv/JF34zE5nMc6Ca8s2smQ6W/6903a5f4f279bd6e98ce75ef2ca4cf58/fsext1m.jpg" :height="height"></v-card-media>
                      <v-card-title>Fair Street</v-card-title>
                    </v-card>
                    <div class="card-overlay">
                      <div class="overlay-text">
                        <h1 class="display-4 thick">Fair Street</h1>
                        <h5 class="display-1 mt-5">6 Bedrooms, near the city centre.</h5>
                      </div>
                    </div>
                  </div>
                </v-flex>
              </v-layout>
            </div>
          </v-flex>
        </div>
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
            text: 'We offer fully serviced accommodation to our visitors. All guests can expect meticulously cleaned and prepared bedrooms and bathrooms, supplied with fresh linen and towels. We then service all rooms on a weekly basis, or prior to a new arrival, when once again we supply freshly laundered linen and towels.'
          },
          {
            icon: 'fas fa-map-pin',
            title: 'Centrally Located',
            text: 'Our properties are located in quiet residential side streets in the centre of Cambridge, and just minutes from the historic heart of city. Supermarkets, restaurants, shops, and bars, are all within easy reach.'
          },
          {
            icon: 'fas fa-pound-sign',
            title: 'Excellent Value',
            text: 'Our fees are all inclusive, with no additional costs incurred during a visit. There are no additional administration fees, gas, water or electricity charges. There are no broadband or TV licence fees, council tax payments, or laundry costs. This makes budgeting for a stay with us very, very, straight forward.'
          },
          {
            icon: 'far fa-lightbulb',
            title: 'Exceptional Facilities',
            text: 'The houses provide free, unlimited, high speed broadband, via wi-fi connection. All guests have use of both the exceptionally equipped kitchens, which enable comfortable self catering, and the utility rooms, which have both a washing machine and tumble drier. The gardens benefits from soft landscaping, furniture, and have secure cycle storage space.'
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
        console.log(state)
      }
    }
  }
</script>