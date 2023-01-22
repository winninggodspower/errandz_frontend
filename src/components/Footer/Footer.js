import ErrandzLogo from '../../images/errandz-logo.svg';
import './footer.css';

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
                            <li class="nav-item mb-2"><a href="#" class="nav-link active p-0 ">Home</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 ">About</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 ">Contact</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 ">FAQs</a></li>
                        </ul>
                    </div>

                    <div class="col">
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="#" class="nav-link active p-0 ">Licence</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 ">Privacy Policy</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 ">Copyright</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 ">Email</a></li>
                        </ul>
                    </div>

                    <div class="col">
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="#" class="nav-link active p-0 ">Socials</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 ">Twitter</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 ">Instagram</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 ">Facebook</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer;