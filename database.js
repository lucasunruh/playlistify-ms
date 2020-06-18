const mongoose = require('mongoose')
const connection = 'mongodb+srv://playlistifydb:playlistifypass@playlistify-uccd2.mongodb.net/playlistify?retryWrites=true&w=majority';
mongoose.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => console.log('Database Connected Successfully'))
  .catch(err => console.log(err))
