import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { apiPath } from '../../../../constants'
import ListPlaylists from './ListPlaylists'

const addPlaylist = playlistName => {
  axios.post(`${apiPath}/playlists/add`, { name: playlistName })
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const ListPlaylistsContainer = props => {
  const [playlists, setPlaylists] = useState([])
  useEffect(() => {
    axios.get(`${apiPath}/playlists`)
      .then(res => setPlaylists(res.data))
  }, [])
  return (
    <ListPlaylists addPlaylist={addPlaylist} playlists={playlists} {...props} />
  )
}

export default ListPlaylistsContainer
