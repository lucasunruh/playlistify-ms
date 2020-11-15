import React, { useState } from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

const ListTrackLibrary = ({ tracks, addTrack, deleteTrack }) => {
  const [isTouched, setIsTouched] = useState({ track: false, album: false, artist: false })
  const [isTrack, setIsTrack] = useState('')
  const [isAlbum, setIsAlbum] = useState('')
  const [isArtist, setIsArtist] = useState('')
  const [trackName, setTrackName] = useState('')
  const [albumName, setAlbumName] = useState('')
  const [artistName, setArtistName] = useState('')
  const setValid = () => {
    !trackName && isTouched.track ? setIsTrack(false) : setIsTrack(true)
    !albumName && isTouched.album ? setIsAlbum(false) : setIsAlbum(true)
    !artistName && isTouched.artist ? setIsArtist(false) : setIsArtist(true)
  }
  const setDetails = () => {
    !trackName && setIsTrack(false)
    !albumName && setIsAlbum(false)
    !artistName && setIsArtist(false)
    if (trackName && albumName && artistName) {
      addTrack({
        trackName: trackName,
        albumName: albumName,
        artistName: artistName
      })
      setTrackName('')
      setAlbumName('')
      setArtistName('')
    }
  }
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
              <td>
                <input
                  className={`form-control ${isTrack === false && 'is-invalid'}`} type='text' value={trackName}
                  onChange={e => {
                    setTrackName(e.target.value)
                    setIsTrack(true)
                  }}
                  onBlur={setValid}
                  onFocus={() => setIsTouched({ ...isTouched, track: true })}
                  placeholder='New Track'
                />
                {isTrack === false && <div className='invalid-feedback'>Please enter a track name</div>}
              </td>
              <td>
                <input
                  className={`form-control ${isAlbum === false && 'is-invalid'}`} type='text' value={albumName}
                  onChange={e => {
                    setAlbumName(e.target.value)
                    setIsAlbum(true)
                  }}
                  onBlur={setValid}
                  onFocus={() => setIsTouched({ ...isTouched, album: true })}
                  placeholder='Album'
                />
                {isAlbum === false && <div className='invalid-feedback'>Please enter an album name</div>}
              </td>
              <td>
                <input
                  className={`form-control ${isArtist === false && 'is-invalid'}`} type='text' value={artistName}
                  onChange={e => {
                    setArtistName(e.target.value)
                    setIsArtist(true)
                  }}
                  onBlur={setValid}
                  onFocus={() => setIsTouched({ ...isTouched, artist: true })}
                  placeholder='Artist'
                />
                {isArtist === false && <div className='invalid-feedback'>Please enter an artist name</div>}
              </td>
              <td>
                <button
                  className='btn btn-primary'
                  onClick={setDetails}
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
                <td className='text-center'>
                  <Icon className='pointer' icon={['far', 'edit']} />
                  <Icon
                    className='ml-3 pointer'
                    icon={['far', 'trash-alt']}
                    onClick={() => deleteTrack(track._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListTrackLibrary
