import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <Link to={'/'}><div className='d-flex'><img src="/wn.png" alt="" style={{width:200,marginLeft:80,marginTop:30}}/></div></Link>
    </>
  )
}

export default Header