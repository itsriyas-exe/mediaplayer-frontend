import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { getVideosApi } from '../services/allApi'

function Allvideos({addVideoStatus}) {

    const [Allvideos,setAllVideos] = useState([])
    const [deleteVideoStatus , setDeleteVideoStatus] = useState({})
/* Side effects */
    const getAllvideo = async()=>{
        const result = await getVideosApi()
        /* console.log(result); */
        setAllVideos(result.data)
        
    }
    console.log(Allvideos);
    
/* To handle sideeffects */
    useEffect(()=>{
        getAllvideo()
    },[addVideoStatus,deleteVideoStatus]) /* [] UseEffect is called when the component render to the browser */
  return (
    <>
    <h4>Allvideos</h4>
    {/* Added videos */}
   { Allvideos.length>0?
    
    <div className="container">
        <div className="row">
            {Allvideos.map((item)=>(<div className="col-md-3 p-2">
                <Videocard video={item} setDeleteVideoStatus={setDeleteVideoStatus}/>
            </div>))
            }
        </div>
    </div>

    :

    <div className="container">
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
                <img src="https://gilgit.app/_next/static/media/no-items-found.acefb40a.gif" alt="nothing to show" className='w-100' />
                <p className='text-center text-secondary'>No video added yet.</p>
            </div>
            <div className="col-md-4"></div>
        </div>
    </div>
    
    }
    </>
  )
}

export default Allvideos