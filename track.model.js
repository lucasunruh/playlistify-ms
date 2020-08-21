const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Track = new Schema({
  name: {
    type: String
  },
  album: {
    type: String
  },
  artists: [{
    id: {
      type: String
    },
    name: {
      type: String
    }
  }]
})

module.exports = mongoose.model('tracks', Track)
