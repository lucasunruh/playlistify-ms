import React, { useState } from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

const ListTrackLibrary = ({ tracks, addTrack }) => {
  const [trackName, setTrackName] = useState('')
  const [albumName, setAlbumName] = useState('')
  const [artistName, setArtistName] = useState('')
  return (
    <div className='card'>
      <div className='card-header'>
        <strong>Track Library</strong>
      </div>
      <div className='card-body'>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th scope='col'>Track</th>
              <th scope='col'>Album</th>
              <th scope='col'>Artist</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr key='addTrack'>
              <td><input className='form-control' type='text' value={trackName} onChange={e => setTrackName(e.target.value)} placeholder='New Track' /></td>
              <td><input className='form-control' type='text' value={albumName} onChange={e => setAlbumName(e.target.value)} placeholder='Album' /></td>
              <td><input className='form-control' type='text' value={artistName} onChange={e => setArtistName(e.target.value)} placeholder='Artist' /></td>
              <td>
                <button
                  className='btn btn-primary'
                  onClick={() => addTrack({
                    trackName: trackName,
                    albumName: albumName,
                    artistName: artistName
                  })}
                >
            Add
                </button>
              </td>
            </tr>
            {tracks && tracks.map(track => (
              <tr key={track._id} className='arrow'>
                <td>{track.name}</td>
                <td>{track.album}</td>
                <td>{track.artists[0].name}</td>
                <td className='text-center'><Icon className='pointer' icon={['far', 'edit']} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListTrackLibrary
