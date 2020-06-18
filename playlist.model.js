const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Playlist = new Schema({
  playlist_name: {
    type: String
  },
  playlist_tracks: [{
    track_id: {
      type: String
    },
    track_name: {
      type: String
    }
  }]
})

module.exports = mongoose.model('playlists', Playlist)
