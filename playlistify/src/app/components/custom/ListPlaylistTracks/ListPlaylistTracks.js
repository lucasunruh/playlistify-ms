import React, { useState } from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

const ListPlaylistTracks = ({ playlist, allTracks, addATrack, removeTrack }) => {
  const [addTrack, setAddTrack] = useState({})
  return (
    <div className='card'>
      {playlist.name &&
        <div className='card-header'>
          <strong>{playlist.name}</strong>
        </div>}
      <div className='card-body'>
        {playlist.name
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
                    {allTracks && allTracks.map(track => (
                      <option key={track._id} value={JSON.stringify(track)}>{track.name}</option>
                    ))}
                  </select>
                  <button
                    className='btn btn-primary ml-3'
                    onClick={() => addATrack(playlist, addTrack)}
                  >Add
                  </button>
                </td>
              </tr>
              {playlist.tracks && playlist.tracks.map(track => (
                <tr key={track._id} className='arrow'>
                  <td className='flex-container'>
                    {track.name}
                    <span>
                      <Icon
                        className='pointer'
                        icon={['far', 'trash-alt']}
                        onClick={() => removeTrack(playlist._id, track._id)}
                      />
                      {/* <Icon className='ml-2 pointer' icon='grip-lines' /> */}
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
