<template>
  <div>
    <v-layout class="hero-style" id="coronationStreet" column align-center>
      <v-flex xs12>
        <img src="/csrlogo1.svg" alt="Cambridge Serviced Rooms" class="mt-5 mb-5 hidden-sm-and-up" style="height:200px;"/>
        <img src="/csrlogo1.svg" alt="Cambridge Serviced Rooms" class="mt-5 mb-5 hidden-xs-only" style="height:400px;"/>
      </v-flex>
    </v-layout>
    <v-container fluid class="camblue">
      <v-layout column class="mt-3">
        <v-flex xs12 lg6 offset-lg3>
          <h1 class="page-header white--text text-xs-center mt-5">Coronation Street</h1>
          <h4 class="page-header white--text text-xs-center mt-5">It’s peaceful environment, and location, make it an ideal base for either working from home, or working in, or just visiting the city.</h4>
          <div class="pa-3 mt-3 white--text text-xs-center">
            <h5 class="thin">The house has been newly renovated and finished to a high standard. With light communal spaces, and comfortable private rooms, it's the perfect place to rest or work.</h5>
            <h5 class="mt-4"></h5>
          </div>
          <hr>
        </v-flex>
        <v-flex xs12 lg6 offset-lg3>
          <h2 class="page-header white--text text-xs-center mt-5">Central Location</h2>
          <h5 class="white--text text-xs-center thin mt-2">Coronation Street is in an ideal location for those visiting the City. The luxury serviced rooms are a mere 10-minute walk from the historic city centre and all that Cambridge has to offer.</h5>
        </v-flex>
        <v-flex xs12>
          <div class="gmap"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d604.1611256696611!2d0.125989173246757!3d52.196844422990615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8709bfc2ff1bd%3A0x81a079e17e85e46d!2s61+Coronation+St%2C+Cambridge+CB2+1HJ!5e0!3m2!1sen!2suk!4v1510417780858" width="100%" height="600" frameborder="0" style="border:0" allowfullscreen></iframe></div>
        </v-flex>
        <v-flex xs12 lg6 offset-lg3>
          <hr class="mt-5">
        </v-flex>
        <v-flex xs12 lg6 offset-lg3>
          <h2 class="page-header white--text text-xs-center mt-5">Stunning Rooms</h2>
          <h5 class="white--text text-xs-center thin mt-2">Following our complete renovation of the appealing late Victorian house, we were keen to give each room an individual feel and personality, whilst retaining the original character</h5>
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
  #coronationStreet {
    background-image: url('/lg2.jpg');
  }
</style>