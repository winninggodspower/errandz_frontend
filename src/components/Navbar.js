import errandLogo from '../images/errandz-logo.svg';
import './navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark vw-100 navbar-fixed" style={{background:"transparent"}} aria-label="Seventh navbar example">
            <div className="container">
                <a className="navbar-brand" href="./home">
                    <img src={errandLogo} alt="Logo" width="134px" height="44.6" className="d-inline-block align-text-top" />
                </a>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExampleXxl" aria-controls="navbarsExampleXxl" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExampleXxl">
                    <ul className="navbar-nav ms-auto mb-2 mb-xl-0">
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
                            <Link to="/" className="nav-link active">Cont</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;