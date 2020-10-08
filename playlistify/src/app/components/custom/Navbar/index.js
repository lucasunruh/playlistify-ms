import React from 'react'
import { Navbar as BNavbar } from 'react-bootstrap'

const Navbar = () => (
  <BNavbar bg='light' expand='lg'>
    <button className='navbar-brand nav-color border-0'>Playlistify</button>
    <BNavbar.Toggle aria-controls='basic-navbar-nav' />
    <BNavbar.Collapse id='basic-navbar-nav'>
      <div className='navbar-nav mr-auto'>
        <button className='nav-link nav-color border-0'>Home <span className='sr-only'>(current)</span></button>
      </div>
    </BNavbar.Collapse>
  </BNavbar>
)

export default Navbar
