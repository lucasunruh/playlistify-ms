import React, { useState } from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

const ListPlaylists = ({ playlists, addPlaylist, editPlaylist, deletePlaylist, current, setCurrent }) => {
  const [playlistName, setPlaylistName] = useState('')
  const [editing, setEditing] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [editName, setEditName] = useState('')
  const [isPlaylist, setIsPlaylist] = useState('')
  const submit = () => {
    playlistName ? addPlaylist(playlistName) : setIsPlaylist(false)
    setPlaylistName('')
  }
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
                <input
                  className={`form-control ${isPlaylist === false && 'is-invalid'}`}
                  type='text' value={playlistName}
                  onChange={e => {
                    setPlaylistName(e.target.value)
                    setIsPlaylist(true)
                  }}
                  placeholder={`New Playlist ${'X'}`}
                />
                {isPlaylist === false && <div className='invalid-feedback'>Please enter a name</div>}
                <button
                  className='btn btn-primary ml-3'
                  onClick={submit}
                >
            Add
                </button>
              </td>
            </tr>
            {playlists.length > 0 ? playlists.map(playlist => (
              <tr key={playlist._id} className={`arrow ${playlist._id === current && 'table-active'}`}>
                <td className='flex-container' onClick={() => setCurrent(playlist._id)}>
                  {playlist._id === editing
                    ? (
                      <>
                        <input className='form-control' type='text' value={editName} onChange={e => setEditName(e.target.value)} />
                        <Icon
                          className='ml-3 pointer'
                          icon='check'
                          title='Submit'
                          onClick={() => {
                            editPlaylist(editName, playlist._id)
                            setEditing('')
                            setIsEditing(false)
                          }}
                        />
                        <Icon
                          className='ml-3 pointer'
                          icon='times'
                          title='Cancel'
                          onClick={() => {
                            setEditing('')
                            setIsEditing(false)
                          }}
                        />
                      </>
                    )
                    : (
                      <>
                        {playlist.name}
                        <span>
                          <Icon
                            className='ml-3 pointer'
                            icon={['far', 'edit']}
                            onClick={() => {
                              if (!isEditing) {
                                setEditing(playlist._id)
                                setEditName(playlist.name)
                                setIsEditing(true)
                              } else {
                                /* setEditing('')
                                setIsEditing(false) */
                              }
                            }}
                          />
                          <Icon
                            className='ml-3 pointer'
                            icon={['far', 'trash-alt']}
                            onClick={() => deletePlaylist(playlist._id)}
                          />
                        </span>
                      </>
                    )}
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
