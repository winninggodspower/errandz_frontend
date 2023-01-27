import map from "../../images/map.png"
import Navbar from "../../components/Navbar/Navbar";
import "./delivery.css"


function Delivery() {
    return (
        <>
            <Navbar transparent={false} />
            <div class="form-map bg-very-light">


                <div id="map" class="position-relative">
                    <img src={map} alt="" width="100%" height="400px" style={{ objectFit: "cover" }} />
                    <div id="faded-circle" class="position-absolute bottom-0 w-100 bg-light rounded-top-up">

                    </div>
                </div>

                <div class="rounded-top-up " style={{ backgroundColor: "white" }}>
                    <div class="container pt-5">

                        <div class="px-4 mx-auto" style={{ width: "600px", maxWidth: "100%" }}>


                            <form action="" method="post" class="my-3">
                                <fieldset class="pb-1 pb-md-3">
                                    <div id="grid-container" class="d-grid">
                                        <div class="me-2" id="dot1-container">
                                            <div id="dot1">
                                                <img src="./images/dot.svg" alt="" />
                                            </div>
                                        </div>
                                        <div class="forms">
                                            <legend class="mb-3 mb-md-4 text-uppercase ">Pickup</legend>
                                            <div class="mb-3">
                                                <input class="form-control" id="pickup-name" type="text" placeholder="Name"
                                                    aria-label="godfred obot" />
                                            </div>

                                            <div class="mb-3">
                                                <input class="form-control" type="text" placeholder="Location"
                                                    aria-label="alakahia chaoba" />
                                            </div>

                                            <div class="mb-3">
                                                <input class="form-control" type="text" placeholder="Phone number"
                                                    aria-label="08123902721" />
                                            </div>

                                            <div class="mb-3 d-noee d-md-block">
                                                <input class="form-control" type="text" placeholder="Email"
                                                    aria-label="godfredobot@gmail.com" />
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>

                                <fieldset class="pb-1 pb-md-3">
                                    <div id="grid-container" class="d-grid">
                                        <div class="me-2">
                                            <div id="dot2">
                                                <img src="./images/dot.svg" alt="" />
                                            </div>
                                        </div>

                                        <div>
                                            <legend class="mb-3 mb-md-4 text-uppercase">Delivery</legend>

                                            <div class="mb-3">
                                                <input class="form-control" type="text" placeholder="Name"
                                                    aria-label="godfred obot" />
                                            </div>

                                            <div class="mb-3">
                                                <input class="form-control" type="text" placeholder="Location"
                                                    aria-label="alakahia chaoba" />
                                            </div>

                                            <div class="mb-3">
                                                <input class="form-control" type="text" placeholder="Phone number"
                                                    aria-label="08123902721" />
                                            </div>

                                            <div class="mb-3 d-noee d-md-block">
                                                <input class="form-control" type="text" placeholder="Email"
                                                    aria-label="godfredobot@gmail.com" />
                                            </div>

                                            <div class="mb-3">
                                                <textarea class="form-control" id="parcel description"
                                                    placeholder="parcel description" rows="2"></textarea>
                                            </div>
                                        </div>
                                    </div>

                                </fieldset>

                                <fieldset class="pb-1 pb-md-3 d-none d-md-block">
                                    <div class="row">
                                        <div class="col">
                                            <button class="btn border border-2 w-100 py-2"> <img src="./images/money.svg"
                                                width="30px" alt="" /> Cash</button>
                                        </div>
                                        <div class="col">
                                            <button class="btn border border-2 w-100 py-2"> <img src="./images/wallet.svg"
                                                width="30px" alt="" /> Wallet</button>
                                        </div>
                                    </div>
                                </fieldset>

                                <button type="submit" class="btn btn-dark btn-lg w-100">Request Delivery</button>

                            </form>

                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Delivery;