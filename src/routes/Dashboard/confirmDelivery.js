import React from 'react'
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../globalVariable';
import { getToken } from '../../Utils/LoginUtils';
import { requestdata } from '../../Utils/useFetch';

export default function ConfirmDelivery() {
    let [history, setHistory] = useState([])

    useEffect(() => {
        let getAccountHistory = ()=>{
            let historyPath = '/api/make_delivery';
            let historyUrl = BASE_URL + historyPath
            let headers={
                'Content-Type': 'application/json',
                'Authorization': `Token ${getToken()}`
            }
            let method="GET";
            let response = requestdata(historyUrl, {'NOTHING TO PASS': true}, headers=headers,  method=method);
            response.then(res=>{
                if (res.status === 200) {
                    res.json()
                    .then(data=>{
                        setHistory(data)
                        let pending = data.filter((items)=>{
                            return items.status === "pending delivery";
                        })
                        console.log(pending)
                        // console.log(data.filter(h=>h.status="pending delivery"));
                    })
                }
                else{
                    console.log(res.json());
                }
            })
        }
    
        getAccountHistory();
    }, [])
    

    return (
        
        <>
            <h1>fadf</h1>
            {
                history.filter(h=>h.status==="pending delivery").map(h=>{
                    <div className="modal" tabindex="-1" id={h.ref}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Modal title</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <p>Modal body text goes here.</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>    
                })
            }
        </>        

    )
}
