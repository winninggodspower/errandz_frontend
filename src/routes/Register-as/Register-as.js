import "./register-as.css"
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import {Link} from "react-router-dom"
function RegisterAs(){
    return (
        <>
        <Navbar transparent={false} />
            <div class="container h-100 d-flex align-items-center">
        
        <div id="box-container" class="mx-auto my-4 px-3" >
            <div id="inner-content-header" class="d-flex flex-column w-100 h-100 justify-content-center align-items-center ">
                
                <h1 class="mb-3">Get started as</h1>
                <div class="mb-3 mx-auto">
                    
                    <Link to={"/register/rider"} className="btn register-button btn-lg border rounded-1" >Rider</Link>
                </div>
                
                <div class="mb-3 mx-auto">
                <Link to={"/register/customer"} className="btn register-button btn-lg border rounded-1" >Customer/Vendor</Link>
                
                </div>
            </div>
        </div>
    </div>
    <Footer />
        </>
    )
}

export default RegisterAs;