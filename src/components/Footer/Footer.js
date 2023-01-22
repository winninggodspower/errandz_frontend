import ErrandzLogo from '../../images/errandz-logo.svg';
import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {

    return (
        <footer className="py-5">

            <div className="row container mx-auto justify-content-between mb-5 mb-md-2">

                {/* <!--ERRANZ LOGO ET TEXT--> */}
                <div  className="col-12 col-sm-6">
                    <img src={ErrandzLogo} alt="errandz logo" className="img-fluid" height="140px" width="200px" />
                    <p>
                        Fast and easy, eco-friendly way to make your deliveries.
                    </p>
                </div>

                {/* <!--FOOTER LINKS--> */}
                <div className="col-12 col-sm row row-col-3">
                    
                    <div class="col">
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><Link to={'/'} class="nav-link active p-0 ">Home</Link></li>
                            <li class="nav-item mb-2"><Link to={'/'} class="nav-link p-0 ">About</Link></li>
                            <li class="nav-item mb-2"><Link to={'/'} class="nav-link p-0 ">Contact</Link></li>
                            <li class="nav-item mb-2"><Link to={'/'} class="nav-link p-0 ">FAQs</Link></li>
                        </ul>
                    </div>

                    <div class="col">
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><Link to={'/'} class="nav-link active p-0 ">Licence</Link></li>
                            <li class="nav-item mb-2"><Link to={'/'} class="nav-link p-0 ">Privacy Policy</Link></li>
                            <li class="nav-item mb-2"><Link to={'/'} class="nav-link p-0 ">Copyright</Link></li>
                            <li class="nav-item mb-2"><Link to={'/'} class="nav-link p-0 ">Email</Link></li>
                        </ul>
                    </div>

                    <div class="col">
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><Link to={'/'} class="nav-link active p-0 ">Socials</Link></li>
                            <li class="nav-item mb-2"><Link to={'/'} class="nav-link p-0 ">Twitter</Link></li>
                            <li class="nav-item mb-2"><Link to={'/'} class="nav-link p-0 ">Instagram</Link></li>
                            <li class="nav-item mb-2"><Link to={'/'} class="nav-link p-0 ">Facebook</Link></li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer;