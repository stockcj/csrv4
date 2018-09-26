<template>
  <div>
    <v-layout :style="[heroStyle, {backgroundImage: 'url(' + property.titleImage + ')'}]" column align-center v-scroll="onScroll">
      <v-flex xs12>
        <img src="/csrlogo1.svg" alt="Cambridge Serviced Rooms" class="mt-5 mb-5 hidden-sm-and-up" style="height:200px;"/>
        <img src="/csrlogo1.svg" alt="Cambridge Serviced Rooms" class="mt-5 mb-5 hidden-xs-only" style="height:400px;"/>
      </v-flex>
    </v-layout>
    <v-container fluid grey lighten-3>
      <v-layout column class="mt-3">
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2>
          <h1 class="page-header mt-5" :class="[$vuetify.breakpoint.xs ? 'display-3 thin' : 'display-4']">Fair Street</h1>
          <h3 class="thin mt-5 mb-5" :class="[$vuetify.breakpoint.xs ? 'display-1' : 'display-2']">With its great location, No. 5 Fair Street is adjacent to Midsummer Common, and minutes from the historic City Centre. This property is perfect for visiting academics looking for a high quality, tranquil place to study and stay.</h3>
          <hr>
        </v-flex>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2>
          <h2 class="page-header mt-5" :class="[$vuetify.breakpoint.xs ? 'display-2' : 'display-3']">The Property</h2>
          <h5 class="headline thin mt-2">Very recently refurbished to a very high standard, with comfortable rooms, each one having an en suite shower room.</h5>
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
          <h5 class="headline thin mt-2">Fair Street is in an ideal location for those visiting the City. The luxury serviced rooms and are a few minutes walk from the historic City Centre.</h5>
        </v-flex>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2>
          <v-container grid-list-xl>
            <div class="gmap mt-5"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d864.43172847973!2d0.12877562045421104!3d52.20737190174702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d87093d3c37cd5%3A0x8b2ded7c7b16590c!2s5+Fair+St%2C+Cambridge+CB1+1HA!5e0!3m2!1sen!2suk!4v1510418216181" width="100%" :height="height" frameborder="0" style="border:0" allowfullscreen></iframe></div>
          </v-container>
        </v-flex>
        <v-flex  xs12 sm10 offset-sm1 md8 offset-md2>
          <hr class="mt-5">
        </v-flex>
        <v-flex  xs12 sm10 offset-sm1 md8 offset-md2>
          <h2 class="page-header mt-5" :class="[$vuetify.breakpoint.xs ? 'display-2' : 'display-3']">Stunning rooms</h2>
          <h5 class="headline thin mt-2">Following our very recently completed renovation of this lovely three storey Victorian house we have created a lovely space, with each room having their own personality.</h5>
        </v-flex>
      </v-layout>
      <property :rooms="rooms"/>
    </v-container>
    <v-fab-transition>
      <v-btn
        to="/contact"
        fixed
        bottom
        right
        round
        color="camblue"
        v-show="!hidden"
      >
        Contact Us
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script>
import Property from '~/components/Property.vue'
import {createClient} from '~/plugins/contentful.js'

const client = createClient()

export default {
  data () {
    return {
      offSetTop: 0,
      hidden: true
    }
  },
  head () {
    return {
      title: 'Cambridge Serviced Rooms - Fair Street'
    }
  },
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
  methods: {
    onScroll (e) {
      this.offSetTop = window.pageYOffset || document.documentElement.scrollTop
      if (this.offSetTop > 200) {
        this.hidden = false
      } else {
        this.hidden = true
      }
    }
  },
  async asyncData ({env}) {
    let pData = await client.getEntries({'sys.id': '64TgC24DxmmWEQcSIQCUGi'})
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
      titleImage: 'https:' + rawProperty.fields.titleImage.fields.file.url,
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
          description: room.fields.description,
          cost: room.fields.cost,
          houseId: room.fields.houseId,
          houseName: room.fields.houseName,
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