import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Videocard from './Videocard';
import Allvideos from './Allvideos';
import { addCategoryApi, deleteCategoryApi, getAllCategoryApi } from '../services/allApi';
import { toast } from 'react-toastify';
function Category() {
  const [show, setShow] = useState(false);
  const [categoryName , setCategoryName] = useState('')
  const [ allCategory , setAllCategory] = useState([])
  const [addCategoryStatus, setAddCategoryStatus] = useState({})
  const [ deleteCategoryStatus , setDeleteCategoryStatus] = useState({})
  console.log(categoryName);
  
  const handleCancel=()=>{
    setCategoryName('')
  }
  const handleClose = () =>{ setShow(false);
    handleCancel()
  }
  const handleShow = () => setShow(true);
  const handleAdd = async()=>{
      if(categoryName){
        const reqBody = {
          category: categoryName,
          Allvideos:[]
        }
        const result = await addCategoryApi(reqBody)
        console.log(result);
        if(result.status>=200 && result.status<300){
          toast.success('Category added successfully')
          handleClose()
          setAddCategoryStatus(result.data)
        }else{
          toast.error('Something went wrong.')
          handleClose()
        }
      }else{
        toast.info('Please Enter a Category Name !')
      }
      
  }
  const getCategory = async()=>{
    const result = await getAllCategoryApi()
    setAllCategory(result.data)
  }
  console.log(allCategory);
  
  handleDelete = async(id)=>{
    const result = await deleteCategoryApi()
  }
 const ondrag = (e)=>{
   e.preventDefault() // it prevents dataloss
 }

 const videoDrop = (e,categoryDetails)=>{
  console.log(categoryDetails);
  console.log(e);
  
  const videoDetails = e.dataTransfer.getData('videoDetails')
  console.log(videoDetails);      
}
  useEffect(()=>{
    getCategory
  },[addCategoryStatus,deleteCategoryStatus])

  return (
    <>
    <h4>Category</h4>
    <button className='btn btn-warning w-100 mt-4' onClick={handleShow}>Add Category</button>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body><div className='p-3 border border-secondary rounded'>
          <input type="text" placeholder='Category Name' className='form-control' value={categoryName} onChange={(e)=>{setCategoryName(e.target.value)}}/>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      {allCategory?.length>0 &&
       allCategory.map((item)=>{
        <div className='border border-secondary p-3 rounded mt-5' droppable onDragOver={(e)=>ondrag(e)} onDrop={(e)=>videoDrop(e,item)}>
        <div className="d-flex justify-content-between">
          <h5>{item?.category}</h5>
          <button className='btn btn-danger mb-2' onClick={()=>handleDelete(item.id)}><FontAwesomeIcon icon={faTrash}/></button>
        </div>
        <div>{/* <Videocard/> */}</div>
      </div>
      })
        }
    </>
  )
}

export default Category