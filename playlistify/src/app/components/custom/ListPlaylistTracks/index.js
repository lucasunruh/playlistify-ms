import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { apiPath } from '../../../utils/constants'
import ListPlaylistTracks from './ListPlaylistTracks'

const addATrack = (playlist, addTrack) => {
  axios.put(`${apiPath}/playlists/track/add`,
    {
      _id: playlist._id,
      id: addTrack._id,
      name: addTrack.name
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const removeTrack = (playlistId, trackId) => {
  axios.put(`${apiPath}/playlists/track/remove`,
    {
      _idPlaylist: playlistId,
      _idTrack: trackId
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const ListPlaylistTracksContainer = props => {
  const [playlist, setPlaylist] = useState([])
  const [allTracks, setAllTracks] = useState([])
  useEffect(() => {
    props.current && axios.get(`${apiPath}/playlists/${props.current}`)
      .then(res => setPlaylist(res.data))
  })
  useEffect(() => {
    axios.get(`${apiPath}/tracks`)
      .then(res => setAllTracks(res.data))
  }, [])
  return (
    <ListPlaylistTracks addATrack={addATrack} removeTrack={removeTrack} playlist={playlist} allTracks={allTracks} />
  )
}

export default ListPlaylistTracksContainer
