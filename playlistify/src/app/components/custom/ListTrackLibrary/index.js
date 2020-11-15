import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { apiPath } from '../../../utils/constants'
import ListPlaylistTracks from './ListTrackLibrary'

const ListTrackLibraryContainer = () => {
  const [tracks, setTracks] = useState([])
  const addTrack = trackInfo => {
    axios.post(`${apiPath}/tracks/add`,
      {
        name: trackInfo.trackName,
        album: trackInfo.albumName,
        artists: [
          {
            id: '-1',
            name: trackInfo.artistName
          }
        ]
      })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
  const deleteTrack = trackId => {
    axios.delete(`${apiPath}/tracks/delete`, { data: { _id: trackId } })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
  useEffect(() => {
    axios.get(`${apiPath}/tracks`)
      .then(res => setTracks(res.data))
  })
  return (
    <ListPlaylistTracks addTrack={addTrack} deleteTrack={deleteTrack} tracks={tracks} />
  )
}

export default ListTrackLibraryContainer
