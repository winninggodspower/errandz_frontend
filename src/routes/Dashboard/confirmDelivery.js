import React from 'react'

export default function confirmDelivery(props) {
    let data = props.data
    let id = "REF" + data.ref
    console.log(id);
    let handleSubmit = ()=>{

    }
    return (
        
            <div className="modal" tabindex="-1" id={id} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" style={{maxWidth: "350px"}}>
                    <div className="modal-content">
                        <div className="modal-header border-0 mb-0">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body border-0 py-0">
                            <p className='text-center text-dark pb-0 mb-0'>Received your order?</p>
                        </div>
                        <div className="modal-footer border-0 d-flex justify-content-center py-3">
                            <button type="button" className="btn btn-dark me-3" onClick={handleSubmit}>Yes</button>
                            <button type="button" className="btn btn-dark" data-bs-dismiss="modal">No</button>
                        </div>
                    </div>
                </div>
            </div>
        

    )
}
