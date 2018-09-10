<template>
  <div>
    <v-layout :style="[heroStyle, {backgroundImage: 'url(' + property.images[0] + ')'}]" column align-center>
      <v-flex xs12>
        <img src="/csrlogo1.svg" alt="Cambridge Serviced Rooms" class="mt-5 mb-5 hidden-sm-and-up" style="height:200px;"/>
        <img src="/csrlogo1.svg" alt="Cambridge Serviced Rooms" class="mt-5 mb-5 hidden-xs-only" style="height:400px;"/>
      </v-flex>
    </v-layout>
    <v-container fluid grey lighten-3>
      <v-layout column class="mt-3">
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2>
          <h1 class="page-header mt-5" :class="[$vuetify.breakpoint.xs ? 'display-3 thin' : 'display-4']">Coronation Street</h1>
          <h3 class="thin mt-5 mb-5" :class="[$vuetify.breakpoint.xs ? 'display-1' : 'display-2']">It’s peaceful environment, and location, make it an ideal base for either working from home, or working in or around the city.</h3>
          <hr>
        </v-flex>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2>
          <h2 class="page-header mt-5" :class="[$vuetify.breakpoint.xs ? 'display-2' : 'display-3']">The Property</h2>
          <h5 class="headline thin mt-2 mb-5">61 Coronation Street has been recently renovated and finished to a high standard. With light communal spaces, and comfortable private rooms, it's the perfect place to rest or work.</h5>
          <h5 class="headline thin mt-2 mb-5">The property provides guests with super-fast unlimited cable broadband, lovely fully equipped kitchen and dining room for self-catering, with individual fridge & food storage space. The utility area is equipped with a washing machine and tumble dryer, and the very private courtyard garden has space for bicycle storage.</h5>
        </v-flex>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2 class="mb-5">
          <v-container grid-list-xl>
            <v-carousel class="prop-carousel" hide-delimiters :class="[$vuetify.breakpoint.xs ? 'carousel--small' : '']">
              <v-carousel-item v-for="(img,i) in property.images" v-bind:src="img" :key="i"></v-carousel-item>
            </v-carousel>
          </v-container>
        </v-flex>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2>
          <hr class="mt-5">
        </v-flex>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2>
          <h2 class="page-header mt-5" :class="[$vuetify.breakpoint.xs ? 'display-2' : 'display-3']">Central Location</h2>
          <h5 class="headline thin mt-2">61 Coronation street is situated on a quiet side street just of Hills Road, and is less than a 10-minute walk from both City Centre and the train station.</h5>
        </v-flex>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2>
          <v-container grid-list-xl>
            <div class="gmap mt-5"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d604.1611256696611!2d0.125989173246757!3d52.196844422990615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8709bfc2ff1bd%3A0x81a079e17e85e46d!2s61+Coronation+St%2C+Cambridge+CB2+1HJ!5e0!3m2!1sen!2suk!4v1510417780858" width="100%" :height="height" frameborder="0" style="border:0" allowfullscreen></iframe></div>
          </v-container>
        </v-flex>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2>
          <hr class="mt-5">
        </v-flex>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2>
          <h2 class="page-header mt-5" :class="[$vuetify.breakpoint.xs ? 'display-2' : 'display-3']">Stunning Rooms</h2>
          <h5 class="headline thin mt-2">Following our complete renovation of the appealing late Victorian house, we were keen to give each room an individual feel and personality, whilst retaining the original character</h5>
        </v-flex>
      </v-layout>
      <property :rooms="rooms"/>
    </v-container>
  </div>
</template>

<script>
import Property from '~/components/Property.vue'
import {createClient} from '~/plugins/contentful.js'

const client = createClient()

export default {
  components: {
    Property
  },
  computed: {
    height () {
      if (this.$vuetify.breakpoint.smAndDown) {
        return (300)
      } else {
        return (500)
      }
    }
  },
  async asyncData ({env}) {
    let pData = await client.getEntries({'sys.id': '2ZDYujsqs8kCWamAa6aOS4'})
    let rData = await client.getEntries({
      'content_type': 'room',
      'order': 'fields.number'
    })
    const rawProperty = pData.items[0]
    const images = []
    if (rawProperty.fields.images) {
      for (const img of rawProperty.fields.images) {
        images.push('https:' + img.fields.file.url)
      }
    }
    const property = {
      id: rawProperty.fields.id,
      name: rawProperty.fields.name,
      images: images
    }
    const rooms = []
    rData.items.forEach((room) => {
      const rImages = []
      if (room.fields.houseName === property.name) {
        if (room.fields.images) {
          for (const img of room.fields.images) {
            rImages.push('https:' + img.fields.file.url)
          }
        }
        rooms.push({
          id: room.fields.id,
          name: room.fields.name,
          features: room.fields.features,
          images: images,
          titleImage: 'https:' + room.fields.titleImage.fields.file.url
        })
      }
    })
    return {
      property,
      rooms,
      heroStyle: {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: 'auto',
        width: 'auto',
        maxWidth: '100%'
      }
    }
  }
}
</script>

<style>
  .carousel--small {
    height: 300px;
  }
</style>
