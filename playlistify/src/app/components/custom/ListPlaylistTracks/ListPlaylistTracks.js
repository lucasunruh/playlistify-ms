import React, { useState } from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

const ListPlaylistTracks = ({ tracks, addATrack, current }) => {
  const [addTrack, setAddTrack] = useState({})
  return (
    <div className='card'>
      {current.name &&
        <div className='card-header'>
          <strong>{current.name}</strong>
        </div>}
      <div className='card-body'>
        {current.name
          ? <table className='table table-hover table-striped'>
            <tbody>
              <tr key='addPlaylistTrack'>
                <td className='form-inline'>
                  <select
                    className='form-control'
                    onChange={e => {
                      setAddTrack(JSON.parse(e.target.value))
                    }}
                  >
                    <option>Choose a song to add</option>
                    {tracks && tracks.map(track => (
                      <option key={track._id} value={JSON.stringify(track)}>{track.name}</option>
                    ))}
                  </select>
                  <button
                    className='btn btn-primary ml-3'
                    onClick={() => addATrack(current, addTrack)}
                  >Add
                  </button>
                </td>
              </tr>
              {current.tracks && current.tracks.map(track => (
                <tr key={track._id} className='arrow'>
                  <td className='flex-container'>
                    {track.name}
                    <span>
                      <Icon className='pointer' icon={['far', 'trash-alt']} />
                      <Icon className='ml-2 pointer' icon='grip-lines' />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          : <span>Select a playlist to view tracks</span>}
      </div>
    </div>
  )
}

export default ListPlaylistTracks
