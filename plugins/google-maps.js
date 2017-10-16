import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps/src/main'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAJeJexLvVsCC6WeW-yTV1nut8VnNACgXg',
    libraries: 'places'
  }
})
