import React from 'react'
import { useState } from 'react';

export default function ConfirmDelivery(props) {
    let data = props.data
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = ()=>{

    }

    return (
        <>
            <a  onClick={handleShow} data-bs-target={"REF" + data.ref} className="text-decoration-none text-primary text-end" >{data.status}</a>
        
            <div className="modal " style={{display: (show ? "block" : "none")}} tabindex="-1" id={"REF" + data.ref}>
                <div className="modal-dialog modal-dialog-centered " style={{width: "350px", maxWidth: "100%"}}>
                    <div className="modal-content">
                        {/* <div className="modal-header border-0 mb-0">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div> */}
                        <div className="modal-body border-0 py-0">
                            <p className='text-center text-dark pt-3 pb-0 mb-0'>Received your order?</p>
                        </div>
                        <div className="modal-footer border-0 d-flex justify-content-center py-3">
                            <button type="button" className="btn btn-dark me-3" >Yes</button>
                            <button type="button" className="btn btn-dark" onClick={handleClose}>No</button>
                        </div>
                    </div>
                </div>
            </div>
        
        </>

    )
}
