<template>
  <room :room="room"/>
</template>

<script>
import Room from '~/components/Room.vue'

import {createClient} from '~/plugins/contentful.js'

const client = createClient()

export default {
  components: {
    Room
  },
  async asyncData ({env, params}) {
    let data = await client.getEntries({
      'content_type': 'room',
      'order': 'fields.number'
    })
    let room = {}
    data.items.forEach((pageRoom) => {
      if (pageRoom.fields.id === params.id) {
        const images = []
        if (pageRoom.fields.images) {
          for (const img of pageRoom.fields.images) {
            images.push('https:' + img.fields.file.url)
          }
        }
        room = {
          id: pageRoom.fields.id,
          name: pageRoom.fields.name,
          features: pageRoom.fields.features,
          description: pageRoom.fields.description,
          cost: pageRoom.fields.cost,
          houseId: pageRoom.fields.houseId,
          houseName: pageRoom.fields.houseName,
          houseRoute: 'fair-street',
          images: images,
          titleImage: 'https:' + pageRoom.fields.titleImage.fields.file.url
        }
      }
    })
    return { room }
  }
}
</script>

<style>

</style>