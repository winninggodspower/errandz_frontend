import mobileHero from '../../images/mobile-hero.svg';
import desktopHeroImage from '../../images/desktop2-hero.png';
import { Link } from 'react-router-dom';
import './home.css';

function Home(){
    return (
        <>
        {/* FIRST SECTION */}
        <section id="section-a" className="" >
            <div className="row container mx-auto pb-5 pt-0 pt-md-5">
                {/* <!--INTRO TEXT--> */}
                <div id="txt-container" className="col-md-12 col-lg-6 d-flex flex-column justify-content-center order-1 order-md-0 ">
                    <h1>
                        Quick, safe and affordable deliveries for businesses in an eco-friendly way
                    </h1>
                    <button class="btn btn-light mt-3">
                        <Link to={"/login"} className="text-dark text-decoration-none" >Get Started</Link>
                    </button>
                </div>

                <div className="col-md-6 col-12 pb-4 px-0 px-md-2 d-md-flex ">
                    <picture class="ms-auto">
                        <source media="(min-width: 480px)" srcSet={desktopHeroImage} />
                        <source media="(min-width: 992px)" srcSet={desktopHeroImage} />
                        <img className="mw-100" src={mobileHero} alt="Lots of cakes" />
                    </picture>
                </div>
            </div>
        </section>


        {/* <!--SECOND SECTION--> */}
        <section id="section-b" className="container-fluid">
            <div className="headercontainer">
                <h2>
                    WHY CHOOSE ERRANDZ
                </h2>
            </div>

            {/* <!--CARDS CONTAINER--> */}
            <div id="cdCont" class ="container-fluid">
                <div className="row justify-content-center deck">
                    {/* <!--CARD DECK--> */}
                    
                        <div className="col-md-2 col-sm-12 box">
                            <h2>
                                Eco-Friendly
                            </h2>
                            <p>
                                Without the use of third party vehicles,
                                our bicycles are safe and enviromental friendly.
                            </p>
                        </div>

                        {/* <!--CARD DECK--> */}
                        <div className="col-md-2 col-sm-12 box">
                            <h2>
                                Fast Delivery
                            </h2>
                            <p>
                                We are more community based which
                                makes our delivery faster.
                            </p>
                        </div>

                        {/* <!--CARD DECK--> */}
                        <div className="col-md-2 col-sm-12 box">
                            <h2>
                                Financial inclusion
                            </h2>
                            <p>
                                Flexibility and variety gives financial inclusion
                                for riders, vendors and also giving back to the society.
                            </p>
                        </div>

                        {/* <!--CARD DECK--> */}
                        <div className="col-md-2 col-sm-12 box">
                            <h2>
                                Safe & Affordable
                            </h2>
                            <p>
                                We facilitate businesses to scale faster with
                                our affordable rate and real time tracking
                            </p>
                        </div>
                       
                </div>
            </div>
        </section>


        {/* <!--FOOTER SECTION--> */}
        <footer className="container-fluid">

            <div className="f-wrapper row">
                {/* <!--ERRANZ LOGO ET TEXT--> */}
                <div id="logo-aside" className="col-sm-12 col-md-6">
                    <img src="./images/errandz PPIC2 (1) 1.svg" alt="errandz logo" className="img-fluid" height="140px" width="200px" />
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
                </div>
            </div>   
        </footer>
        </>
    )
}

export default Home;