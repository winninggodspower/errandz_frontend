import mobileHero from '../../images/mobile-hero.svg';
import desktopHero from '../../images/desktop-hero.svg';

function Home(){
    return (
        <>
        {/* <!--FIRST SECTION--> */}
        <section id="section-a" class="container-fluid" >
            <div 
                class="row b-wrapper">
                {/* <!--INTRO TEXT--> */}
        
                <div class="col-md-12 col-lg-6 txtContainer">
                    <h1>
                        Quick, safe and affordable deliveries for businesses
                        in an eco-friendly way.
                    </h1>
                    <button>
                        Get Started
                    </button>
                </div>
                <div class="col-xl-5 col-xs-12 offset-xl-1 imgContainer container-fluid">
                    <picture>
                        <source media="(min-width: 480px)" srcset={mobileHero} />
                        <source media="(min-width: 992px)" srcset={desktopHero} />
                        <img class="img-fluid img-rounded" src="./images/11 1.svg" alt="Lots of cakes" />
                    </picture>
                </div>
            </div>
        </section>


        {/* <!--SECOND SECTION--> */}
        <section id="section-b" class="container-fluid">
            <div class="headercontainer">
                <h2>
                    WHY CHOOSE ERRANDZ
                </h2>
            </div>

            {/* <!--CARDS CONTAINER--> */}
            <div id="cdCont" class ="container-fluid">
                <div class="row justify-content-center deck">
                    {/* <!--CARD DECK--> */}
                    
                        <div class="col-md-2 col-sm-12 box">
                            <h2>
                                Eco-Friendly
                            </h2>
                            <p>
                                Without the use of third party vehicles,
                                our bicycles are safe and enviromental friendly.
                            </p>
                        </div>

                        {/* <!--CARD DECK--> */}
                        <div class="col-md-2 col-sm-12 box">
                            <h2>
                                Fast Delivery
                            </h2>
                            <p>
                                We are more community based which
                                makes our delivery faster.
                            </p>
                        </div>

                        {/* <!--CARD DECK--> */}
                        <div class="col-md-2 col-sm-12 box">
                            <h2>
                                Financial inclusion
                            </h2>
                            <p>
                                Flexibility and variety gives financial inclusion
                                for riders, vendors and also giving back to the society.
                            </p>
                        </div>

                        {/* <!--CARD DECK--> */}
                        <div class="col-md-2 col-sm-12 box">
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
        <footer class="container-fluid">

            <div class="f-wrapper row">
                {/* <!--ERRANZ LOGO ET TEXT--> */}
                <div id="logo-aside" class="col-sm-12 col-md-6">
                    <img src="./images/errandz PPIC2 (1) 1.svg" alt="errandz logo" class="img-fluid" height="140px" width="200px" />
                    <p>
                        Fast and easy, eco-friendly way to make your deliveries.
                    </p>
                </div>

                {/* <!--FOOTER LINKS--> */}
                <div class="col-sm-12 col-md-6 link-wrapper">
                    <div class="f-links">
                        <a href="index.html">Home</a>
                        <a href="about.html">About</a>
                        <a href="faq.html">FAQ</a>
                        <a href="contact.html">Contact</a>
                    </div>
                    <div class="f-links">
                        <a href="#f">License</a>
                        <a href="#ff">Privacy Policy</a>
                        <a href="#f">Copyright</a>
                        <a href="#f">Social Media</a>
                    </div>
                    <div class="f-links">
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