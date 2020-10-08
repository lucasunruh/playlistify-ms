import React, { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { faStroopwafel, faGripLines } from '@fortawesome/free-solid-svg-icons'
import Navbar from './custom/Navbar'
import ListPlaylists from './custom/ListPlaylists'
import ListPlaylistTracks from './custom/ListPlaylistTracks'
import ListTrackLibrary from './custom/ListTrackLibrary'
import './App.css'

library.add(faEdit, faTrashAlt, faStroopwafel, faGripLines)

function App () {
  const [current, setCurrent] = useState({})
  return (
    <>
      <Navbar />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xl-3 col-md-5 mt-3'>
            <ListPlaylists current={current} setCurrent={setCurrent} />
          </div>
          <div className='col-xl-4 col-md-7 mt-3'>
            <ListPlaylistTracks current={current} />
          </div>
          <div className='col-xl-5 mt-3'>
            <ListTrackLibrary />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
