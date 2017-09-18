<template>
  <v-container fluid>
    <!-- <v-layout column justify-center align-center>
      <div class="text-xs-center mt-5 mb-5">
        <v-flex xs8 offset-xs2>
          <h3 class="white--text">Services</h
          <h4 class="white--text"><span class="thin">Our properties are the perfect base for</span> working, studying<span class="thin">, or just </span>visiting
            <span class="thin">Cambridge.</span></h4>
        </v-flex>
      </div>
    </v-layout> -->
    <v-layout column>
      <v-flex xs12 md10 offset-md1>
        <v-container fluid grid-list-xl class="mt-5">
          <v-layout row wrap align-items-center> 
            <v-flex xs12 md5 class="text-xs-center">
              <h3>Fully Serviced</h3>
            </v-flex>
            <v-flex xs12 md7 class="mb-5">
              <h5 class="thin">We offer fully serviced accommodation to our visitors. All guests can expect meticulously cleaned and prepared bedrooms
                  and bathrooms, supplied with fresh linen and towels. We then service all rooms on a weekly basis, or prior to a
                  new arrival, when once again we supply freshly laundered linen and towels.</h5>
            </v-flex>
            <v-flex xs12 md5 class="text-xs-center">
              <h3>Centrally Located</h3>
            </v-flex>
            <v-flex xs12 md7 class="mb-5">
              <h5 class="thin">Our properties are located in quiet residential side streets in the centre of Cambridge, and just minutes from the
                historic heart of city. Supermarkets, restaurants, shops, and bars, are all within easy reach.</h5>
            </v-flex>
            <v-flex xs12 md5 class="text-xs-center">
              <h3>Excellent Value</h3>
            </v-flex>
            <v-flex xs12 md7 class="mb-5">
              <h5 class="thin">Our fees are all inclusive, with no additional costs incurred during a visit. There are no additional administration
                fees, gas, water or electricity charges. There are no broadband or TV licence fees, council tax payments, or laundry
                costs. This makes budgeting for a stay with us very, very, straight forward.</h5>
            </v-flex>
            <v-flex xs12 md5 class="text-xs-center">
              <h3>Exceptional Facilities</h3>
            </v-flex>
            <v-flex xs12 md7 class="mb-5">
              <h5 class="thin">The houses provide free, unlimited, high speed broadband, via wi-fi connection. All guests have use of both the exceptionally
                equipped kitchens, which enable comfortable self catering, and the utility rooms, which have both a washing machine
                and tumble drier. The gardens benefits from soft landscaping, furniture, and have secure cycle storage space.</h5>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    layout: 'home'
  }
</script>