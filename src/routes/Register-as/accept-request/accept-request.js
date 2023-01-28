import map from "../../../image/map.png"
import Location from "../../../image/Location.png"
import Line5 from "../../../image/Line5.png"
import Ellipse8 from "../../../image/Ellipse8.png"



function AcceptRequest(){
    return (
        <>
            
    <div class="form-map bg-very-light">

<div id="map" class="position-relative">
    <img src={map} alt="" width="100%" height="400px" style={{objectFit: "cover", objectPosition: "bottom"}} />
</div>

<div class="py-5 my-5">

    <div class="text-center">
        <img class="rounded-circle" src={Ellipse8} width="50px" alt="" />
    </div>
    
    <div class="text-center mt-4 px-3">
        <img src={Location} alt="location icon" width="20px" style={{verticalAlign: "text-bottom"}} />
        <span>No 22 redemption lane, GRA Port Harcourt</span>
    </div>

    <div class="text-center my-2">
        <img src={Line5} alt="" />
    </div>

    <div class="text-center mb-5 px-3">
        <img src={Location} alt="location icon" width="20px" style={{verticalAlign: "text-bottom"}} />
        <span>Gods own plaza, shop 102 Dline, Port Harcourt</span>
    </div>

    <div class="text-center">
        <button class="btn btn-dark" style={{width: "150px", height: "45px"}}>Accept</button>
    </div>

</div>

</div>
        </>
    )
}

export default AcceptRequest;