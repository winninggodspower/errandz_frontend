/* eslint-disable jsx-a11y/heading-has-content */
import notificationBell from "../../images/icons/notification.svg";
import { BASE_URL } from '../../globalVariable';
import v1 from "../../images/icons/V2.svg";
import v2 from "../../images/icons/V3.svg"
import v3 from "../../images/icons/Vector.svg";
import "./dashboard.css"
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom"
import History from './History';
import { UserContext } from "../../UserContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { getToken } from "../../Utils/LoginUtils";
import { requestdata } from "../../Utils/useFetch";

function Dashboard() {
    let navigate = useNavigate();
    let { user } = useContext(UserContext)
    let [history, setHistory] = useState([])

    useEffect(()=>{
        if (!getToken()) {
            return navigate('/login');
        }
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
                        console.log(data);
                        setHistory(data)
                    })
                }
                else{
                    console.log(res.json());
                }
            })
            console.log(response);
        }

        getAccountHistory();

    }, [user, navigate])
    

    return (
        <>
            <Navbar transparent={false} />
            <div style={{ minHeight: "700px" }} className="container">
                

                <div id="profile-heading" className="d-flex justify-content-between mt-5">
                    <div className="profile">
                        <Link to={"/profile"}>   <img src={user && user.account.profile_image} id="profile-img" className="rounded-circle" alt="profile" style={{width:"100px"}} />
                        </Link> <span id="profile-name" className="fs-4 ms-3">Hi, {user && user.first_name}</span>
                    </div>
                    <div className="d-flex align-items-center mx-2">
                    <Link to={"/notification"}> <img src={notificationBell} id="notification-bell" alt="notification bell" />   </Link> 
                    </div>
                </div>
                
                {/* if statem,ent */}
                {user ? (user.account.user_type === 'rider' ?
                    <div className="rounded-3 bg-dark p-3 my-3 my-md-5 mx-auto text-light" style={{ width: "800px", maxWidth: "100%" }}>
                        <div>
                            <h5 className="fs-5 mb-0" id="wallet-text">Total Earning</h5>
                            <h4 id="wallet-price" className="fs-4"> <span className="d-sm-none">NGN</span> 2500</h4>
                        </div>

                        <div className="pb-1"></div>

                        <div className="text-end">
                            <h5 className="fs-5 mb-0" id="wallet-text">Today's Earning</h5>
                            <h4 id="wallet-price" className="fs-4"> <span className="d-sm-none">NGN</span> 400</h4>
                        </div>

                    </div> :

                    <div className="rounded-3 bg-dark p-3 my-3 my-md-5 mx-auto text-light" style={{ width: "800px", maxWidth: "100%" }}>
                        <h5 className="fs-5" id="wallet-text">Wallet Ballance</h5>
                        <h4 id="wallet-price" className="fs-4"> <span className="d-sm-none">NGN</span> 3000</h4>

                        <div className="icons d-flex justify-content-around">
                            <div className="icon d-flex flex-column align-items-center">
                               <Link to={"/delivery"} >
                                    <div className="icon-wrapper p-3 rounded-circle bg-white d-flex text-center justify-content-center" style={{ width: "50px", height: "50px" }}>
                                            <img src={v1} alt="" />
                                    </div>
                               </Link>
                                <p className="text-center text-white">Book a Ride</p>
                            </div>

                            <div className="icon d-flex flex-column align-items-center">
                                <div className="icon-wrapper p-3 rounded-circle bg-white d-flex text-center justify-content-center" style={{ width: "50px", height: "50px" }}>
                                    <img src={v2} alt="" />
                                </div>
                                <p className="text-center text-white">Top up</p>
                            </div>

                            <div className="icon d-flex flex-column align-items-center">
                                <div className="icon-wrapper p-3 rounded-circle bg-white d-flex text-center justify-content-center" style={{ width: "50px", height: "50px" }}>
                                    <img src={v3} alt="" />
                                </div>
                                <p className="text-center text-white">Add card</p>
                            </div>
                        </div>

                    </div>)
                     :
                     <div className="rounded-3 bg-dark p-3 my-3 my-md-5 mx-auto text-light" style={{ width: "800px", maxWidth: "100%", height:"150px" }}>
                        <div>
                            <h5 className="fs-5 mb-0" id="wallet-text"></h5>
                            <h4 id="wallet-price" className="fs-4"> </h4>
                        </div>

                        <div className="pb-1"></div>

                        <div className="text-end">
                            <h5 className="fs-5 mb-0" id="wallet-text"></h5>
                            <h4 id="wallet-price" className="fs-4"> </h4>
                        </div>

                    </div>


                }

                {/* end of if */}

                <div className="notifications mx-auto px-2" style={{ width: "800px", maxWidth: "100%" }}>

                    {
                        history.length ? history.map(h=><History data={h}/>) : 'empty history'
                    }
                    
                </div>

            </div>
        </>
    );
}

export default Dashboard;