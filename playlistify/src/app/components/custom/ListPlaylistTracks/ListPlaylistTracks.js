import React, { useState } from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

const ListPlaylistTracks = ({ playlist, allTracks, addATrack, removeTrack }) => {
  const [addTrack, setAddTrack] = useState({})
  const [isTrack, setIsTrack] = useState('')
  const submit = (playlist, track) => {
    Object.entries(addTrack).length !== 0 ? addATrack(playlist, track) : setIsTrack(false)
    setAddTrack({})
  }
  return (
    <div className='card'>
      {playlist && playlist.name &&
        <div className='card-header'>
          <strong>{playlist.name}</strong>
        </div>}
      <div className='card-body'>
        {playlist && playlist.name
          ? <table className='table table-hover table-striped'>
            <tbody>
              <tr key='addPlaylistTrack'>
                <td className='form-inline'>
                  <select
                    className={`form-control ${isTrack === false && 'is-invalid'}`}
                    value={JSON.stringify(addTrack)}
                    onChange={e => {
                      setAddTrack(JSON.parse(e.target.value))
                      setIsTrack(true)
                    }}
                  >
                    <option value={JSON.stringify({})}>Choose a song to add</option>
                    {allTracks && allTracks.map(track => (
                      <option key={track._id} value={JSON.stringify(track)}>{track.name}</option>
                    ))}
                  </select>
                  <button
                    className='btn btn-primary ml-3'
                    onClick={() => submit(playlist, addTrack)}
                  >Add
                  </button>
                  {isTrack === false && <div className='invalid-feedback'>Please select a song</div>}
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
