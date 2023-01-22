import ErrandzLogo from '../../images/errandz-logo.svg';
import './footer.css';

function Footer() {

    return (
        <footer className="container">

            <div className=" row">
                {/* <!--ERRANZ LOGO ET TEXT--> */}
                <div id="logo-aside" className="col-sm-12 col-md-6">
                    <img src={ErrandzLogo} alt="errandz logo" className="img-fluid" height="140px" width="200px" />
                    <p>
                        Fast and easy, eco-friendly way to make your deliveries.
                    </p>
                </div>

                {/* <!--FOOTER LINKS--> */}
                <div className="col-sm-12 col-md-6 link-wrapper">
                    
                    <div className="f-links">
                        <a href="index.html">Home</a>
                        <a href="about.html">About</a>
                        <a href="faq.html">FAQ</a>
                        <a href="contact.html">Contact</a>
                    </div>
                    <div className="f-links">
                        <a href="#f">License</a>
                        <a href="#ff">Privacy Policy</a>
                        <a href="#f">Copyright</a>
                        <a href="#f">Social Media</a>
                    </div>
                    <div className="f-links">
                        <a href="#f">Twitter</a>
                        <a href="#f">Instagram</a>
                        <a href="#f">Facebook</a>
                    </div>
                    
                    <div class="f-link">
                        <h5>Section</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer;