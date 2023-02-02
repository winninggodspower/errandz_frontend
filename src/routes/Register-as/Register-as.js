import "./register-as.css"
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import {Link} from "react-router-dom"
function RegisterAs(){
    return (
        <>
        <div className="as">
            <Navbar transparent={false} />
        </div>

        <div className="pad">
            <div class="container h-100 d-flex align-items-center">
        
        <div id="register-container" className="mx-auto my-4 px-3" >
            <div id="inner-content-header" className="d-flex flex-column w-100 h-100 justify-content-center align-items-center ">
                
                <h1 className="mb-3">Get started as</h1>
                <div className="mb-3 mx-auto">
                    
                    <Link to={"/register/rider"} className="btn register-button btn-lg border rounded-1" >Rider</Link>
                </div>
                
                <div className="mb-3 mx-auto">
                <Link to={"/register/customer"} className="btn register-button btn-lg border rounded-1" >Customer/Vendor</Link>
                
                </div>
            </div>
        </div>
    </div>
    </div>
    <div className="as">
    <Footer />
    </div>
    
        </>
    )
}

export default RegisterAs;