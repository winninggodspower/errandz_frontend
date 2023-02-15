import React from 'react'
import { useState } from 'react';
import { BASE_URL } from '../../globalVariable';
import { getToken } from '../../Utils/LoginUtils';
import { requestdata } from '../../Utils/useFetch';


export default function ConfirmDelivery(props) {
    let data = props.data
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let handleSubmit = async (ref)=>{
        let confirmDeliveryPath = '/api/acccept_delivery_request/';
        let confirmDeliveryUrl = BASE_URL + confirmDeliveryPath
        let headers={
            'Content-Type': 'application/json',
            'Authorization': `Token ${getToken()}`,
        }
        let method="POST";
        console.log(ref)
        let response = await requestdata(confirmDeliveryUrl, {'reference': ref}, headers=headers,  method=method);
        response.then(res=>{
            if (res.status === 200) {
                res.json()
                .then(data=>{
                    console.log(data);
                })
            }
            else{
                console.log(res.json())
            }
        })
        console.log(response);
    }

    return (
        <>
            <a  onClick={handleShow} data-bs-target={"REF" + data.ref} className="text-decoration-none text-primary text-end" >{data.status}</a>
        
            <div className="modal mx-auto" style={{display: (show ? "block" : "none")}} tabindex="-1" id={"REF" + data.ref}>
                <div className="modal-dialog modal-dialog-centered " style={{width: "350px", maxWidth: "100%"}}>
                    <div className="modal-content">
                        {/* <div className="modal-header border-0 mb-0">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div> */}
                        <div className="modal-body border-0 py-0">
                            <p className='text-center text-dark pt-3 pb-0 mb-0'>Received your order?</p>
                        </div>
                        <div className="modal-footer border-0 d-flex justify-content-center py-3">
                            <button type="button" className="btn btn-dark me-3" onClick={()=>{handleSubmit(data.ref)}}>Yes</button>
                            <button type="button" className="btn btn-dark" onClick={handleClose}>No</button>
                        </div>
                    </div>
                </div>
            </div>
        
        </>

    )
}