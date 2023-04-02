import React from 'react'
import { AlertContext } from '../../UserContext'
import { useContext } from 'react'

export default function Alert() {
    
    let { alert, deleteAlert} = useContext(AlertContext);
    let alertClosed = false;
    
    let closeIn2Sec = (alertId)=>{
        if (!alertClosed){
            window.setTimeout(() => {
                closeAlert(alertId);
            }, 4000);
        }
         
    }

    const closeAlert = (alertId)=> {
        alertClosed = true;
        deleteAlert(alertId);
    }

    return (
        <div className="fixed-top ms-2 p-2">
            { alert && alert.map((a) => 
                (
                    <div className={"alert alert-dismissible fade show alert-" + a.type} key={a.id} role="alert">
                        {a.message}
                        { closeIn2Sec(a.id) }
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={()=>{closeAlert(a.id)}} ></button>
                    </div>
                )
                
            )}
        </div>
        
    )
}
