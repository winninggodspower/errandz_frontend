import mobileHero from '../../images/mobile-hero.svg';
import desktopHeroImage from '../../images/desktop2-hero.png';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import { getToken } from '../../Utils/LoginUtils';
import './home.css';
import Navbar from '../../components/Navbar/Navbar';
import riderHeroImage from "../../images/rider-picture.png"
import mobileRiderImage from "../../images/rider-picture-mobile.png"

function Home(){
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
                    <button className="btn btn-light mt-3">
                        { getToken() ?
                         <Link to={"/dashboard"} className="text-dark text-decoration-none" >Dashboard</Link> : 
                         <Link to={"/register_as"} className="text-dark text-decoration-none" >Get Started</Link>
                        }
                       
                    </button>
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
        <section id="section-b" className="container my-5">
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
                            <div className="card mw-100" style={{"height" : "247px"}}>
                                <div className="card-body d-flex flex-column justify-content-center text-center ">
                                    <h5 className="card-title mb-4">Eco-Friendly</h5>
                                    <p className="card-text">Without the use of third party vehicles,
                                    our bicycles are safe and enviromental friendly.</p>
                                </div>
                            </div>
                        </div>

                        {/* card item */}
                        <div className=" col rounded rounded-4 ">
                            <div className="card mw-100" style={{"height" : "247px"}}>
                                <div className="card-body d-flex flex-column justify-content-center text-center ">
                                    <h5 className="card-title mb-4">Fast Delivery</h5>
                                    <p className="card-text">We are more community based which
                                    makes our delivery faster.</p>
                                </div>
                            </div>
                        </div>

                        {/* card item */}
                        <div className=" col rounded rounded-4 ">
                            <div className="card mw-100" style={{"height" : "247px"}}>
                                <div className="card-body d-flex flex-column justify-content-center text-center ">
                                    <h5 className="card-title mb-4">Financial inclusion</h5>
                                    <p className="card-text">Flexibility and variety gives financial inclusion
                                    for riders, vendors and also giving back to the society.</p>
                                </div>
                            </div>
                        </div>

                        {/* card item */}
                        <div className=" col rounded rounded-4 ">
                            <div className="card mw-100" style={{"height" : "247px"}}>
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

        <section id="section-a" className="pt-5" >
            <div className="row container mx-auto pb-5 ps-0 pt-0 pt-md-5">

                <div className="col-md-5 col-12 pb-4 px-0 px-md-2 d-md-flex">
                    <picture className="mx-auto">
                        <source media="(min-width: 480px)" srcSet={riderHeroImage} />
                        <source media="(min-width: 992px)" srcSet={riderHeroImage} />
                        <img className="w-100" src={mobileRiderImage} alt="hero design" />
                    </picture>
                </div>

                {/* <!--INTRO TEXT--> */}
                <div id="txt-container" className="col-12 col-md-6 d-flex flex-column justify-content-center ms-auto ms-md-4 ps-4 ps-md-2">
                    <h1>
                    Make money while riding a bicycle.
                    </h1>
                    <button className="btn btn-light mt-3">
                        { getToken() ?
                         <Link to={"/dashboard"} className="text-dark text-decoration-none" >Dashboard</Link> : 
                         <Link to={"/register/rider"} className="text-dark text-decoration-none" >Get Started</Link>
                        }
                       
                    </button>
                </div>
            </div>
        </section>

        {/* Footer section */}
        <Footer />

        </>
    )
}

export default Home;