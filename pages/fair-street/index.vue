<template>
  <div>
    <v-layout class="hero-style" id="fairStreet" column align-center>
      <v-flex xs12>
        <img src="/csrlogo1.svg" alt="Cambridge Serviced Rooms" class="mt-5 mb-5 hidden-sm-and-up" style="height:200px;"/>
        <img src="/csrlogo1.svg" alt="Cambridge Serviced Rooms" class="mt-5 mb-5 hidden-xs-only" style="height:400px;"/>
      </v-flex>
    </v-layout>
    <v-container fluid class="camblue">
      <v-layout column class="mt-3">
        <v-flex xs12 lg6 offset-lg3>
          <h1 class="page-header white--text text-xs-center mt-5">Fair Street</h1>
          <h4 class="page-header white--text text-xs-center mt-5">Property description</h4>
          <div class="pa-3 mt-3 white--text text-xs-center">
            <h5 class="thin">blurb</h5>
            <h5 class="mt-4">blurb</h5>
          </div>
          <hr>
        </v-flex>
        <v-flex xs12 lg6 offset-lg3>
          <h2 class="page-header white--text text-xs-center mt-5">Ideal Location</h2>
          <h5 class="white--text text-xs-center thin mt-2">Fair Street is in an ideal location for those visiting the City. The luxury serviced rooms are a mere 10-minute walk from the historic city centre and all that Cambridge has to offer.</h5>
        </v-flex>
        <v-flex xs12>
          <div class="gmap">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d864.43172847973!2d0.12877562045421104!3d52.20737190174702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d87093d3c37cd5%3A0x8b2ded7c7b16590c!2s5+Fair+St%2C+Cambridge+CB1+1HA!5e0!3m2!1sen!2suk!4v1510418216181" width="100%" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>
          </div>
        </v-flex>
        <v-flex xs12 lg6 offset-lg3>
          <hr class="mt-5">
        </v-flex>
        <v-flex xs12 lg6 offset-lg3>
          <h2 class="page-header white--text text-xs-center mt-5">Exceptional spaces</h2>
          <h5 class="white--text text-xs-center thin mt-2">Restoration blurb</h5>
        </v-flex>
      </v-layout>
      <property />
    </v-container>
  </div>
</template>

<script>
import Property from '~/components/Property.vue'

export default {
  components: {
    Property
  }

}
</script>

<style>
  #fairStreet {
    background-image: url('/lg2.jpg');
  }
</style>