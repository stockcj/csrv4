<template>
  <div>
    <v-layout class="hero-style" id="contactUs" column align-center>
      <v-flex xs12>
        <img src="/csrlogo1.svg" alt="Cambridge Serviced Rooms" class="mt-5 mb-5 hidden-sm-and-up" style="height:200px;"/>
        <img src="/csrlogo1.svg" alt="Cambridge Serviced Rooms" class="mt-5 mb-5 hidden-xs-only" style="height:400px;"/>
      </v-flex>
    </v-layout>
    <v-container fluid grey lighten-3>
      <v-layout row wrap>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2 class id="thanks">
          <h1 class="page-header" :class="[$vuetify.breakpoint.xs ? 'display-3 thin' : 'display-4 mt-5']">Thank you!</h1>
          <h3 class="thin mt-5 mb-5" :class="[$vuetify.breakpoint.xs ? 'display-1' : 'display-2']">Your request has been sent successfully.  We aim to respond to all enquiries within 24 hours. Speak soon!</h3>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<style>
  #contactUs {
    background-image: url('/lg1.jpg');
  }
</style>
