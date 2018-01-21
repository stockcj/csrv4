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
                  <h2 class="display-3 mt-5">What you can expect...</h2>
                </div>
              </scroll-item>
              <scroll-item v-for="(item, i) in items" :id="i" :key="i">
                <v-flex v-if="item.dir === 'left'" xs12 class="mb-5 mt-5">
                  <v-layout>
                    <v-flex xs12 lg7>
                      <div :class="`home-text ${state[i] && state[i].isBelowViewport ? 'hidden-left' : ''}`">
                        <h3 class="display-2">{{item.title}}</h3>
                        <h5 class="headline thin mt-2">{{item.text}}</h5>
                      </div>
                    </v-flex>
                    <v-flex xs12 lg5>
                      <v-layout :class="`home-text ${state[i] && state[i].isBelowViewport ? 'hidden-right' : ''}`" style="height: 100%; width: 100%;">
                        <img src="/v.png" style="margin: auto; max-width: 100%; max-height: 100%">
                      </v-layout>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex v-else-if="item.dir === 'right'" xs12 class="mb-5 mt-5">
                  <v-layout>
                    <v-flex xs12 lg5>
                      <v-layout :class="`home-text ${state[i] && state[i].isBelowViewport ? 'hidden-left' : ''}`" style="height: 100%; width: 100%;">
                        <img src="/v.png" style="margin: auto; max-width: 100%; max-height: 100%">
                      </v-layout>
                    </v-flex>
                    <v-flex xs12 lg7>
                      <div :class="`home-text ${state[i] && state[i].isBelowViewport ? 'hidden-right' : ''}`">
                        <h3 class="display-2">{{item.title}}</h3>
                        <h5 class="headline thin mt-2">{{item.text}}</h5>
                      </div>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </scroll-item>
            </div>
            
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
          { dir: 'left', title: 'Fully Serviced', text: 'We offer fully serviced accommodation to our visitors. All guests can expect meticulously cleaned and prepared bedrooms and bathrooms, supplied with fresh linen and towels. We then service all rooms on a weekly basis, or prior to a new arrival, when once again we supply freshly laundered linen and towels.' },
          { dir: 'right', title: 'Centrally Located', text: 'Our properties are located in quiet residential side streets in the centre of Cambridge, and just minutes from the historic heart of city. Supermarkets, restaurants, shops, and bars, are all within easy reach.' },
          { dir: 'left', title: 'Excellent Value', text: 'Our fees are all inclusive, with no additional costs incurred during a visit. There are no additional administration fees, gas, water or electricity charges. There are no broadband or TV licence fees, council tax payments, or laundry costs. This makes budgeting for a stay with us very, very, straight forward.' },
          { dir: 'right', title: 'Exceptional Facilities', text: 'The houses provide free, unlimited, high speed broadband, via wi-fi connection. All guests have use of both the exceptionally equipped kitchens, which enable comfortable self catering, and the utility rooms, which have both a washing machine and tumble drier. The gardens benefits from soft landscaping, furniture, and have secure cycle storage space.' }
        ],
        state: {}
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