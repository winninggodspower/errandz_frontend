import React from 'react'
import homeButton from "../../images/homebutton.svg"
import profileButton from "../../images/profilebutton.svg"
import bellButton from "../../images/bellbutton.svg"
import { NavLink } from 'react-router-dom'
import "./bottomnav.css"

export default function BottomNav() {
  return (
    <div className='fixed-bottom bg-white py-2 d-none' id='botom-nav'>

      <div className='d-flex justify-content-around container'>
        <NavLink to={"/dashboard"} className='text-dark text-decoration-none text-center'  >
          <img src={homeButton} alt="home icon" className='opacity-100 text-dark  '/>
          <span className='bottomnav-text d-block mt-1 text-dark'   >Home</span>
        </NavLink>

        <NavLink to={"/profile"} className='text-dark text-decoration-none text-center'>
          <img src={profileButton} alt="profild icon" />
          <span className='bottomnav-text d-block mt-1 '>Profile</span>
        </NavLink>

        <NavLink to={"/notification"} className='text-dark text-decoration-none text-center'>
          <img src={bellButton} alt="notification icon"/>
          <span className='bottomnav-text d-block mt-1 '>Update</span>
        </NavLink>
      </div>

    </div>
  )
}
