export const state = () => ({
  sidebar: false,
  rooms: [
    { id: 'barlow', name: 'Barlow' },
    { id: 'battersby', name: 'Battersby' },
    { id: 'bishop', name: 'Bishop' },
    { id: 'duckworth', name: 'Duckworth' },
    { id: 'tanner', name: 'Tanner' },
    { id: 'tilsley', name: 'Tilsley' }
  ]
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  }
}

export const getters = {
  getRooms (state) {
    return state.rooms.sort((roomA, roomB) => {
      return roomA.name > roomB.name
    })
  },
  getRoom (state) {
    return (roomId) => {
      return state.rooms.find((room) => {
        return room.id === roomId
      })
    }
  }
}
