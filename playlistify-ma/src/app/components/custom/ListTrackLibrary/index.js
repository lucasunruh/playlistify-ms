import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { apiPath } from '../../../../constants'
import ListPlaylistTracks from './ListTrackLibrary'

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

const ListTrackLibraryContainer = props => {
  const [tracks, setTracks] = useState([])
  useEffect(() => {
    axios.get(`${apiPath}/tracks`)
      .then(res => setTracks(res.data))
  }, [])
  return (
    <ListPlaylistTracks addATrack={addTrack} tracks={tracks} />
  )
}

export default ListTrackLibraryContainer
