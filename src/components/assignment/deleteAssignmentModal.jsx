import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import congrats from '../../assets/img/assignment/congrats.svg';
import { useNavigate } from 'react-router-dom';
import { deleteBackend } from '../../utils/backendCalls';
import { getToken } from '../../utils/localstorage';
import { token } from '../../utils/config';
function DeleteAsignmentModal({modal,toggleModal,assignment,reload}) {
  const navigate = useNavigate();
  const [deleting,setDeleting] =useState(false);



  const handleDeleteAssignment=async()=>{
    try{
        setDeleting(true)

      let url = `/user/lecturer/asignment/${assignment.id}`

     
      let response = await deleteBackend(url,getToken(token.lecturerTokenKey))
      console.log(response)
      if(response.status === 200){
       
        setDeleting(false)
        reload()
        
       
      }
      
    }
    catch(err){
      console.log(err)
    }
  }


  return (
    <div className={`backdrop ${modal ? 'show' : ''}`}>
      <div className="modal fade show open-modal justify-content-center" id="modalDefault" role="dialog" aria-modal="true" style={{ display: 'flex', marginTop: '400px' }}>
        <div className="modal-dialog" style={{ width: '100%' }} role="document">
          <div className="modal-content mt-5" style={{ position: 'relative' }}>
            <div className="modal-header px-2">
              <h46 className="modal-title py-2">Delete Assignment {assignment.title}</h46>
              <button className="btn-close" onClick={toggleModal} type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body px-2 d-flex py-4 ">
              <p className="text-danger">Are you  sure you want to delete it  ?</p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary btn-sm" onClick={toggleModal} type="button" data-bs-dismiss="modal">Cancel</button>
              {
                deleting?
                <button className="btn btn-danger btn-shadow btn-sm" type="button">                         <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Delete</button>

                :
                <button className="btn btn-danger btn-shadow btn-sm" onClick={handleDeleteAssignment} type="button">                         <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Delete</button>


              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default DeleteAsignmentModal;
