import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { apiPath } from '../../../utils/constants'
import ListPlaylists from './ListPlaylists'

const addPlaylist = playlistName => {
  axios.post(`${apiPath}/playlists/add`, { name: playlistName })
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const deletePlaylist = playlistId => {
  axios.delete(`${apiPath}/playlists/delete`, { data: { _id: playlistId } })
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const ListPlaylistsContainer = props => {
  const [playlists, setPlaylists] = useState([])
  useEffect(() => {
    axios.get(`${apiPath}/playlists`)
      .then(res => setPlaylists(res.data))
  })
  return (
    <ListPlaylists addPlaylist={addPlaylist} deletePlaylist={deletePlaylist} playlists={playlists} {...props} />
  )
}

export default ListPlaylistsContainer
