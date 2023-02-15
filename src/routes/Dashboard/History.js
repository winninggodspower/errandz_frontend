import riderIcon from '../../images/icons/Delivery man.svg'
import { useState } from 'react';
import ConfirmDelivery from './confirmDelivery';

function History(props) {

    const data = props.data
    var dateOptions = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };
    const formatedDate = new window.Date(data.date_created).toLocaleTimeString('en-US', dateOptions);

    return (
        <div key={data.ref} >
            <div className="notification mb-5 d-flex justify-content-between justify-content-center">
                <div className="d-flex">

                    <div id="notification-icon-wrapper" className="rounded-circle d-flex justify-content-center align-items-center">
                        <img src={riderIcon} alt="" width="40px" />
                    </div>
                    <div className="notification-info d-flex flex-column justify-content-center ms-2">
                        <p className="mb-0">{data.recipient_name}</p>
                        <span>{formatedDate} * RD{data.ref.slice(0, 4)}</span>
                    </div>
                </div>
                <div className="notification-status d-flex flex-column justify-content-center ms-2">
                    <p className="mb-0 fs-6 text-end fs-4">{data.amount}</p>
                    {data.status === "payment not verified" ?
                        <a href={data.checkout_url} className="text-decoration-none text-danger" >{data.status}</a> :
                    data.status === "pending delivery" ?
                        < ConfirmDelivery data={data} />
                     :
                        <span className="text-warning text-end">{data.status}</span>
                    }
                </div>
            </div>

        </div>
    )
}

export default History;