import React from 'react'
import { AlertContext } from '../../UserContext'
import { useContext } from 'react'

export default function Alert() {
    
    let { alert, deleteAlert} = useContext(AlertContext)

    return (
        <div className="fixed-top ms-2 p-2">
            { alert && alert.map((a) => 
                (
                    <div className={"alert alert-dismissible fade show alert-" + a.type} key={a.id} role="alert">
                        {a.message}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={()=>{deleteAlert(a.id)}} ></button>
                    </div>
                )
            )}
        </div>
        
    )
}
