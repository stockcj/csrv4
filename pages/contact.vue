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
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2>
          <h1 class="page-header" :class="[$vuetify.breakpoint.xs ? 'display-3 thin' : 'display-4 mt-5']">Contact Us</h1>
          <h3 class="thin mt-5 mb-5" :class="[$vuetify.breakpoint.xs ? 'display-1' : 'display-2']">If you think you might like to stay with us, great! You can send us an enquiry by submitting the form below.</h3>
        </v-flex>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2 class="mt-5">
          <v-card id="contactCard" class="mb-5">
            <form action="https://formspree.io/info@cambridgeservicedrooms.com" method="POST">
            <input type="hidden" name="_subject" value="CSR Enquiry">
            <input type="hidden" name="_next" value="/thanks#thanks">
            <input type="text" name="_format" value="plain" style="display:none">
            <input type="text" name="_gotcha" style="display:none;">
            <v-container>
            <v-card-title>
              <h5 class="headline">Enquiry Form</h5>
            </v-card-title>
            <v-card-text>
              <v-layout row wrap>
                <v-flex xs12>
                  <v-text-field
                    label="Your name"
                    prepend-icon="account_circle"
                    name="Name"
                  ></v-text-field>
                  <v-text-field
                    label="Email"
                    prepend-icon="email"
                    name="_replyto"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 md5>
                  <v-dialog
                    v-model="modal1"
                    lazy
                    full-width
                    width="290px"
                  >
                    <v-text-field
                      slot="activator"
                      label="Arrival Date"
                      v-model="aDate"
                      prepend-icon="event"
                      name="Arrival Date"
                      readonly
                    ></v-text-field>
                    <v-date-picker v-model="aDate" scrollable autosave>
                    </v-date-picker>
                  </v-dialog>
                </v-flex>
                <v-flex xs12 md5 offset-md1>
                  <v-dialog
                    v-model="modal2"
                    lazy
                    full-width
                    width="290px"
                  >
                    <v-text-field
                      slot="activator"
                      label="Departure Date"
                      v-model="dDate"
                      prepend-icon="event"
                      name="Departure Date"
                      readonly
                    ></v-text-field>
                    <v-date-picker v-model="dDate" scrollable autosave>
                    </v-date-picker>
                  </v-dialog>
                </v-flex>
                <v-flex xs12 md5>
                  <v-text-field
                    label="Number in Group"
                    prepend-icon="group"
                    type="number"
                    name="Number in Group"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 md5 offset-md1>
                  <v-select
                    :items="properties"
                    label="Preferred Property"
                    prepend-icon="home"
                    single-line
                    name="Preferred Property"
                  ></v-select>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    label="Additional Information"
                    prepend-icon="create"
                    name="Additional Information"
                    multi-line
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-card-text>
            <v-card-actions>
              <v-layout class="text-xs-center">
                <v-flex xs12>
                  <v-btn primary raised large type="submit" name="action">Submit</v-btn>
                </v-flex>
              </v-layout>
            </v-card-actions>
            </v-container>
            </form>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      aDate: null,
      dDate: null,
      modal1: false,
      modal2: false,
      properties: [
        { text: 'Coronation Street' },
        { text: 'Fair Street' }
      ]
    }
  },
  head () {
    return {
      title: 'Cambridge Serviced Rooms - Contact',
      meta: [
        { hid: 'description', name: 'description', content: 'Contact us about staying with Cambridge Serviced Rooms' }
      ]
    }
  }
}
</script>


<style>
  #contactUs {
    background-image: url('/ext9.jpg');
  }
</style>
