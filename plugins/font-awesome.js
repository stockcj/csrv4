import Vue from 'vue'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import {library, dom} from '@fortawesome/fontawesome-svg-core'
import {faHeart, faLightbulb} from '@fortawesome/free-regular-svg-icons'
import {faMapPin, faPoundSign} from '@fortawesome/free-solid-svg-icons'

library.add(faHeart, faLightbulb, faMapPin, faPoundSign)
dom.watch()
Vue.component('font-awesome-icon', FontAwesomeIcon)
