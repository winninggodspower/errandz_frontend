import mobileHero from '../../images/mobile-hero.svg';
import desktopHero from '../../images/desktop-hero.svg';
import { Link } from 'react-router-dom';

function Home(){
    return (
        <>
        {/* <!--FIRST SECTION--> */}
        <section id="section-a" className="container-fluid" >
            <div 
                className="row b-wrapper">
                {/* <!--INTRO TEXT--> */}
        
                <div className="col-md-12 col-lg-6 txtContainer">
                    <h1>
                        Quick, safe and affordable deliveries for businesses
                        in an eco-friendly way.
                    </h1>
                    <button>
                        <Link to={"/login"} >Get Started</Link>
                    </button>
                </div>
                <div className="col-xl-5 col-xs-12 offset-xl-1 imgContainer container-fluid">
                    <picture>
                        <source media="(min-width: 480px)" srcSet={mobileHero} />
                        <source media="(min-width: 992px)" srcSet={desktopHero} />
                        <img className="img-fluid img-rounded" src="./images/11 1.svg" alt="Lots of cakes" />
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