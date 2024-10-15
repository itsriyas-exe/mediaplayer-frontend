import { faFilm, faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addVideoApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({ setAddVideoStatus }) {
  const [videoDetails, setVideoDetails] = useState({
    caption: '',
    thumpnail: '',
    vidUrl: ''
  })
  const [show, setShow] = useState(false);
  console.log(videoDetails);

  const handleClose = () => {
    setShow(false);
    handleCancel()
  }
  const handleShow = () => setShow(true);
  const handleCancel = () => {
    setVideoDetails({
      caption: '',
      thumpnail: '',
      vidUrl: ''
    })
  }

  const handleAdd = async () => {
    const { caption, thumpnail, vidUrl } = videoDetails

    if (!caption || !thumpnail || !vidUrl) {
      toast.info('Please fill the form completely')
    } 
    else {
      if (videoDetails.vidUrl.startsWith('https://youtu.be/')) {
        const embedL = `https://www.youtube.com/embed/${videoDetails.vidUrl.slice(17, 28)}`
        /* setVideoDetails({...videoDetails,vidUrl:embedL}) */
        const result = await addVideoApi({ ...videoDetails, vidUrl: embedL })
        console.log(result);
        if (result.status >= 200 && result.status <= 300) {
          toast.success('Video uploaded successfully.')
          handleClose()
          setAddVideoStatus(result.data)
        } else {
          toast.error('Something went wrong !')
          handleClose()
        }
      } 
      else {
        const embedL = `https://www.youtube.com/embed/${videoDetails.vidUrl.slice(-11)}`
        /* setVideoDetails({...videoDetails,vidUrl:embedL}) */
        const result = await addVideoApi({ ...videoDetails, vidUrl: embedL })
        console.log(result);
        if (result.status >= 200 && result.status <= 300) {
          toast.success('Video uploaded successfully.')
          handleClose()
          setAddVideoStatus(result.data)
        } else {
          toast.error('Something went wrong !')
          handleClose()
        }
      }
    }
  }
  return (
    <>
      <div className='d-flex align-items-center'>
        <h5><span className='d-none d-md-inline' >Upload New Video</span ></h5>
        <button className='btn pb-3' onClick={handleShow}><FontAwesomeIcon icon={faUpload} className='fs-5' /></button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm} />&nbsp;<span className='d-none d-md-inline'>Upload Videos</span></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Please fill the form</p>
            <form className='p-3 border border-secondary rounded'>
              <div className='mb-3'>
                <input type="text" placeholder='Video caption' value={videoDetails.caption} className='form-control' onChange={(e) => setVideoDetails({ ...videoDetails, caption: e.target.value })} />
              </div>
              <div className='mb-3'>
                <input type="text" placeholder='Thumpnail' value={videoDetails.thumpnail} className='form-control' onChange={(e) => setVideoDetails({ ...videoDetails, thumpnail: e.target.value })} />
              </div>
              <div className='mb-3'>
                <input type="text" placeholder='Video Url' value={videoDetails.vidUrl} className='form-control' onChange={(e) => setVideoDetails({ ...videoDetails, vidUrl: e.target.value })} />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant="warning" onClick={handleAdd}>
              Upload
            </Button>
          </Modal.Footer>
        </Modal>
        <ToastContainer position='top-right' autoClose={2000} theme='dark' />
      </div>
    </>
  )
}

export default Add