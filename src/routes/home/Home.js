import mobileHero from '../../images/mobile-hero.svg';
import desktopHeroImage from '../../images/desktop2-hero.png';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import { getToken } from '../../Utils/LoginUtils';
import './home.css';
import Navbar from '../../components/Navbar/Navbar';
import riderHeroImage from "../../images/rider-bike.png"
import mobileRiderImage from "../../images/rider-bike-mobile.png";
import errandzMockup from "../../images/mockup.png";
import errandzMobileMockup from "../../images/mobile-mockup.png"
import appleStoreImage from "../../images/apple store.svg"
import googleStoreImage from "../../images/Google store.svg"

function Home() {
    return (
        <>
            <Navbar transparent={false} />
            {/* FIRST SECTION */}
            <section id="section-a" className="" >
                <div className="row container mx-auto pb-5 ps-0 pt-0 pt-md-5">
                    {/* <!--INTRO TEXT--> */}
                    <div id="txt-container" className="col-12 col-md-6 d-flex flex-column justify-content-center order-1 order-md-0 ps-4 ps-md-2">
                        <h1>
                            Quick, safe and affordable deliveries for businesses in an eco-friendly way
                        </h1>
                        {getToken() ?
                            <Link to={"/dashboard"} className="btn btn-light text-dark text-decoration-none d-md-inline-flex justify-content-center align-items-center" >Dashboard</Link> :
                            <div>
                                <Link to={"/register/customer"} className="btn btn-light mt-3 me-3 text-dark d-inline-flex justify-content-center align-items-center" >Get Started</Link>
                                <Link to={"/login"} className="btn btn-light mt-3 text-dark d-none d-md-inline-flex justify-content-center align-items-center" >Sign In</Link>
                            </div>
                        }

                    </div>

                    <div className="col-md-6 col-12 pb-4 px-0 px-md-2 d-md-flex">
                        <picture className="mx-auto">
                            <source media="(min-width: 480px)" srcSet={desktopHeroImage} />
                            <source media="(min-width: 992px)" srcSet={desktopHeroImage} />
                            <img className="w-100" src={mobileHero} alt="hero design" />
                        </picture>
                    </div>
                </div>
            </section>


            {/* <!--SECOND SECTION--> */}
            <section id="section-b" className="container my-5 py-5">
                <div className="headercontainer ">
                    <h2 className="text-center mb-5">
                        WHY CHOOSE ERRANDZ
                    </h2>
                </div>

                {/* <!--CARDS CONTAINER--> */}
                <div className="container my-5">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">

                        {/* card item */}
                        <div className=" col rounded rounded-4 ">
                            <div className="card mw-100" style={{ "height": "247px" }}>
                                <div className="card-body d-flex flex-column justify-content-center text-center ">
                                    <h5 className="card-title mb-4">Eco-Friendly</h5>
                                    <p className="card-text">Without the use of third party vehicles,
                                        our bicycles are safe and enviromental friendly.</p>
                                </div>
                            </div>
                        </div>

                        {/* card item */}
                        <div className=" col rounded rounded-4 ">
                            <div className="card mw-100" style={{ "height": "247px" }}>
                                <div className="card-body d-flex flex-column justify-content-center text-center ">
                                    <h5 className="card-title mb-4">Fast Delivery</h5>
                                    <p className="card-text">We are more community based which
                                        makes our delivery faster.</p>
                                </div>
                            </div>
                        </div>

                        {/* card item */}
                        <div className=" col rounded rounded-4 ">
                            <div className="card mw-100" style={{ "height": "247px" }}>
                                <div className="card-body d-flex flex-column justify-content-center text-center ">
                                    <h5 className="card-title mb-4">Financial inclusion</h5>
                                    <p className="card-text">We give financial inclusion
                                        for riders, vendors and also giving back to the society.</p>
                                </div>
                            </div>
                        </div>

                        {/* card item */}
                        <div className=" col rounded rounded-4 ">
                            <div className="card mw-100" style={{ "height": "247px" }}>
                                <div className="card-body d-flex flex-column justify-content-center text-center ">
                                    <h5 className="card-title mb-4">Safe & Affordable</h5>
                                    <p className="card-text">We facilitate businesses to scale faster with
                                        our affordable rate and real time tracking</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="section section-dark pt-5" >
                <div className="row container mx-auto pb-5 px-0 pt-0 pt-md-5">

                    <div className="col-md-5 col-12 pb-4 px-0 px-md-2 d-md-flex">
                        <picture className="mx-auto">
                            <source media="(min-width: 480px)" srcSet={riderHeroImage} />
                            <source media="(min-width: 992px)" srcSet={riderHeroImage} />
                            <img className="w-100" src={mobileRiderImage} alt="hero design" />
                        </picture>
                    </div>

                    {/* <!--INTRO TEXT--> */}
                    <div id="txt-container" className="col-12 col-md-6 d-flex flex-column justify-content-center ms-auto ms-md-4 ps-4 pe-2 ps-md-2">
                        <h2>
                            Make money while riding a bicycle.
                        </h2>
                        <button className="btn btn-light mt-3">
                            {getToken() ?
                                <Link to={"/dashboard"} className="text-dark text-decoration-none" >Dashboard</Link> :
                                <Link to={"/register/rider"} className="text-dark text-decoration-none" >Get Started</Link>
                            }

                        </button>
                    </div>
                </div>
            </section>

            <section id='section-d' className="section pt-5 section-dark" >
                <div className="row container mx-auto pb-5 ps-0 px-3 px-sm-0 pt-0 pt-md-5">

                    {/* <!--INTRO TEXT--> */}
                    <div id="txt-container" className="col-12 px-3 col-md-6 d-flex flex-column justify-content-center ms-auto ms-md-4 px-2">
                        <div className='text-center text-sm-start'>
                            <h2 className='text-white '>
                                Download our App, Send your delivery in seconds
                            </h2>
                            <p className='text-light d-none d-sm-block mb-0'>Available for iOS and Android </p>
                        </div>

                        <div className='d-none d-sm-block'>
                            <button className="btn btn-outline btn-outline-light my-4 rounded-0">coming soon</button>
                            <div className="d-none">
                                <img src={googleStoreImage} width={150} alt="google playstore" />
                                <img src={appleStoreImage} width={130} alt="apple store" />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-5 col-12 pb-0 pb-sm-4 px-3 d-md-flex">
                        <picture className="mx-auto">
                            <source media="(min-width: 480px)" srcSet={errandzMockup} />
                            <source media="(min-width: 992px)" srcSet={errandzMockup} />
                            <img className="w-100" src={errandzMobileMockup} alt="errandz mockup design" />
                        </picture>
                    </div>

                    <div className='d-flex d-sm-none px-3 justify-content-around'>
                        <button className="btn btn-outline btn-outline-light my-4 rounded-0">coming soon</button>
                        <div className="d-none">
                            <img src={googleStoreImage} width={150} alt="google playstore" />
                            <img src={appleStoreImage} width={130} alt="apple store" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer section */}
            <Footer />

        </>
    )
}

export default Home;