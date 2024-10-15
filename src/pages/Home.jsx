import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Allvideos from '../components/Allvideos'
import Category from '../components/Category'
function Home() {
  const [addVideoStatus,setAddVideoStatus] = useState({})
  return (
    <>
     <div className='d-flex p-md-5 p-3 align-items-center'>
      <Add setAddVideoStatus={setAddVideoStatus}/>
      <Link to={'/watchhistory'} className='ms-auto ' style={{textDecoration:'none'}}><h5><span className='d-none d-md-inline'>Watch history</span>&nbsp;<FontAwesomeIcon icon={faClockRotateLeft} className='ms-2'/></h5></Link>
     </div>

     <div className='container-fluid p-4'>
      <div className='row'>
        <div className='col-md-9'>
          <Allvideos addVideoStatus={addVideoStatus} />
        </div>
        <div className='col-md-3'>
          {/* <Category/> */}
        </div>
      </div>
     </div>
    </>
  )
}

export default Home