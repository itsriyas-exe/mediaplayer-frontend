import { faHome, faHouse, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryVideo, getAllVideoHistory } from '../services/allApi'

function Watchhistory() {
  const [allHisVideos , setallHisVideos] = useState([])
  const [deleteStatus, setDeleteStatus] = useState(false)

  const getAllHistoryVideos = async()=>{
    const result = await getAllVideoHistory()
    setallHisVideos(result.data)
  }
console.log(allHisVideos);

const handleDelete = async(id)=>{
  const result =await deleteHistoryVideo(id)
  console.log(result);
  if(result.status>=200 && result.status<300){
    setDeleteStatus(true)
  }
  
}

  useEffect(()=>{
    getAllHistoryVideos()
    setDeleteStatus(false)
  },[deleteStatus])
  return (
    <div className='container p-4'>
      <div className="d-flex mt-5">
      <h5>Watch History</h5>
      <Link to={'/home'} style={{textDecoration:'none'}} className='ms-auto'><h5><FontAwesomeIcon icon={faHouse} />&nbsp;<span className='d-none d-md-inline'>Back Home</span></h5></Link>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-1'></div>
          <div className='col-md-10 p-3 table-responsive'>
            {allHisVideos?.length>0?<table className='table mt-5'>
              <thead>
                <tr>
                  <th>SI no</th>
                  <th>Caption</th>
                  <th>Url</th>
                  <th>Time stamp</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {allHisVideos?.map((item,index)=>(
                           <tr>
                           <td>{index+1}</td>
                           <td>{item?.caption}</td>
                           <td>{item?.url}</td>
                           <td>{item?.time}</td>
                           <td><button className='btn btn-danger' onClick={()=>handleDelete(item?.id)}><FontAwesomeIcon icon={faTrash} /></button></td>
                         </tr>
                ))
                  }
              </tbody>
            </table>
            :
            <h5 className='text-center text-warning'>No watch history.</h5>}
          </div>
          <div className='col-md-1'></div>
        </div>
      </div>
      </div>
  )
}

export default Watchhistory