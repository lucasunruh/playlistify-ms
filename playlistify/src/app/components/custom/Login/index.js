import React, { useState } from 'react'

const Login = ({ setIsAuth }) => {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [noAuth, setNoAuth] = useState(false)
  const checkAuth = () => {
    if (user === 'lucas' && pass === 'yeet') {
      setIsAuth(true)
    } else {
      setNoAuth(true)
    }
  }
  return (<div className='card'>
    <div className='card-header'>
      <strong>Login to Playlistify</strong>
    </div>
    <div className='card-body'>
      {noAuth && <span className='text-danger'>Nope</span>}
      <div className='form-group'>
        <label for='username'>Username</label>
        <input id='username' type='text' className='form-control' onChange={e => setUser(e.target.value)} />
      </div>
      <div className='form-group'>
        <label for='pass'>Password</label>
        <input id='pass' type='password' className='form-control' onChange={e => setPass(e.target.value)} />
      </div>
      <button className='btn btn-primary' onClick={() => checkAuth()}>Login</button>
    </div>
          </div>
  )
}

export default Login
