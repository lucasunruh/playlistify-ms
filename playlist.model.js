const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Playlist = new Schema({
  name: {
    type: String
  },
  tracks: [{
    id: {
      type: String
    },
    name: {
      type: String
    }
  }]
})

module.exports = mongoose.model('playlists', Playlist)
