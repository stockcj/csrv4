<template>
  <div>
    <v-layout class="hero-style" id="contactUs" column align-center>
      <v-flex xs12>
        <img src="/csrlogo1.svg" alt="Cambridge Serviced Rooms" class="mt-5 mb-5 hidden-sm-and-up" style="height:200px;"/>
        <img src="/csrlogo1.svg" alt="Cambridge Serviced Rooms" class="mt-5 mb-5 hidden-xs-only" style="height:400px;"/>
      </v-flex>
    </v-layout>
    <v-container fluid class="camblue">
      <v-layout row wrap>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2>
          <h1 class="page-header white--text text-xs-center mt-5">Contact Us</h1>
          <h3 class="white--text text-xs-center thin mt-5">If you think you might like to stay with us, great! You can send us an enquiry by submitting the form below.</h3>
        </v-flex>
        <v-flex xs12 sm8 offset-sm2 md6 offset-md3 class="mt-3">
          <v-card id="contactCard">
            <v-form>
            <v-container>
            <v-card-title>
              <h3 class="headline">Enquiry Form</h3>
            </v-card-title>
            <v-card-text>
              <v-layout row wrap>
                <v-flex xs12>
                  <v-text-field
                    label="Your name"
                    prepend-icon="account_circle"
                  ></v-text-field>
                  <v-text-field
                    label="Email"
                    prepend-icon="email"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 md5>
                  <v-dialog
                    v-model="modal1"
                    lazy
                    full-width
                  >
                    <v-text-field
                      slot="activator"
                      label="Arrival Date"
                      v-model="aDate"
                      prepend-icon="event"
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
                  >
                    <v-text-field
                      slot="activator"
                      label="Departure Date"
                      v-model="dDate"
                      prepend-icon="event"
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
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    label="Additional Information"
                    prepend-icon="create"
                    multi-line
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-card-text>
            <v-card-actions>
              <v-layout class="text-xs-center">
                <v-flex xs12>
                  <v-btn primary raised large type="submit">Submit</v-btn>
                </v-flex>
              </v-layout>
            </v-card-actions>
            </v-container>
            </v-form>
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
      modal2: false
    }
  }
}
</script>


<style>
  #contactUs {
    background-image: url('/lg2.jpg');
  }
</style>
