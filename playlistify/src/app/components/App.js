import React, { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { faStroopwafel, faGripLines, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import Navbar from './custom/Navbar'
import Login from './custom/Login'
import ListPlaylists from './custom/ListPlaylists'
import ListPlaylistTracks from './custom/ListPlaylistTracks'
import ListTrackLibrary from './custom/ListTrackLibrary'
import '../styles/App.css'

library.add(faEdit, faTrashAlt, faStroopwafel, faGripLines, faCheck, faTimes)

function App () {
  const [current, setCurrent] = useState('')
  const [isAuth, setIsAuth] = useState(true) // false to display login
  return (
    <>
      <Navbar />
      <div className='container-fluid'>
        {isAuth
          ? (<div className='row'>
            <div className='col-xl-3 col-md-5 mt-3'>
              <ListPlaylists current={current} setCurrent={setCurrent} />
            </div>
            <div className='col-xl-4 col-md-7 mt-3'>
              <ListPlaylistTracks current={current} />
            </div>
            <div className='col-xl-5 mt-3'>
              <ListTrackLibrary />
            </div>
             </div>)
          : (<div className='row justify-content-center'>
            <div className='col-4 mt-3'>
              <Login setIsAuth={setIsAuth} />
            </div>
             </div>)}
      </div>
    </>
  )
}

export default App
