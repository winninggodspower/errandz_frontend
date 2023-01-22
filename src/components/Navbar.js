import errandLogo from '../images/errandz-logo.svg';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark vw-100 navbar-fixed" aria-label="Seventh navbar example">
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
                            <Link to="/" className="nav-link active">Home</Link>
                        </li>
                        <li className="nav-item ms-4">
                            <Link to="/" className="nav-link active">About</Link>
                        </li>
                        <li className="nav-item ms-4">
                            <Link to="/" className="nav-link active">FAQs</Link>
                        </li>
                        <li className="nav-item ms-4">
                            <Link to="/" className="nav-link active">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;