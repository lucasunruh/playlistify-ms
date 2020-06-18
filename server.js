const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const playlistRoutes = express.Router()
require('./database')

let port = process.env.PORT
if (port == null || port === '') {
  port = 8000
}

app.use(cors())
app.use(bodyParser.json())

let Playlist = require('./playlist.model')

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

app.use('/playlists', playlistRoutes)

app.get('/', function (req, res) {
  res.send('Get root test')
})

app.listen(port, function () {
  console.log('Server is running on Port: ' + port)
})
