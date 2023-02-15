import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import riderIcon from '../../images/icons/Emoji.png'
import Navbar from '../../components/Navbar/Navbar';
import './notification.css';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../globalVariable';
import { getToken } from '../../Utils/LoginUtils';
import { requestdata } from '../../Utils/useFetch';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/BottomNav/BottomNav';

// add language English.
TimeAgo.addDefaultLocale(en)

// Create formatter (English).
const timeAgo = new TimeAgo('en-US')


function Notification() {

    let [notifications, setNotifications] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {

        let getAccountNotification = ()=>{
            let notificationPath = '/api/get_notification';
            let notificationUrl = BASE_URL + notificationPath
            let headers={
                'Content-Type': 'application/json',
                'Authorization': `Token ${getToken()}`
            }
            let method="GET";
            let response = requestdata(notificationUrl, {'NOTHING TO PASS': true}, headers=headers,  method=method);
            response.then(res=>{
                if (res.status === 200) {
                    res.json()
                    .then(data=>{
                        console.log(data);
                        setNotifications(data.reverse())
                    })
                }
                else{
                    console.log(res.json());
                }
            })
            console.log(response);
        }

        getAccountNotification();
    }, [])

    let handleAcceptRequestRedirect = (notification)=>{
        console.log(notification    );

        if (notification.type === 'request' && notification.model) {
            return navigate(`/accept-request/${notification.model.ref}`)
        }
    }


    return (
        <>
            <Navbar transparent={false} />


            <div className='container mt-5'>
                <h1 className="text-md-center  mb-md-5" >Notification</h1>


                <div className="notifications mx-auto px-2 px-md-5 py-2 bg-white" style={{ width: "1000px", maxWidth: "100%" }}>
                    {
                        notifications.length ? notifications.map((p, index )=> {
                            return (
                                <div key={index}>

                                <div onClick={()=>handleAcceptRequestRedirect(p)} className="notification  d-flex justify-content-between justify-content-center py-2">
                                    <div className="d-flex">
            
                                        <div id="notification-icon-wrapper" className="rounded-circle d-flex justify-content-center align-items-center">
                                            <img src={riderIcon} alt="" width="40px" />
                                        </div>
                                        <div className="notification-info ms-3 ms-md-4 d-flex align-items-center">
                                            <p className="mb-0 text-capitalize">{p.message} <span className='text-dark'>🥳</span></p>
                                        </div>
                                    </div>
                                    <div className="notification-status ms-2 d-flex align-items-center">
                                        <p className="mb-0 time">{timeAgo.format(new Date(p.date_created))}</p>
                                    </div>
                                </div>
                                
                                {index !== notifications.length - 1 && <hr />     }
                                </div>
                            )
                        }) : <span className='text-center d-block'>notification empty</span>
                    }


                </div>

            </div>
            <BottomNav />
        </>
    )
}

export default Notification;