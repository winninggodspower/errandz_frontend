
import Ellipse8 from "../images/Ellipse8.png"
import Vector from "../images/vec.png"
import "./dashboard.css"
import v2 from "../images/icons/V2.svg"
function Dashboard() {
   

    return (
        <div id="main d-flex flex-column">
            {/* Profile data \section */}
            <div className="group65 container d-flex mt-5">
                <div className="">
                    <img className="propics-img" src={Ellipse8} width="150px" height="150px" alt="Your profile pics" />
                </div>
                <div className="groupdata flex-3 d-flex w-100 ms-4" >
                    <div className="proname">
                        <p>Hi Tumini!</p>
                    </div>
                    <div className="bell">
                    <img className="bell-img" src={Vector} alt="ding dong" width="40px" height="44.9px"/>
                    </div>
                </div>
            </div>
            {/* Wallet Board */}
            <div className="p-5">
            <div className="container mx-auto wallet text-white gap-1 d-flex flex-column">
                <div className="name">Wallet Balance</div>
                <div className="amount">3000</div>
                <div className="d-flex p-2 payway">
                    <div className=" d-flex flex-column gap-1 text-center">
                        <div className="icon d-flex mx-auto"><img src={v2} /></div>
                        <div>Book a Ride</div>
                    </div>
                    <div className=" d-flex flex-column gap-1 text-center">
                        <div className="icon d-flex mx-auto"><img src={v2} /></div>
                        <div>Top Up</div>
                    </div>
                    <div className=" d-flex flex-column gap-1 text-center">
                        <div className="icon d-flex mx-auto"><img src={v2} /></div>
                        <div>Add card</div>
                    </div>
                </div>
            </div>
            </div>
            {/* Date Section */}
            <div className="px-5 container">
                <p>10th Febuary 2015</p>
            </div>
            {/* Delivery Section */}
            {/* FIRST SECTION */}
           
        </div>
    );
}

export default Dashboard;