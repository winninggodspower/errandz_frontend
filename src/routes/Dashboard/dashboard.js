import profilePic from "../../images/Ellipse8.png"
import notificationBell from "../../images/icons/notification.svg"
import riderIcon from '../../images/icons/Delivery man.svg'
import v1 from "../../images/icons/V2.svg"; 
import v2 from "../../images/icons/V3.svg"
import v3 from "../../images/icons/Vector.svg";
import "./dashboard.module.css"
function Dashboard() {


    return (
        <div className="container">

            <div id="profile-heading" className="d-flex justify-content-between mt-5">
                <div className="profile ">
                    <img src={profilePic} id="profile-img" className="rounded-circle" alt="profile image" width="100px" />
                        <span id="profile-name" className="fs-4 ms-3">Hi, Tumini!</span>
                </div>
                <div className="d-flex align-items-center mx-2">
                    <img src={notificationBell} id="notification-bell" alt="notification bell" />
                </div>
            </div>

            <div className="rounded-3 bg-dark p-3 my-3 my-md-5 mx-auto text-light" style={{width: "800px", maxWidth: "100%"}}>
                <h5 className="fs-5" id="wallet-text">Wallet Ballance</h5>
                <h4 id="wallet-price" className="fs-4"> <span className="d-sm-none">NGN</span> 3000</h4>

                <div className="icons d-flex justify-content-around">
                    <div className="icon d-flex flex-column align-items-center">
                        <div className="icon-wrapper p-3 rounded-circle bg-white d-flex text-center justify-content-center" style={{width: "50px", height: "50px"}}>
                            <img src={v1} alt="" />
                        </div>
                        <p className="text-center text-white">Book a Ride</p>
                    </div>

                    <div className="icon d-flex flex-column align-items-center">
                        <div className="icon-wrapper p-3 rounded-circle bg-white d-flex text-center justify-content-center" style={{width: "50px", height: "50px"}}>
                            <img src={v2} alt="" />
                        </div>
                        <p className="text-center text-white">Top up</p>
                    </div>

                    <div className="icon d-flex flex-column align-items-center">
                        <div className="icon-wrapper p-3 rounded-circle bg-white d-flex text-center justify-content-center" style={{width: "50px", height: "50px"}}>
                            <img src={v3} alt="" />
                        </div>
                        <p className="text-center text-white">Add card</p>
                    </div>
                </div>

            </div>

            <div className="notifications mx-auto px-2" style={{width: "800px", maxWidth: "100%"}}>
                <div className="notification mb-5 d-flex justify-content-between justify-content-center">
                    <div className="d-flex">
                        <div id="notification-icon-wrapper" className="rounded-circle d-flex justify-content-center align-items-center">
                            <img src={riderIcon} alt="" width="40px" />
                        </div>
                        <div className="notification-info d-flex flex-column justify-content-center ms-2">
                            <p className="mb-0">Favour</p>
                            <span>12:26 PM * RD1005</span>
                        </div>
                    </div>
                    <div className="notification-status d-flex flex-column justify-content-center ms-2">
                        <p className="mb-0 fs-6 text-end fs-4">500</p>
                        <span className="text-warning">In progress</span>
                    </div>
                </div>

                <div className="notification mb-5 d-flex justify-content-between justify-content-center">
                    <div className="d-flex">
                        <div id="notification-icon-wrapper" className="rounded-circle d-flex justify-content-center align-items-center">
                            <img src={riderIcon} alt="" width="40px" />
                        </div>
                        <div className="notification-info d-flex flex-column justify-content-center ms-2">
                            <p className="mb-0">Favour</p>
                            <span>12:26 PM * RD1005</span>
                        </div>
                    </div>
                    <div className="notification-status d-flex flex-column justify-content-center ms-2">
                        <p className="mb-0 fs-6 text-end fs-4">500</p>
                        <span className="text-warning">In progress</span>
                    </div>
                </div>

                <div className="notification mb-5 d-flex justify-content-between justify-content-center">
                    <div className="d-flex">
                        <div id="notification-icon-wrapper" className="rounded-circle d-flex justify-content-center align-items-center">
                            <img src={riderIcon} alt="" width="40px" />
                        </div>
                        <div className="notification-info d-flex flex-column justify-content-center ms-2">
                            <p className="mb-0">Favour</p>
                            <span>12:26 PM * RD1005</span>
                        </div>
                    </div>
                    <div className="notification-status d-flex flex-column justify-content-center ms-2">
                        <p className="mb-0 fs-6 text-end fs-4">500</p>
                        <span className="" style={{color: "rgba(11, 108, 21, 0.6)"}}>Delivered</span>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Dashboard;