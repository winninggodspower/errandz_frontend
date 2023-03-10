import React, { useState } from 'react';
import { BASE_URL } from '../../globalVariable';

export default function RiderDetailDashboard({ rider, sideText}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
        
        <a data-bs-target={rider.account.id} onClick={handleShow} className="text-decoration-none">
            <span>{sideText}</span>
        </a>


        <div className="modal" style={{display: (show ? "block" : "none")}} tabindex="-1" id={rider.account.id}>
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Rider Details</h5>
                    <button onClick={handleClose} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body px-4 px-md-5">
                    <div className='text-center'>
                        <img className="rounded-circle mx-auto" src={BASE_URL + rider.account.profile_image} alt="profile " style={{ width: "100px", height: "100px" }} />
                    </div>
                    <div className='d-flex justify-content-between'>
                        Name: 
                        <span className='text-dark'>{`${rider.first_name} ${rider.last_name}`}</span>
                    </div>
                    <div className='d-flex justify-content-between'>
                        Phone: 
                        <a href={`tel: ${rider.account.phone}`} className="text-decoration-none">
                            {rider.account.phone}
                        </a>
                    </div>
                    <div className='d-flex justify-content-between'>
                        Email:
                        <span className='text-dark'>{rider.account.email}</span>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Close</button>
                </div>
                </div>
            </div>
        </div>

    </div>
  )
}
