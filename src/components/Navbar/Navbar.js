import errandLogo from '../../images/errandz-logo.svg';
import './navbar.css';
import { Link } from 'react-router-dom';
import { getToken } from '../../Utils/LoginUtils';

function Navbar(props) {
    let transparent = props.transparent;

    return (
        <nav className="navbar navbar-expand-md  w-100 navbar-fixed" id={transparent?"nav-transparent":"nav-black"} aria-label="Seventh navbar example">
            <div className="container">
                
                <Link className="navbar-brand" to={'/'}>
                    <img src={errandLogo} alt="Logo"  className="d-inline-block align-text-top" />
                </Link>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExampleXxl" aria-controls="navbarsExampleXxl" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExampleXxl">
                    <ul className="navbar-nav ms-auto text-center">
                        
                        <li className="nav-item ms-4">
                            <Link to="/" className="nav-link active text-white">About</Link>
                        </li>
                        <li className="nav-item ms-4">
                            <Link to="/" className="nav-link active text-white">FAQs</Link>
                        </li>
                        <li className="nav-item ms-4">
                            <Link to="/" className="nav-link active text-white">Contact</Link>
                        </li>
                        <li className="nav-item ms-4">
                            { 
                            getToken() ? 
                            <Link to="/profile" className="btn btn-light  ">profile</Link> :
                             <Link to="/login" className="btn btn-light  ">Login</Link>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;