import React from "react"
import "./profile.css"
import Email from "../../image/Email.svg"
import Home from "../../image/Home.svg"
import Exit from "../../image/Exit.svg"
import Ellipse from "../../image/Ellipse.png"
import Navbar from "../../components/Navbar/Navbar"



function Profile(){
    return(
        <>
        <Navbar transparent={false} />
        <div style={{minHeight:"700px"}}>
            <div class="container mx-auto" style={{maxWidth: "800px"}}>

<div class="mt-5 d-flex flex-column flex-md-row">
    <img class="rounded-circle mx-auto mx-2 mx-md-0" id="profile-img" src={Ellipse} alt="profile image" style={{ width:"100px" ,height:"100px"}} />
    <div class="align-self-center ms-0 ms-md-4 text-center text-md-start">
        <p id="username" class="mb-0 fw-md-semibold mt-2">Dammy</p>
        <p id="phone" class="mb-0 mt-1">+234**********</p>
    </div>
</div>

<div class="user-info ms-4 mt-5">
    <div class="info d-flex align-items-center mt-3">
        <img src={Email} style={{width:"30px"}} alt="email icon" />
        <span class="ms-3 ms-md-4 ">tgirl001@gmail.com</span>
    </div>

    <div class="info d-flex align-items-center mt-3">
        <img src={Home} style={{width:"30px"}} alt="" />
        <span class="ms-3 ms-md-4 ">Home Address</span>
    </div>
</div>

<div class="exit-wrapper ms-4">
    <hr class="my-4" />
    <div class="exit-container mt-3">
        <img src={Exit} style={{width:"30px"}} alt="exit image" />
        <span class="ms-3 ms-md-4">Log Out</span>
    </div>
</div>

</div>
</div>
        </>
    )
}

export default Profile