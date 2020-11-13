const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const ObjectId = require('mongodb').ObjectId
const clientRoute = express.Router()
const playlistRoutes = express.Router()
const trackRoutes = express.Router()
require('./database')

let port = process.env.PORT
if (port == null || port === '') {
  port = 5000
}

app.use(cors())
app.use(bodyParser.json())

let Playlist = require('./playlist.model')
let Track = require('./track.model')

playlistRoutes.route('/').get(function (req, res) {
  Playlist.find(function (err, playlists) {
    if (err) {
      console.log(err)
    } else {
      res.json(playlists)
    }
  })
})

playlistRoutes.route('/add').post(function (req, res) {
  let playlist = new Playlist(req.body)
  playlist.save()
    .then(playlist => {
      res.status(200).json({ 'playlist': 'Playlist added successfully' })
    })
    .catch(err => {
      res.status(400).send('Adding new playlist failed with message ' + err)
    })
})

playlistRoutes.route('/delete').delete(function (req, res) {
  Playlist.deleteOne({_id: ObjectId(req.body._id)})
    .then(playlist => {
      res.status(200).json({ 'playlist': 'Playlist deleted successfully' })
    })
    .catch(err => {
      res.status(400).send('Adding new track failed with message ' + err)
    })
})

playlistRoutes.route('/track/add').put(function (req, res) {
  Playlist.updateOne(
    {_id: ObjectId(req.body._id)},
    { $push: {
      tracks: {
        id: req.body.id,
        name: req.body.name
      }
    }}
  )
    .then(playlist => {
      res.status(200).json({ 'track': 'Track added successfully' })
    })
    .catch(err => {
      res.status(400).send('Adding new track failed with message ' + err)
    })
})

trackRoutes.route('/').get(function (req, res) {
  Track.find(function (err, tracks) {
    if (err) {
      console.log(err)
    } else {
      res.json(tracks)
    }
  })
})

trackRoutes.route('/add').post(function (req, res) {
  let track = new Track(req.body)
  track.save()
    .then(track => {
      res.status(200).json({ 'track': 'Track added successfully' })
    })
    .catch(err => {
      res.status(400).send('Adding new track failed with message ' + err)
    })
})

clientRoute.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../playlistify/build/index.html'));
});
app.use(express.static('playlistify/build'))

app.use('/playlists', playlistRoutes)
app.use('/tracks', trackRoutes)
app.use('/', clientRoute)

/* app.get('/', function (req, res) {
  res.send('Get root test')
}) */

app.listen(port, function () {
  console.log('Server is running on Port: ' + port)
})
