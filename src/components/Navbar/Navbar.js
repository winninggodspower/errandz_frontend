import errandLogo from '../../images/errandz-logo.svg';
import './navbar.css';
import { Link } from 'react-router-dom';
import { getToken } from '../../Utils/LoginUtils';
import { useLocation } from 'react-router-dom';
import { useRef, useEffect } from 'react';


const mustShowPages = ["/"]

function Navbar(props) {
    let transparent = props.transparent;
    const { pathname } = useLocation();
    const navRef = useRef();

    useEffect(() => {
        
        const setNavDisplay = ()=> {
            const { innerWidth: width } = window;
            if (width <= 650) {
                navRef.current.style.display = "none";
            }else{
                navRef.current.style.display = "block";
            }
            if (mustShowPages.find(showpage=>pathname===showpage)) {
                navRef.current.style.display = "block";
            }
        };
        setNavDisplay();
        window.onresize = setNavDisplay;


    }, [pathname])
    

    return (
        <nav ref={navRef} className={`navbar navbar-expand-md  navbar-dark w-100 navbar-fixed ${pathname === '/'? "d-blok": "babalue"}`} id={transparent?"nav-transparent":"nav-black"} aria-label="Seventh navbar example">
            <div className="container">
                
                <Link className="navbar-brand" to={'/'}>
                    <img src={errandLogo} alt="Logo"  className="d-inline-block align-text-top" />
                </Link>
                <button className="navbar-toggler border-0 " type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExampleXxl" aria-controls="navbarsExampleXxl" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExampleXxl">
                { 
                            getToken() ? <ul className="navbar-nav ms-auto text-center">
                        
                        <li className="nav-item ms-4">
                            <Link to="/dashboard" className="nav-link active text-white">Dashboard</Link>
                        </li>
                        <li className="nav-item ms-4">
                            <Link to="/notification" className="nav-link active text-white">Notifications</Link>
                        </li>
                        <li className="nav-item ms-4">
                            <Link to="/profile" className="nav-link active text-white">Profile</Link>
                        </li>
                        <li className="nav-item ms-4">
                        <Link to="/logout" className="nav-link active text-white "><i className="bi bi-box-arrow-right"></i>  Logout</Link>
                        </li>
                    </ul> :

                    <ul className="navbar-nav ms-auto text-center">
                        
                        <li className="nav-item ms-4">
                            <Link to="/about/us" className="nav-link active text-white">About</Link>
                        </li>
                        <li className="nav-item ms-4">
                            <Link to="/faq/" className="nav-link active text-white">FAQs</Link>
                        </li>
                        <li className="nav-item ms-4">
                            <Link to="/contact/us" className="nav-link active text-white">Contact</Link>
                        </li>
                        <li className="nav-item ms-4">
                        <Link to="/login" className="btn btn-transparent active text-white">Login</Link>
                        </li>
                    </ul> }
                </div>
            </div>
        </nav>
    )
}

export default Navbar;