<template>
  <scroll-container @change="updateScrollState">
    <v-container fluid>
      <v-layout column>
        <v-flex xs12 md10 offset-md1>
          <v-container fluid grid-list-xl class="mt-4" style="min-height: 900px;">
            <v-layout row wrap align-items-center>
              <v-flex xs12 lg10 xl8 offset-lg1 offset-xl2 class="text-xs-center mb-5">
                <h1 class="white--text page-header">Cambridge Serviced Rooms</h1>
                <h3 class="white--text mt-5"><span class="thin">We offer</span> fully serviced, centrally located, luxury accommodation<span class="thin"> in the city of Cambridge.</span></h3>
              </v-flex>
              <scroll-item v-for="(item, i) in items" :id="i" :key="i">
                <v-flex v-if="item.dir === 'left'" xs12 lg7 class="text-xs-center mb-5 mt-5">
                  <div :class="`home-text ${state[i] && state[i].isBelowViewport ? 'hidden-left' : ''}`">
                    <h3>{{item.title}}</h3>
                    <h5 class="thin">{{item.text}}</h5>
                  </div>
                </v-flex>
                <v-flex v-else-if="item.dir === 'right'" xs12 lg7 offset-lg5 class="text-xs-center mb-5 mt-5">
                  <div :class="`home-text ${state[i] && state[i].isBelowViewport ? 'hidden-right' : ''}`">
                    <h3>{{item.title}}</h3>
                    <h5 class="thin">{{item.text}}</h5>
                  </div>
                </v-flex>
              </scroll-item>
            </v-layout>
          </v-container>
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
      }
    }
  }
</script>