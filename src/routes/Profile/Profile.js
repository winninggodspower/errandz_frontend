import React, { useContext, useEffect} from "react"
import "./profile.css"
import Email from "../../image/Email.svg"
import Home from "../../image/Home.svg"
import Exit from "../../image/Exit.svg"
import Ellipse from "../../image/Ellipse.png"
import Navbar from "../../components/Navbar/Navbar"
import { getToken } from "../../Utils/LoginUtils"

import { Link , useNavigate} from "react-router-dom"
import { UserContext } from "../../UserContext";

function Profile() {
    let navigate = useNavigate();
    let { user } = useContext(UserContext)
    
    useEffect(()=>{
        if (!getToken()) {
            return navigate('/login');
        }
    }, [user, navigate])


    return (
        <>
            <Navbar transparent={false} />
            <div style={{ minHeight: "700px" }}>
                <div className="container mx-auto" style={{ maxWidth: "800px" }}>

                    <div className="mt-5 d-flex flex-column flex-md-row">
                        <img className="rounded-circle mx-auto mx-2 mx-md-0" id="profile-img" src={Ellipse} alt="profile " style={{ width: "100px", height: "100px" }} />
                        <div className="align-self-center ms-0 ms-md-4 text-center text-md-start">
                            <p id="username" className="mb-0 fw-md-semibold mt-2">{user && user.first_name}</p>
                            <p id="phone" className="mb-0 mt-1">{user && user.account.phone}</p>
                        </div>
                    </div>

                    <div className="user-info ms-4 mt-5">
                        <div className="info d-flex align-items-center mt-3">
                            <img src={Email} style={{ width: "30px" }} alt="email icon" />
                            <span className="ms-3 ms-md-4 ">{ user && user.account.email }</span>
                        </div>

                        <div className="info d-flex align-items-center mt-3">
                            <img src={Home} style={{ width: "30px" }} alt="" />
                            <span className="ms-3 ms-md-4 ">Home Address</span>
                        </div>
                    </div>

                    <div className="exit-wrapper ms-4">
                        <hr className="my-4" />
                        <div className="exit-container mt-3">
                            <img src={Exit} style={{ width: "30px" }} alt="exit text" />
                            <Link to={"/logout"}><span className="ms-3 ms-md-4">Log Out</span></Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Profile