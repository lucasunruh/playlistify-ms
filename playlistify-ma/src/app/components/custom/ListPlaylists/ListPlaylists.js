import React, { useState } from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

const ListPlaylists = ({ playlists, addPlaylist, current, setCurrent }) => {
  const [playlistName, setPlaylistName] = useState('')
  return (
    <div className='card'>
      <div className='card-header'>
        <strong>Playlists</strong>
      </div>
      <div className='card-body'>
        <table className='table table-hover'>
          <tbody>
            <tr key='addPlaylist'>
              <td className='form-inline'>
                <input className='form-control' type='text' value={playlistName} onChange={e => setPlaylistName(e.target.value)} placeholder={`New Playlist ${'X'}`} />
                <button
                  className='btn btn-primary ml-3'
                  onClick={() => addPlaylist(playlistName)}
                >
            Add
                </button>
              </td>
            </tr>
            {playlists.length > 0 ? playlists.map(playlist => (
              <tr key={playlist._id} className={`arrow ${playlist._id === current._id && 'table-active'}`}>
                <td className='flex-container' onClick={() => setCurrent(playlist)}>
                  {playlist.name}
                  <Icon className='ml-3 pointer' icon={['far', 'edit']} />
                </td>
              </tr>
            ))
              : <><span>Loading Playlists...</span>
                <Icon icon='stroopwafel' spin size='3x' />
                </>}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListPlaylists
