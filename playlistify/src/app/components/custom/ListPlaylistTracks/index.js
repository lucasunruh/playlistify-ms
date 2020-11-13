import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { apiPath } from '../../../utils/constants'
import ListPlaylistTracks from './ListPlaylistTracks'

const addATrack = (current, addTrack) => {
  axios.put(`${apiPath}/playlists/track/add`,
    {
      _id: current._id,
      id: addTrack._id,
      name: addTrack.name
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const ListPlaylistTracksContainer = props => {
  const [tracks, setTracks] = useState([])
  useEffect(() => {
    axios.get(`${apiPath}/tracks`)
      .then(res => setTracks(res.data))
  })
  return (
    <ListPlaylistTracks addATrack={addATrack} tracks={tracks} {...props} />
  )
}

export default ListPlaylistTracksContainer
