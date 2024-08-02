import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import congrats from '../../assets/img/assignment/congrats.svg';
import { useNavigate } from 'react-router-dom';

function CongratsEditModal({ modal ,toggleModal }) {
  const navigate = useNavigate();
  const toggleModalSuccess=()=>{
    toggleModal();
    navigate('/lecturer/view/assignments', { replace: true });
  }

 

  return (
    <div className={`backdrop ${modal ? 'show' : ''}`}>
      <div className="modal fade show open-modal justify-content-center" id="modalDefault" role="dialog" aria-modal="true" style={{ display: 'flex', marginTop: '400px' }}>
        <div className="modal-dialog" style={{ width: '100%' }} role="document">
          <div className="modal-content mt-5" style={{ position: 'relative' }}>
            <div className="modal-header px-2">
              <h4 className="modal-title py-2">Success</h4>
              <button className="btn-close" onClick={toggleModalSuccess} type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body px-2 d-flex justify-content-center flex-column align-items-center">
              <img src={congrats} alt="Congrats" width="200px" height="200px" />
              <p className="text-success"> Assignment Edited Successfully </p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary btn-sm" onClick={toggleModalSuccess} type="button" data-bs-dismiss="modal">OK</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default CongratsEditModal;
