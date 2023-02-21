import ErrandzLogo from '../../images/errandz-logo.svg';
import facebookIcon from "../../images/icons/facebookIcon.svg";
import instagramIcon from "../../images/icons/instagramIcon.svg";
import twitterIcon from "../../images/icons/twitterIcon.svg";
import './footer.css';
import { Link } from 'react-router-dom';
import TermsPage from '../../routes/errandz/terms';
import { useState } from 'react';


function Footer() {
    const [modal, setModal] = useState("none")
    const CloseModal = ()=> {
        setModal("none")
    }

    const OpenModal = ()=> {
        setModal("flex")
    }
    return (
        <footer className="py-5">
            <div id='myModal' className='py-2' onClick={CloseModal} style={{display:modal}} >
                <TermsPage close={CloseModal} />
            </div>

            <div className="row container mx-auto justify-content-between mb-5 mb-md-2">

                {/* <!--ERRANZ LOGO ET TEXT--> */}
                <div  className="col-12 col-sm-7 mb-3">
                    <img src={ErrandzLogo} alt="errandz logo" className="img-fluid" height="140px" width="200px" />
                    <div className='py-1 ps-2'>
                        <a href='https://www.facebook.com/errandzhq'>
                            <img className='me-3' width={30} src={facebookIcon} />
                        </a>
                        <a href='https://www.instagram.com/errandzhq/'>
                            <img className='me-3' width={30} src={instagramIcon} />
                        </a>
                        <a href='https://twitter.com/errandzhq'>
                            <img className='me-3' width={30} src={twitterIcon} />
                        </a>
                    </div>
                </div>

                {/* <!--FOOTER LINKS--> */}
                <div className="col-12 col-sm row row-col-3">
                    
                    <div class="col">
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><Link to={'/'} class="nav-link active p-0 ">Home</Link></li>
                            <li class="nav-item mb-2"><Link to={'about/us'} class="nav-link p-0 ">About</Link></li>
                            <li class="nav-item mb-2"><Link to={'contact/us'} class="nav-link p-0 ">Contact</Link></li>
                            <li class="nav-item mb-2"><Link to={'/faq'} class="nav-link p-0 ">FAQs</Link></li>
                        </ul>
                    </div>

                    <div class="col">
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><Link to={'/'} class="nav-link active p-0 ">Licence</Link></li>
                            <li class="nav-item mb-2"><Link to={'/'} class="nav-link p-0 " onClick={OpenModal}>Terms of Services</Link></li>
                            <li class="nav-item mb-2"><Link to={'/privacy'} class="nav-link p-0 ">Privacy policy</Link></li>
                            <li class="nav-item mb-2"><Link to={'/'} class="nav-link p-0 ">Email</Link></li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer;